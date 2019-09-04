import React, { useState } from "react";

export default class Collapsible extends React.Component {
  ref = React.createRef();

  componentDidMount() {
    if (!this.props.initiallyCollapsed) {
      this.ref.current.style.height = `${this.ref.current.scrollHeight}px`;
    } else {
      this.ref.current.style.height = `0px`;
    }
  }

  componentDidUpdate(prevProps) {
    const { toggle } = this.props;
    if (toggle != prevProps.toggle) {
      this.toggleCollapse();
    }
  }

  toggleCollapse = () => {
    if (this.ref.current.style.height !== "0px") {
      this.ref.current.style.height = "0px";
    } else {
      this.ref.current.style.height = `${this.ref.current.scrollHeight}px`;
    }
  };

  render() {
    return (
      <div
        ref={this.ref}
        style={{
          overflow: "hidden",
          transition: "height 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
