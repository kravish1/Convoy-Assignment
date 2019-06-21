import React from "react";
import styled from "styled-components";

const TabDiv = styled.div`
  height: 40px;
  width: 100px;
  margin-top: 20px;
  margin-left: 30px;
  font-size: 20px;
  cursor: pointer;
`;
class Tab extends React.Component {
  handleClick = event => {
    this.props.onClick(this.props.label);
  };

  render() {
    const active = {
      borderBottom: "3px solid red"
    };
    const { isActive, label } = this.props;
    return (
      <TabDiv
        style={isActive === label ? { ...active } : null}
        onClick={this.handleClick}
      >
        {this.props.label}
      </TabDiv>
    );
  }
}

export default Tab;
