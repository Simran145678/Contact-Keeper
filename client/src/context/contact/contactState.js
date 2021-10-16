import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  UPDATE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Sodhi Singh",
        email: "Sodhi@gmail.com",
        phone: "232-232-2332",
        type: "family",
      },
      {
        id: 2,
        name: "Sodhi2",
        email: "Sodhi2@gmail.com",
        phone: "232-232-2222",
        type: "family",
      },
    ],
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);
  //Add Contact

  //Delete Contact

  //Set Current Contact

  //Clear Current Contact

  //Update Contact

  //Filter Contacts

  //Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
