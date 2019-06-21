import React from "react";
import Tab from "../Tab/Tab";
import styled from "styled-components";

const MenuDiv = styled.div`
    display: flex;
    flex-direction: column;
  `,
  MenuItem = styled.div`
    display: flex;
    align-items: center;
    background: white;
    text-align: center;
    font-family: Helvetica;
  `,
  Logo = styled.div`
    margin: 10px;
    font-size: 30px;
    font-weight: bold;
    font-family: Helvetica;
  `;
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: this.props.children[0].props.label
    };
  }
  onClick = label => {
    this.setState({ isActive: label });
  };

  render() {
    const {
      props: { children },
      state: { isActive },
      onClick
    } = this;

    return (
      <MenuDiv>
        <MenuItem>
          <Logo>CONVOY</Logo>
          {children.map((item, index) => {
            return (
              <Tab
                key={index}
                label={item.props.label}
                isActive={isActive}
                onClick={onClick}
              />
            );
          })}
        </MenuItem>
        <div className="content" style={{ margin: "10px" }}>
          {children.filter(item => {
            return item.props.label === isActive ? item.props.children : "";
          })}
        </div>
      </MenuDiv>
    );
  }
}
export default Menu;
