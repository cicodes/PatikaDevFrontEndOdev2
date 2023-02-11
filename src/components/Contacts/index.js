import { useState, useEffect } from "react";
import List from "./List";
import Form from "./Form";
import "./styles.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "ogz",
      phone_number: "12312",
    },
    {
      fullname: "ser",
      phone_number: "67890",
    },
    {
      fullname: "met",
      phone_number: "34566",
    },
  ]);

  // useEffect(() => {
  //   console.log(contacts);
  // }, [contacts]);

  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
