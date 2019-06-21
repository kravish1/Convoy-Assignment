import React from "react";
import moment from "moment";
import styled from "styled-components";

const ItemDiv = styled.div`
    border-bottom: 1px solid;
    display: flex;
    justify-content: space-between;
    min-height: 79px;
    padding: 10px;
    background-color: white;
    font-family: Helvetica;
  `,
  Sep = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  `,
  Src = styled.div`
    position: relative;
    top: 4px;
    height: 10px;
    width: 8px;
    border-left: 1px solid grey;
    border-radius: 3px;
    background: grey;
  `,
  Line = styled.div`
    position: relative;
    top: 2px;
    height: 38px;
    width: 1px;
    border-left: 1px solid grey;
    left: 4px;
    color: grey;
  `,
  Des = styled.div`
    height: 10px;
    width: 8px;
    border-left: 1px solid grey;
    border-radius: 3px;
    background: grey;
  `,
  Place = styled.div`
    display: flex;
    width: 300px;
    flex-direction: column;
    margin-right: 150px;
    margin-left: 10px;
    .destination {
      margin-top: auto;
    }
  `,
  Source = styled.div`
    font-weight: bold;
  `,
  Time = styled.div`
    font-size: 12px;
    color: grey;
    font-weight: normal;
  `,
  Destination = styled.div`
    font-weight: bold;
  `,
  Miles = styled.div`
    width: 500px;
    font-weight: bold;
  `,
  Price = styled.div`
    color: green;
    font-weight: bold;
  `;

class Item extends React.Component {
  formatDate = (start, end) => {
    let startDate = moment(start).format("ddd MM/DD hh:mm a"),
      endDate = moment(end).format("hh:mm a"),
      final = startDate + " - " + endDate;

    return final;
  };
  render() {
    const { offer } = this.props;
    return (
      <ItemDiv>
        <Sep>
          <Src />
          <Line />
          <Des />
        </Sep>
        <Place>
          <Source>
            {offer.origin.city}, {offer.origin.state}
            <Time>
              {this.formatDate(
                offer.origin.pickup.start,
                offer.origin.pickup.end
              )}
            </Time>
          </Source>
          <Destination className="destination">
            {offer.destination.city}, {offer.destination.state}
            <Time>
              {this.formatDate(
                offer.destination.dropoff.start,
                offer.destination.dropoff.end
              )}
            </Time>
          </Destination>
        </Place>
        <Miles>{offer.miles} miles</Miles>
        <Price>${offer.offer}</Price>
      </ItemDiv>
    );
  }
}

export default Item;
