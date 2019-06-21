import React from "react";

class Sort extends React.Component {
  render() {
    return (
      <select
        style={{ border: "none", color: "blue" }}
        ref={node => {
          this.select = node;
        }}
        onChange={this.props.onChange}
      >
        <option>pickupDate</option>
        <option>price</option>
        <option>origin</option>
        <option>destination</option>
        <option>miles</option>
        <option>dropoffDate</option>
      </select>
    );
  }
}

export default Sort;
