import Head from 'next/head'
import Image from 'next/image'
import { Button, Loader } from 'semantic-ui-react'
import LoginForm from '../comps/LoginForm'
import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router';
import { useReducer, useState } from 'react';


//the router and states are mostly used in the page for data/information state management 
export default function Home() {

  const r = useRouter();

  //before, during, after 
  const [loginState, setLoginState] = useState("before")
  // var c = "blue";
  // var btn_text = "Click me";

  // if (loginState === "before"){
  //   c  = "blue";
  //   btn_text = "Click me"
  // }

  // if (loginState === "during"){
  //   c = "teal";
  //   btn_text = "Logging in...";
  // }

  // if (loginState === "after"){
  //   c = "green";
  //   btn_text = "Success!";
  // }
  
  // const HandleButtonClick = () => {
  //   if (loginState === "before"){
  //     setLoginState("during");
  //   }
  //   if (loginState === "during"){
  //     setLoginState("after");
  //   }
  //   if (loginState === "after"){
  //     r.push("/dashboard");
  //   }
  // }

  const Login = async () => {
    setLoginState("during");

    //its going to take time -- this is USELESS dont use in actual code, just mocking time passing  
    await new Promise(resolve=>setTimeout(resolve, 2000));
    setLoginState("after");
  

    //going to stall for 1-2 seconds,
    await new Promise(resolve=>setTimeout(resolve, 2000));

    r.push("/dashboard");
  }

  return (
    <div className={styles.container}>
      {/* <Button color = {c} onClick = {()=> Login()}> {btn_text} 
        {loginState === "during" && <Loader active/>}
      </Button> */}

      <LoginForm loginState={loginState}
        onLoginClick={()=>Login()}
      />
    </div>
  )
}
