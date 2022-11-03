import React, { useEffect, useState } from "react";
import ContactList from "./ContactList";
import ContactRow from "./ContactRow";
import SingleContact from "./SingleContact";

// const dummyContacts = [
//   { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
//   { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
//   { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
// ];

const Main = () => {
  const [contacts, setContacts] = useState([]);

  const [selectedContact, setSelectedContact] = (useState({}));

  const getContacts = async () => {
    try {
      const response = await fetch(
        "http://jsonplace-univclone.herokuapp.com/users"
      );
      const contacts = await response.json();
      setContacts(contacts);
      // console.log("contacts here", contacts);
    } catch (error) {
      console.log("There was a problem getting contacts!");
    }
  };

  const selectContact = async (contactId) => {
    try {
      const response = await fetch(
        `http://jsonplace-univclone.herokuapp.com/users/${contactId}`
      );
      const contact = await response.json();
      setSelectedContact(contact);
      console.log(contact)
    } catch (error) {
      console.log("There was a problem getting single contact!");
    }
  };

  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div id="main">
      <div id="navbar">
        <div>Contact List</div>
      </div>
      <div id="container">
        {selectedContact.id ? (
          <SingleContact selectedContact={selectedContact} />
        ) : (
          <ContactList contacts={contacts} selectContact={selectContact} />
        )}
      </div>
    </div>
  );
};

export default Main;
