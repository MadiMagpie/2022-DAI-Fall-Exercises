import { Button, Loader, Input } from 'semantic-ui-react'


export default function LoginForm({
    loginState="before",
    onLoginClick=()=> {}
}){

    var c = "blue";
    var btn_text = "Login";
  
    if (loginState === "before"){
      c  = "blue";
      btn_text = "Login"
    }
  
    if (loginState === "during"){
      c = "teal";
      btn_text = "Logging in...";
    }
  
    if (loginState === "after"){
      c = "green";
      btn_text = "Success!";
    }


    return <div>
        <h3> Login Form </h3>
        <Input disabled = {loginState!== "before"} 
            placeholder = "email" />
        <Input disabled = {loginState!== "before"} 
            placeholder = "password" />

        <hr />    
        <Button color = {c} onClick = {onLoginClick}> 
            {btn_text} 
            {loginState === "during" && <Loader active/>}
        </Button>
    </div>
}