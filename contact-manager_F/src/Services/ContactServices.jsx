// import axios from "axios";

// export class ContactServices{
//     static serverURl=`http://localhost:8000`;
//     static getAllContacts(){
//         let dataUrl= `${this.serverURl}/contacts`
//         return axios.get(dataUrl)
//     }

//     static getContact(contactId){
//         let dataUrl= `${this.serverURl}/contacts/${contactId}`
//         return axios.get(dataUrl)
//     }

//     static createContact(contact){
//         let dataURL=`${this.serverURl}/contacts`;
//         return axios.post(dataURL,contact)
//     }

//     static updateContact(contact,contactId){
//         let dataURL=`${this.serverURl}/contacts/${contactId}`;
//         return axios.put(dataURL,contact)
//     }

//     static deleteContact(contactId){
//         let dataUrl= `${this.serverURl}/contacts/${contactId}`;
//         return axios.delete(dataUrl)
//     }
// }
// import axios from "axios";

// export class ContactServices{
//     static serverURl=`http://localhost:8081`;
//     static getAllContacts(){
//         let dataUrl= `${this.serverURl}/users`
//         return axios.get(dataUrl)
//     }

//     static getContact(id){
//         let dataUrl= `${this.serverURl}/user/${id}`
//         return axios.get(dataUrl)
//     }
    
//     static createContact(contact){
//         let dataURL=`${this.serverURl}/users`;
//         return axios.post(dataURL,contact)
//     }

//     static updateContact(contact){
//         let dataURL=`${this.serverURl}/users`;
//         return axios.put(dataURL,contact)
//     }

//     static deleteContact(id){
//         let dataUrl= `${this.serverURl}/user/${id}`;
//         return axios.delete(dataUrl)
//     }
// }

import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8081';

export class ContactServices {
    static serverURl = `http://localhost:8081`;
    
    static getAllContacts() {
        let dataUrl = `${this.serverURl}/users`;
        console.log(dataUrl)
        return axios.get(dataUrl);
    }

    static getContact(contactId) {
        let dataUrl = `${this.serverURl}/user/${contactId}`;
        return axios.get(dataUrl);
    }

    static createContact(contact) {
        console.log("Contact to be added:", contact); // Add this line
        let dataURL = `${this.serverURl}/users`;
        return axios.post(dataURL, contact);
    }

    static updateContact(contact, contactId) {
        let dataURL = `${this.serverURl}/users/${contactId}`;
        return axios.put(dataURL, contact);
    }

    static deleteContact(contactId) {
        let dataUrl = `${this.serverURl}/user/${contactId}`;
        return axios.delete(dataUrl);
    }
}
