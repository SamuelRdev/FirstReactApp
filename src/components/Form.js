import { useState } from "react";

const Form = () =>{
    const [credentials, setCredentials] = useState({
        login: "",
        password: ""
    })

    const handleChange = ({currentTarget}) => {
        const {name, value} = currentTarget
        console.log(name)
        setCredentials({
            ...credentials,
            [name]: value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://apiurl/${credentials.login}`)
    }

    return (
        <form onSubmit = {handleSubmit}>
            <input type='text' name='login' onChange={handleChange}/>
            <input type ='password' name='password' onChange={handleChange}/>
            <input type='submit' value ='submit'/>
        </form>
    );
}

export default Form