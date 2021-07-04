import React, { Component } from 'react';
import ErrorPage from '../../pages/ErrorPage';

class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, info) {

    this.setState(() => ({
      error: true,
    }));
    console.log({ error, info });
  }

  render() {
    console.log(this.props.children);
    if (this.state.error)
      return <ErrorPage />;
    return this.props.children;
  }
}

export default ErrorBoundary;
