import {useState} from 'react'

import '../css/RegistrationForm.css';

function RegistrationForm()
{
    const [formData, setFormData] = useState({
        firstName : "",
        lastName : "",
        email: "",
        password: "",
    });


    const onCreateAccount = (evt)=>{

        evt.preventDefault();


        fetch(`${process.env.REACT_APP_BACK_END_API_DOMAIN}/users`,{
            method :"POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(formData)
        })
        .then(response=>response.json())
        .then(json=>{
    
              alert(json);
              setFormData({
                firstName : "",
                lastName : "",
                email: "",
                password: "",
            })
    
        })
        .catch(err=>{
            alert(err);
            console.log(`Error ${err}`);
        })
    }
      


    return (
        <div id="login-box">
            <div className="left">
                <h1>Sign up</h1>
                <form action="" onSubmit={onCreateAccount}>

                        <div className="form-control">
                            <label htmlFor="firstName">First Name</label>
                            <input type="text" required id="firstName" value={formData.firstName} onChange={(evt) => {
                                setFormData({ ...formData, firstName: evt.target.value });
                            }} />
                        </div>

                        <div className="form-control">
                            <label htmlFor="lastName">Last Name</label>
                            <input type="text" required id="lastName" value={formData.lastName} onChange={(evt) => {
                                setFormData({ ...formData, lastName: evt.target.value });
                            }} />
                        </div>

                        <div className="form-control">
                            <label htmlFor="email">Email</label>
                            <input type="email" required id="email" value={formData.email} onChange={(evt) => {
                                setFormData({ ...formData, email: evt.target.value });
                            }} />
                        </div>


                        <div className="form-control">
                            <label htmlFor="password">Password</label>
                            <input type="password" required id="password" value={formData.password} onChange={(evt) => {
                                setFormData({ ...formData, password: evt.target.value });
                            }} />
                        </div>

                        <div className="form-control">
                            <button className="btn" type="submit">SIGN ME UP</button>
                        </div>

                    </form>
            </div>

            <div className="right">

                <button className="social-signin facebook">Log in with facebook</button>
                <button className="social-signin twitter">Log in with Twitter</button>
                <button className="social-signin google">Log in with Google+</button>
            </div>
            <div className="or">OR</div>
        </div>
    )
}


export default RegistrationForm
