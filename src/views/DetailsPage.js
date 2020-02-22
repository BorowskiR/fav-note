/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import withContext from 'hoc/withContext';
import { connect } from 'react-redux';
import axios from 'axios';

class DetailsPage extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    activeItem: {
      title: '',
      content: '',
      articleUrl: '',
      twitterName: '',
    },
  };

  componentDidMount() {
    if (this.props.activeItem) {
      const [activeItem] = this.props.activeItem;
      this.setState({ activeItem });
    } else {
      const { id } = this.props.match.params;
      axios
        .get(`http://localhost:9000/api/note/${id}`)
        .then(({ data }) => {
          this.setState({ activeItem: data });
        })
        .catch(err => console.log(err));
    }
  }

  render() {
    const { activeItem } = this.state;

    return (
      <DetailsTemplate
        title={activeItem.title}
        content={activeItem.content}
        articleUrl={activeItem.articleUrl}
        twitterName={activeItem.twitterName}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps.pageContext);

  if (state[ownProps.pageContext]) {
    return {
      // eslint-disable-next-line no-underscore-dangle
      activeItem: state[ownProps.pageContext].filter(item => item._id === ownProps.match.params.id),
    };
  }
  return {};
};

export default withContext(connect(mapStateToProps)(DetailsPage));
