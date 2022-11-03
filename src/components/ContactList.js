import React from "react";
import ContactRow from "./ContactRow";

const ContactList = (props) => {
  const contacts = props.contacts;

  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
        {contacts.map((contact) => {
          //   console.log(contact);
          return (
            <ContactRow
              key={contact.id}
              contact={contact}
              selectContact={props.selectContact}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default ContactList;
