import React from "react";
import NavBar from "./Component/NavBar/NavBar";
import { Navigate, Route, Routes } from "react-router-dom";
import ContactList from "./Component/Contacts/list/ContactList";
import AddContact from "./Component/Contacts/add/AddContact";
import EditContact from "./Component/Contacts/edit/EditContact";
import ViewContact from "./Component/Contacts/view/ViewContact";

function App() {
  return (
    <>
        <NavBar/>    
        <Routes>
          <Route path="/" element={<Navigate to={'Contacts/list'}/>}/>
            <Route path="/Contacts/list" element={<ContactList/>} />
            <Route path="/Contacts/add"  element={<AddContact/>} />
            <Route path="/Contacts/edit/:contactId" element={<EditContact/>} />
            <Route path="/Contacts/view/:contactId" element={<ViewContact/>} />
            {/* <Route path="/Contacts/edit/" element={<EditContact/>} />
            <Route path="/Contacts/view/" element={<ViewContact/>} /> */}


        </Routes>
    </>
  );
}

export default App;
