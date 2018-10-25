import React, { Component } from 'react';
import Header from '../components/Header/Header';
import './Page.scss';
import { connect } from 'react-redux';
import Example from '../components/Example/Example';

class Page extends Component {
  constructor (props) {
    super (props);

    this.state = {
      status: null,
      success: null
    }
  }

  componentDidMount () {
    this.setState({
      status: this.props.status,
      success: this.props.success,
    })
  }
  render () {
    const { status, success } = this.props;
    return (
      <div className="container">
        <Header />
          <Example
            onClick={event => this.props.toggleStatus(event, status)}
            heading="This value always be persistent."
            element="status"
            state={this.state.status}
            prop={status}
          />
          <Example
            onClick={event => this.props.toggleSuccess(event, success)}
            heading="This will not be persistent."
            element="success"
            state={this.state.success}
            prop={success}
          />
      </div>
    );
  };
};

const mapStateToProps = state => ({
  status: state.status,
  success: state.success,
});

const mapDispatchToProps = dispatch => ({
  toggleStatus (event, status) {
    event.preventDefault();
    dispatch({
      type: 'CHANGE_STATUS',
      payload: !status,
    });
  },
  toggleSuccess (event, success) {
    event.preventDefault();
    dispatch({
      type: 'CHANGE_SUCCESS',
      payload: !success,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);