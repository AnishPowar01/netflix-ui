import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import BackgroundImage from '../components/BackgroundImage'
import Footer from '../components/Footer';
import Header from '../components/Header'
import ReverseFooter from '../components/ReverseFooter';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from 'firebase/auth'
import { firebaseAuth } from '../utils/firebase-config';
import { Navigate } from 'react-router-dom';


function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    // state for mainting the values;

    const[formValues, setFormValues] = useState({
        email:"",
        password:"",
    });

    //to handle sign in

    const handleSignIn = async()=>{
       
        try{
              const {email,password} = formValues;
              await createUserWithEmailAndPassword(firebaseAuth,email,password)
        }
        catch(err){
            console.log(err)

        }
    }

    onAuthStateChanged(firebaseAuth,(currentUser)=>{
        if(currentUser) navigate("/")
    })

  return (

    <div>
    <Container showPassword = {showPassword}>
     
     <BackgroundImage/>
     <div className="content">
     <Header login />

     <div className='body flex column a-center j-center'>
     
     <div className='text flex column'>

     <h1>Unlimited movies, Tv shows and more</h1>
     <h4>Watch anywhere. Cancel anytime</h4>
     
     <h6>
        Ready to watch? Enter your email  to create or restart membership
     </h6>
     </div>

     <div className='form'>
     <input type="email" placeholder = "Email Address" name="email" value={formValues.email} onChange ={(e)=> setFormValues({...formValues, [e.target.name]: e.target.value,})}/>
     {
        showPassword && <input type="password" placeholder="Password" name = "password"  value={formValues.password} onChange ={(e)=> setFormValues({...formValues, [e.target.name]: e.target.value,})}/>
     }
     
     {
        !showPassword && <button onClick={()=>setShowPassword(true)}>Get Started</button>
     }
     
     </div>

     <button onClick={handleSignIn}>Sign Up</button>
   
     </div>
     </div>
    </Container>

    <Footer/>
    <ReverseFooter/>
    <Footer/>
    

    

    </div>
  
    
 
      
    
  )
}

export default Signup

const Container = styled.div`

position:relative;

.content{
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.5);
    background-image: linear-gradient(0deg,rgba(0,0,0,.8) 0,transparent 60%,rgba(0,0,0,.8));
    
    height:100vh;
    width:100vw;
    display:grid;
    grid-template-rows:15vh 85vh;
    border-bottom: 8px solid #222;

    .body{
        gap:1rem;

        .text
        {
            gap:1rem;
            text-align:center;
            font-size:2rem;

            h1{
                padding:0 25rem;
            }
        }

        .form{
            display:grid;
            grid-template-columns: ${({ showPassword }) =>
          showPassword ? "1fr 1fr" : "2fr 1fr"};

            width:40%;

            input{
                color:black;
                border:none;
                padding:1.2rem;
                font-size:1.2rem;
                border:1px solid black;

                &:focus
                {
                    outline:none;
                }
            }
            button{
                padding:0.5rem 1rem;
                background-color:#e50914;
                border:none;
                cursor:pointer;
                color:white;
                font-weight:bolder;
                font-size:1.05rem;
            }
        }

        button{
            padding:0.5rem 1rem;
            background-color:#e50914;
            border:none;
            cursor:pointer;
            color:white;
            border-radius:0.2rem;
            font-weight:bolder;
            font-size:1.05rem;
        }
    }
}

`