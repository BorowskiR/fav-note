import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import PageContext from 'context';
import { theme } from 'theme/mainTheme';

class MainTemplate extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    pageType: 'notes',
  };

  componentDidMount() {
    this.setCurrentPage();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setCurrentPage(prevState);
  }

  setCurrentPage = (prevState = '') => {
    const pageTypes = ['notes', 'articles', 'twitters'];
    const {
      location: { pathname },
    } = this.props;

    const [currentPage] = pageTypes.filter(page => pathname.includes(page));

    if (prevState.pageType !== currentPage) {
      this.setState({ pageType: currentPage });
      // console.log(this.state);
    }
  };

  render() {
    const { children } = this.props;
    const { pageType } = this.state;

    return (
      <PageContext.Provider value={pageType}>
        <div>
          <GlobalStyle />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </div>
      </PageContext.Provider>
    );
  }
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(MainTemplate);
