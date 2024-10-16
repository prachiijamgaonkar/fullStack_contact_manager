import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react';
import { useEffect } from 'react';
import { ContactServices } from '../../../Services/ContactServices';
import Spinner from '../../../Assests/Spinner';
const ViewContact = () => {
  const {contactId}=useParams();

  const[state,setState] =useState({
    loading:true,
    contact:{},
    errorMassage:''
  })

  useEffect(()=>{
    let promise=new Promise((res,rej)=>{
      setState({...state,loading:true,contact:{}});
      let response=ContactServices.getContact(contactId)
      res(response)
      console.log(response)
    })

    promise.then((res1)=>{
      setState({...state,loading:false,contact:res1.data});
      // setState({...state,loading:false,contact:res1});

    }).catch(()=>{
      setState({...state,loading:false,errorMassage:alert('data not found')});
    })
  },[contactId])


  let {loading,contact,errorMassage}=state

  console.log(contact);

  return (
    <>

    <section className='view-contact'>
      <div className="container p-3">
        <div className="row">
        <div className="col">
            <p className="h3 text-primary fw-bold">View Contact</p>
            <p className='fst-italic'>Lorem ipsum Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, eveniet. dolor sit amet consectetur adipisicing elit. In natus ipsum doloribus rerum aperiam est quibusdam? Quam unde eligendi delectus veritatis molestias officiis omnis illum, soluta at. Deserunt, aliquid harum.</p>
        </div>
        </div>
        {
          loading?<Spinner/>:<React.Fragment>
            {
              Object.keys(contact).length &&<section>
                <div className="row justify-content-center mt-2">
          <div className="col-md-6">
            <img src={contact.photo} alt="" className='contact-img'/>
          </div>
        </div>
        <div className="row mt-2 justify-content-center">
          <div className="col-md-6">
            <ul className="list-group">
              <li className="list-group-item list-group-item-action">Name : <span className='fw-bold'>{contact.name}</span></li>
              <li className="list-group-item list-group-item-action">Email : <span className='fw-bold'>{contact.email}</span></li>
              <li className="list-group-item list-group-item-action">Mobile : <span className='fw-bold'>{contact.mobile}</span></li>
              <li className="list-group-item list-group-item-action">Company : <span className='fw-bold'>{contact.company}</span></li>
              <li className="list-group-item list-group-item-action">Title : <span className='fw-bold'>{contact.title}</span></li>
              <li className="list-group-item list-group-item-action">Group : <span className='fw-bold'>{contact.groupId}</span></li>
            </ul>
          </div>
        </div>
        <div className="row mt-2 d-flex justify-content-center my-2">
          <div className="col-md-6">
            <Link to={'/'} className='btn btn-warning btn-action'>Back</Link>
          </div>
        </div>
              </section>
            }
          </React.Fragment>
        }
      </div>
    </section>
  </>

  )
}

export default ViewContact
