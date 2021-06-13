import React, { useState } from 'react';
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {

  /*
  Define state variables for 
  contacts and appointments 
  */
const [contacts, setContacts] = useState([{name:'abc',phone:'123',email:'a@b.com'}]);
 const [appointments, setAppointments] =useState([{name:'test',contact:'leon',date:'a30201', time:'23:00'}]);


 const addContact = (name,phone,email) =>{
  setContacts((prevContacts)=>{
      return [...prevContacts,{name,phone,email}];
  });
  
};

const addAppointment = (title,contact,date, time) => {
  setAppointments(prev => [...prev, {title ,contact ,date ,time}]);
  
};



  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };


  /*
  Implement functions to add data to
  contacts and appointments
  */

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addContact={addContact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage contacts={contacts} appointments={appointments} addAppointment={addAppointment}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
