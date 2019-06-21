import React from "react";
import styled from "styled-components";
const Button = styled.button`
  cursor: pointer;
  border: 1px solid;
  padding: 8px;
  width: 120px;
  border-radius: 5px;
  font-size: 20px;
  margin-top: 20px;
  text-align: center;
  color: white;
  background-color: #888888;
`;
class ShowMore extends React.Component {
  render() {
    return <Button onClick={this.props.onClick}>Show More</Button>;
  }
}

export default ShowMore;
