import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  border-left: 10px solid ${({ theme, activecolor }) => theme[activecolor]};
  z-index: 9999;
  position: fixed;
  display: flex;
  padding: 100px 90px;
  flex-direction: column;
  top: 0;
  right: 0;
  height: 100vh;
  width: 680px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;
`;

const StyledTextArea = styled(Input)`
  height: 30vh;
  margin: 30px 0 100px;
  border-radius: 20px;
`;

const StyledInput = styled(Input)`
  margin-top: 30px;
`;

const NewItemBar = ({ pageContext, isVisible }) => (
  <StyledWrapper isVisible={isVisible} activecolor={pageContext}>
    <Heading big>Create new {pageContext}</Heading>
    <StyledInput
      placeholder={pageContext === 'twitters' ? 'Account Name eg. hello_roman' : 'Title'}
    />
    {pageContext === 'articles' && <StyledInput placeholder="link" />}
    <StyledTextArea as="textarea" placeholder="description" />
    <Button activecolor={pageContext}>Add Note</Button>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'articles', 'twitters']),
  isVisible: PropTypes.func.isRequired,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
};

export default withContext(NewItemBar);
