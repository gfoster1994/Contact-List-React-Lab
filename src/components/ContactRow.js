import React from "react";

const ContactRow = (props) => {
  const contact = props.contact;
  return (
    <tr onClick={() => {
        props.selectContact(props.contact.id)
        
    }}>
      <td>{contact.name}</td>
      <td>{contact.phone}</td>
      <td>{contact.email}</td>
    </tr>
  );
};

export default ContactRow;
