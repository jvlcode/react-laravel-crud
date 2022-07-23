import React from "react";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../App";
import { useNavigate,Link } from "react-router-dom";


const Create = ()=>{

    const navigate = useNavigate();

    const [inputs,setInputs] = useState({title:"",body:""})
    const [error,setError] = useState(null);

    const handleChange = (event)=>{
        setInputs({...inputs,[event.target.name]:event.target.value})
    }

    const handleFormsubmit = (event)=>{
        event.preventDefault();

        let data = {title:inputs.title,body:inputs.body}
        axios.post(BASE_URL+'/api/posts',data).then(()=>{
            navigate('/')
        }).catch(()=>{
            setError('Unable to create post. Please check the database connection.')
        })


    }


    return (<div className="container">
                <h3>Create Post</h3>
                <Link to='/'>Back</Link>
                <form action="" onSubmit={handleFormsubmit}>
                    <div className="form-group">
                        <label htmlFor="">Title</label>
                        <input className="form-control" type="text" onChange={handleChange} name="title" id="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Description</label>
                        <textarea className="form-control" onChange={handleChange} name="body" id=""rows="5"></textarea>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success mt-2">Save</button>
                        {error?(<p className="text-danger mt-2">{error}</p>):''}
                    </div>
                </form>
            </div>)

}

export default Create;
