import React, { Component } from "react";

import Auxiliary from "../Auxiliary/Auxiliary";
import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandle = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandle = () => {
    const showSideDrawer = this.state.showSideDrawer;
    this.setState({ showSideDrawer: !showSideDrawer });
  };

  render() {
    return (
      <Auxiliary>
        <Toolbar clicked={this.sideDrawerToggleHandle} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandle}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Auxiliary>
    );
  }
}

export default Layout;
