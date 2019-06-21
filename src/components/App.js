import React from "react";
import Menu from "./Menu/Menu";
import Offers from "../components/Offers/Offers";
import MyJobs from "../components/MyJobs/MyJobs";
import styled from "styled-components";
import "./App.css";
const AppDiv = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
`;
class App extends React.Component {
  render() {
    return (
      <AppDiv>
        <Menu>
          <div label="Offers">
            <Offers />
          </div>
          <div label="My Jobs">
            <MyJobs />
          </div>
        </Menu>
      </AppDiv>
    );
  }
}

export default App;
