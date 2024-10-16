import React, { useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom'
import { ContactServices } from '../../../Services/ContactServices'


const AddContact = () => {
  let navigate=useNavigate()
  let [state,setState]=useState({
    loading:true,
    contact:{
      name:"",
      photo:"",
      mobile:"",
      email:"",
      title:"",
      company:"",
      groupId:""
    },
    errorMessage:""
  })

  const updateHandle=(event)=>{
    setState({...state,contact:{
      ...state.contact,[event.target.name]:event.target.value
    }})
  }
  let{loading,contact}=state

  const submitHandle=(event)=>{
    event.preventDefault()
    let promise=new Promise((res,rej)=>{
      setState({...state,loading:true})
      let postData=ContactServices.createContact(contact)
      res(postData)
    })

    promise.then((res1)=>{
      if (res1) {
        setState({...state,loading:false})
        navigate('/Contacts/list',{replace:true})

      } else {
        setState({...state,loading:false})
        navigate('/Contacts/add',{replace:false})
      }
    }).catch(()=>{
      setState({...state,loading:false,errorMessage:alert('data is not posted')})
    })
  }

  return (

    <>
    <pre>
      {/* {JSON.stringify(contact)} */}
    </pre>
    <section className='add-contact'>
    <div className="container p-3">
      <div className="row">
        <div className="col">
          <p className="h3 text-success">Create Contact</p>
          <p className='fst-italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In natus ipsum doloribus rerum aperiam est quibusdam? Quam unde eligendi delectus veritatis molestias officiis omnis illum, soluta at. Deserunt, aliquid harum.</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <form action="" onSubmit={submitHandle}>
              <div className="mb-2">
                <input type="text" name='name' placeholder='NAME' value={contact.name} onChange={updateHandle} className='form-control' />
              </div>
              <div className="mb-2">
                <input type="text" name='photo' placeholder='Photo Url' value={contact.photo} onChange={updateHandle} className='form-control' />
              </div>
              <div className="mb-2">
                <input type="number" name='mobile' placeholder='Mobile' value={contact.mobile} onChange={updateHandle} className='form-control' />
              </div>
              <div className="mb-2">
                <input type="email" name='email' placeholder='Email' value={contact.email} onChange={updateHandle} className='form-control' />
              </div>
              <div className="mb-2">
                <input type="text" name='company' placeholder='Company' value={contact.company} onChange={updateHandle} className='form-control' />
              </div>
              <div className="mb-2">
                <input type="text" name='title' placeholder='Title' value={contact.title} onChange={updateHandle} className='form-control' />
              </div>
              <div className="mb-2">
              <input type="text" name='groupId' placeholder='Group' value={contact.groupId} onChange={updateHandle} className='form-control' />
                {/* <select name="" id="" className='form-control'>
                  <option value="">Select A Group</option>
                </select> */}
              </div>

              <div>
                <input type="submit" value="Create" className="btn btn-success"/>
                <Link to={'/Contacts/list'} className='btn btn-danger ms-2'>Cancel</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</>
  )
}

export default AddContact