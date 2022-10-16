import React, {useState} from "react"
import axios from "axios"
import { useHistory } from "react-router-dom"
import { Button, Input, FormControl } from "@mui/material"
import './login.css';
const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
    }
    
    return (
        <div className="login">
            <h1>LOGIN</h1>
            <FormControl htmlFor="my-input">
            <Input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></Input><br></br>
            <Input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></Input><br></br><br></br>
            <Button variant="contained" className="button" onClick={login}>Login</Button>
            <div>or</div>
            <Button variant="contained" className="button" onClick={() => history.push("/register")}>Register</Button>
            </FormControl>
        </div>
    )
}

export default Login