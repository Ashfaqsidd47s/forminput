import { useState } from "react";
import "./app.scss"
import FormInput from './components/formInput/FormInput';

function App() {

  const [values, setValues] = useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:"",

  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:"Username should be 3-16 characters and souldn't include any special character",
      label:"UserName",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage:"",
      label:"Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:"It should be valid",
      label:"Password",
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage:"It should be valid",
      label:"Confirm Password",
      required: true,
    },
    
  ];

  const handelSubmit = (e)=>{
    e.preventDefault();
  };

  const handelChange = (e)=>{
    setValues({ ...values, [e.target.name]: e.target.value });
  }


  return (
    <div className="app">
      <form className="inputForm" >
        {inputs.map((input)=>(
          <FormInput 
            key={input.id}
            // we can fill all the propes menualy like this but it can be done in one go as in next line
            // name={input.name}
            // placeholder={input.placeholder} 
            // type={input.type}
            // label={input.label}
            // alternate or better way to pasing the object properties having same properties
            {...input} //prefer this only if the properties are same 
            value = {values[input.name]} //In values[input.name] this will serch in values object for the property that matches input.name value 
            onChange={handelChange}
          />
        ))}

      </form>
    </div>
  );
}

export default App;
