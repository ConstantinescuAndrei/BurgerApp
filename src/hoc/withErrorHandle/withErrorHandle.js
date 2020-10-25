import React, { Component } from "react";

import Modal from "../../components/UI/Modal/Modal";
import Auxiliary from "../Auxiliary/Auxiliary";

const withErorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };

    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          this.setState({ error: error });
        }
      );
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }

    errorConfirmedHandle = () => {
      this.setState({ error: null });
    };

    render() {
      return (
        <Auxiliary>
          <Modal
            show={this.state.error}
            modalClosed={(this.state, this.errorConfirmedHandle)}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Auxiliary>
      );
    }
  };
};

export default withErorHandler;
