import React, {useState} from "react";

const RegisterPage = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) =>{
        if(e.target.value.length < 25){
            setEmail(e.target.value)
        }
    }

    const handlePasswordChange = (e) =>{
        if(e.target.value.length < 25){
            setPassword(e.target.value)
        }
    }

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        console.log(email);
        console.log(password);
    }

    return(
        <form onSubmit={handleFormSubmit}>
            <input type="email" onChange={handleEmailChange} placeholder="Email"/>
            <input type="password" onChange={handlePasswordChange} placeholder="Password"/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default RegisterPage;