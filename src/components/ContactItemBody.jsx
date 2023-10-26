/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

class ContactItemBody extends React.Component {
  constructor(props) {
    super(props);
    console.log("Item Body Created!");
  }

  render() {
    return (
      <div className="contact-item_body">
        <h3 className="contact-item_title">{this.props.name}</h3>
        <p className="contact-item_username">@{this.props.tag}</p>
        <p className="contact-item_alamat">{this.props.alamat}</p>
      </div>
    );
  }
}
export default ContactItemBody;
