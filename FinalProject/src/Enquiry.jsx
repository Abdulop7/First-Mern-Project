import React, { useEffect, useState } from 'react'
import { EnquiryList } from './enquiry/EnquiryList';
import axios from "axios";
import { toast } from 'react-toastify';

export default function Enquiry() {

    let [enquiry,setEnquiry] = useState([])


    let [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        message: "",
        _id: ""
    })


    function formVal(e) {
        let inputName = e.target.name;
        let inputVal = e.target.value;

        let oldData = { ...form }

        oldData[inputName] = inputVal;
        setForm(oldData);

    }
    
    function getEnquiryList(){
         
        axios.get('http://localhost:100/api/web/enquiry/view')
        .then((res) => res.data)
        .then((fRes) => {
            if(fRes.status){
                setEnquiry(fRes)
            }
        })
    }



useEffect(()=>{
        getEnquiryList();

},[])


    function regForm(e) {
        e.preventDefault();

        if(form._id){

            axios.put(`http://localhost:100/api/web/enquiry/upd/${form._id}`,form)
            .then((res) => {
                    toast.success("Successfully Updated")
                    setForm({
                        name: "",
                        email: "",
                        password: "",
                        message: "",
                        _id:""
                    })
    
                }).catch((err) => {
                    console.log(err);
    
                })
                getEnquiryList();


        }else{

            axios.post('http://localhost:100/api/web/enquiry/insert', form)
                .then((res) => {
                    toast.success("Successfully Inserted")
                    setForm({
                        name: "",
                        email: "",
                        password: "",
                        message: "",
                    })
    
                }).catch((err) => {
                    console.log(err);
    
                })
                getEnquiryList();
        }

    }


    return (
        <div className="main">
            <h1>This is My FullStack Project</h1>
            <div className="parts">
                <div className="secs" id='form'>
                    <h1>Form</h1>
                    <form action="" onSubmit={regForm}>
                        <div className="form-secs">
                            <label htmlFor="name">Your Name: </label>
                            <input type="text" onChange={formVal} name='name' placeholder='Name' value={form.name} required />
                        </div>
                        <div className="form-secs">
                            <label htmlFor="name">Your Email: </label>
                            <input type="email" onChange={formVal} name='email' placeholder='Email' value={form.email} required />
                        </div>
                        <div className="form-secs">
                            <label htmlFor="name">Your Password: </label>
                            <input type="password" onChange={formVal} name='password' placeholder='Password' value={form.password} required />
                        </div>
                        <div className="form-secs">
                            <label htmlFor="name">Your Message: </label>
                            <textarea name="message" id="" onChange={formVal} placeholder='Message' value={form.message}></textarea>
                        </div>
                        <div className="form-secs" id='btn'>
                            <button type='submit'>{form._id ? "Update" :  "Submit"}</button>
                        </div>
                    </form>
                </div>
                <EnquiryList data={enquiry} getEnquiry={getEnquiryList} setForm={setForm} form={form}/>

            </div>
        </div>
    )
}

