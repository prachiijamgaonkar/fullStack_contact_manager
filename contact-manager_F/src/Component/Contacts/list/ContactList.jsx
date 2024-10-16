import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../../../Assests/Spinner'
import { ContactServices } from '../../../Services/ContactServices'

const ContactList = () => {

  const[query,setQuery]=useState({
    text:""
  })

  const[state,setState] =useState({
    loading:true,
    contacts:[],
    filteredContacts:[],
    errorMassage:''
  })

  useEffect(()=>{
    let promise=new Promise((res,rej)=>{
      setState({...state,loading:true,contacts:[]});
      let response=ContactServices.getAllContacts()

      res(response)
    })

    promise.then((res1)=>{
      setState({...state,loading:false,contacts:res1.data.data,filteredContacts:res1.data.data});
    }).catch(()=>{
      setState({...state,loading:false,errorMassage:alert('data not found')});
    })
  },[])

  //deleteContact

  let clickDelete=(contactId)=>{
    let promise= new Promise((res,rej)=>{
      let deleteContact=ContactServices.deleteContact(contactId)
      res(deleteContact)
    })

    promise.then((res1)=>{
      if (res1) {

        let promise=new Promise((res,rej)=>{
          setState({...state,loading:true,contacts:[]});
          let response=ContactServices.getAllContacts()
          res(response)
        })
    
        promise.then((res1)=>{
          setState({...state,loading:false,contacts:res1.data.data,filteredContacts:res1.data.data});
        }).catch(()=>{
          setState({...state,loading:false,errorMassage:alert('data not found')});
        })
      }
    })
  }

  //searchContact

  let searchContact=(event)=>{
    setQuery({...query,text:event.target.value})

    let theContacts=state.contacts.filter((contact)=>{
      return contact.name.toLowerCase().includes(event.target.value.toLowerCase());
    })
    setState({...state,filteredContacts:theContacts})
  }
  
  let {loading,contacts,errorMassage,filteredContacts}=state

  return (
    <>
      <section className='contact-search'>
         <div className="container p-3">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className='h3'>Contact Manager <Link to={'/Contacts/add'} className='btn btn-primary ms-2'><i className='fa fa-plus-circle me-2'/>Add</Link></p>
                <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque possimus accusantium illo nemo error. Harum vel aliquam rem. Neque harum modi quas consectetur et accusantium laborum, blanditiis nostrum in sapiente!</p>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-md-6">
            <form action="" className='row'>

              <div className="col">
                <div className="mb-2">
                  <input type="text" name='text' onChange={searchContact} value={query.text} placeholder='Search name' className=' form-control'  />
                </div>
              </div>
              {/* <div className="col"> */}
                {/* <div className="mb-2">
                 <input type="submit" value="Search" className='btn btn-outline-primary ' />
                </div> */}
              {/* </div> */}
            </form>
          </div>
         </div>
         </div>
       </section>
       {
        loading?<Spinner/>:<React.Fragment>
          <section className='contact-list'>
        <div className="container">
          <div className="row">
            {
              filteredContacts.length>0 &&filteredContacts.map((contact)=>{
                let{photo,name,mobile,email,id}=contact
                return(
                  <div className="col-md-6 mb-4" key={id}>
              <div className="card d-flex justify-content-around" >
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <img src={photo} alt="" className='contact-img' />
                    </div>
                     <div className="col-md-7">
                        <ul className="list-group">
                          <li className="list-group-item list-group-item-action">Name:{name}</li>
                          <li className="list-group-item list-group-item-action">Mobile:{mobile}</li>
                          <li className="list-group-item list-group-item-action ">Email:{email}</li>
                        </ul>
                     </div>
                     <div className="col-md-1 d-flex flex-column align-items-center">

                      <Link to={`/Contacts/view/${id}`} className='btn btn-warning my-1'><i className='fa fa-eye'/></Link>
                      <Link to={`/Contacts/edit/${id}`} className='btn btn-primary my-1'><i className='fa fa-pen'/></Link>
                      {/* <Link to={`/Contacts/view/`} className='btn btn-warning my-1'><i className='fa fa-eye'/></Link>
                      <Link to={`/Contacts/edit/`} className='btn btn-primary my-1'><i className='fa fa-pen'/></Link> */}

                      <button className='btn btn-danger my-1' onClick={()=>{clickDelete(id)}}><i className='fa fa-trash'/></button>
                     </div>
                  </div>
                </div>
              </div>
            </div>
                )
              })
            }

          </div>
        </div>
       </section>

        </React.Fragment>

       }

    </>
  )
}

export default ContactList

