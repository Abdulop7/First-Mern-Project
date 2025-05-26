import React from 'react'
import axios from "axios";
import { toast } from 'react-toastify';
import Swal from 'sweetalert2'

export function EnquiryList({ data,getEnquiry ,setForm,form}) {

    let datalen = '';

    if(data.enquiry){
        datalen= data.enquiry.length
    }

    

    return (
        <div className="secs" id='table'>
            <h1>Table</h1>
            <table>
                <thead>
                    <tr>

                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>

                </thead>
                <tbody>


                    {
                        datalen >= 1 
                            ?
                                data.enquiry.map((v,i)=>{
                                    return(
                                        <tr key={i}>
                                            <td>{i+1}</td>
                                            <td>{v.name}</td>
                                            <td>{v.email}</td>
                                            <td>{v.message}</td>
                                            <td><span onClick={()=> editRow(v._id,setForm,form)} id='edit'>Edit</span></td>
                                            <td><span onClick={()=> {
                                                delRow(v._id,getEnquiry);
                                                }
                                                } id='del'>Delete</span></td>
                                        </tr>
                                    );
                                })

                            :
                            <tr>
                                <td colSpan={6}>
                                    No Data
                                </td>
                            </tr>

                    }
                </tbody>
            </table>
        </div>
    )
}

function editRow(updId,setForm,form){
    // http://localhost:100/api/web/enquiry/view-single/
    axios.get(`http://localhost:100/api/web/enquiry/view-single/${updId}`)
    .then((res) => res.data.msg)
    .then((fdata)=> setForm(fdata))

}

function delRow(delId,getEnquiry){
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

    axios.delete(`http://localhost:100/api/web/enquiry/del/${delId}`)
    .then((res) => {

        getEnquiry()
        
    })
    .catch((err)=> console.log(err))

    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});

    

}