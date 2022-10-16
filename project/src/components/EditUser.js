import React from 'react'
import { FormGroup,FormControl, InputLabel, Input,styled} from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { editUser1, getUser } from '../backend/api';
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import "./login.css";
const defaultvalue={
name:"",
id:"",
TeamNumber:"",
subj:"",
pname:"",
startdate:"",
status1:""
}
const Container =styled(FormGroup)`
width:50%;
margin:5% auto ;
`
function EditUser() {
    const [user,setUser]=useState(defaultvalue);
    const {id}=useParams();
    const history = useHistory()
    useEffect(()=>{
        loadUserDetails();
    },[])
    
    const loadUserDetails=async()=>{
        const response=await getUser(id);
        setUser(response.data.teams);
    }
    const onValueChange=(e)=>{
        setUser({ ...user,[e.target.name]:e.target.value});
        // console.log(user);
    }
    const editUserDetails=async()=>{
        await editUser1(user,id);

            history.push("/all")   }
        
  return (
    <div>
         <div className="login">
      
        <h1>Edit USER</h1>
            <FormControl >
                <InputLabel>Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="name" value={user.name} bgcolor="red"/>
            </FormControl>
            <br/><br/>
            <FormControl>
                <InputLabel>Id</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="id" value={user.id}/>
            </FormControl>
            <br/><br/>
            <FormControl>
                <InputLabel>Team Number</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="TeamNumber" value={user.TeamNumber}/>
            </FormControl>
            <br/><br/>
            <FormControl>
                <InputLabel>MSWD/PFSD</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="subj" value={user.subj}/>
            </FormControl>
            <br/><br/>
            <FormControl>
                <InputLabel>Project Name</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="pname" value={user.pname}/>
            </FormControl>
            <br/><br/>
            <FormControl>
                <InputLabel>StartDate</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="startdate" value={user.startdate}/>
            </FormControl>
            <br/><br/>
            <FormControl>
                <InputLabel>Status</InputLabel>
                <Input onChange={(e)=>onValueChange(e)} name="status" value={user.status1}/>
            </FormControl>
            <br/><br/>
            <FormControl>
                <Button varient="contained" onClick={()=>editUserDetails()}>Edit User</Button>
            </FormControl>
            <br/><br/>

    </div>
    </div>
  )
}

export default EditUser