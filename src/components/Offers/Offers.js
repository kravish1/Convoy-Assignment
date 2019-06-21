import React from "react";
import Item from "../Item/Item";
import Sort from "../Sort/Sort";
import ShowMore from "../ShowMore/ShowMore";
import styled from "styled-components";

let OffersDiv = styled.div`
    border: 1px solid;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    width: 800px;
    height: 500px;
    overflow: auto;
    box-shadow: 2px 2px 2px #888888;
    border-radius: 3px;
  `,
  SortDiv = styled.div`
    height: 40px;
    width: 800px;
    border: 1px solid;
    position: relative;
    border-radius: 3px;
    font-family: Helvetica;
  `,
  Sortbar = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 12px;
    font-weight: bold;
  `,
  More = styled.div`
    height: 40px;
    width: 800px;
  `,
  Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

class Offers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offers: [],
      limit: 5
    };
  }

  fetchMore = async () => {
    let select = this.child.select,
      selectedValue = select.options[select.selectedIndex].value;
    let response = await fetch(
      `https://convoy-frontend-homework-api.herokuapp.com/offers?limit=${
        this.state.limit
      }&sort=${selectedValue}`
    );
    let data = await response.json();

    let offers = [...this.state.offers, ...data];
    this.setState({ offers });
  };

  onClick = () => {
    this.fetchMore();
  };

  onChange = () => {
    let select = this.child.select,
      selectedValue = select.options[select.selectedIndex].value;
    let offers = this.state.offers.sort((a, b) => {
      if (typeof selectedValue === "object") {
        return b.city.localCompare(a.city);
      } else if (selectedValue === "price") {
        return b.offer - a.offer;
      } else if (selectedValue === "dropoffDate") {
        return (
          Date.parse(b.destination.dropoff.start) -
          Date.parse(a.destination.dropoff.start)
        );
      } else {
        return b[selectedValue] - a[selectedValue];
      }
    });
    this.setState({ offers });
  };

  async componentDidMount() {
    let response = await fetch(
      `https://convoy-frontend-homework-api.herokuapp.com/offers?limit=${
        this.state.limit
      }`
    );
    let offers = await response.json();
    this.setState({ offers });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.offersEnd) {
      this.scrollToBottom();
    }
  }

  scrollToBottom = () => {
    this.offersEnd.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    let offers = this.state.offers.map((offer, index) => {
      return <Item key={index} offer={offer} />;
    });
    return (
      <React.Fragment>
        <Container>
          <SortDiv>
            <Sortbar>
              {" "}
              Sort By :{" "}
              <Sort
                onChange={this.onChange}
                ref={node => {
                  this.child = node;
                }}
              />
            </Sortbar>
          </SortDiv>
          <OffersDiv>
            {offers}
            <div ref={node => (this.offersEnd = node)} />
          </OffersDiv>
          <More>
            <ShowMore onClick={this.onClick} />
          </More>
        </Container>
      </React.Fragment>
    );
  }
}

export default Offers;
