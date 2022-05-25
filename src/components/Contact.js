import { motion } from 'framer-motion';
import React, {useState, useRef} from 'react';
import styled from 'styled-components'
import Background from './Background';
import emailjs from '@emailjs/browser';

import { keyframes } from 'styled-components';

const MainContainer= styled.div`
position: relative;
width:100vw;
height:100vh;
overflow:hidden;
`
const Box =styled(motion.div)`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 50vw;
height:55vh;
display: flex;
gap: 2rem;
font-family: 'Roboto', sans-serif;
background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.body};

z-index:1;
background: rgba(8, 8, 8, 0.459);
@media (max-width:1250px){
    width:52vw;

}
@media (max-width:1200px){
    width:56vw;

}
@media (max-width:1120px){
    width:58vw;

}
@media (max-width:1080px){
    width:60vw;

}
@media (max-width:1042px){
    width:64vw;

}
@media (max-width:1000px){
    width:70vw;

}
@media (max-width:900px){
    width:78vw;

}
@media (max-width:800px){
    width:86vw;

}
@media (max-width:700px){
    width:92vw;

}
@media (max-width:650px){
   display:flex;
   flex-direction:column;
   gap: 0;
   justify-content: center;
   align-items:center;
   height:70 vh;

}

@media (max-width:600px){
 .myForm{
    margin: .1rem 1rem 0 1rem;
    button{
    margin-top:.1rem;
 }
 }
  }


@media (max-width:400px){
    .myForm{
        margin-top:.5rem;

    input{
    margin-bottom:.1rem;
    padding: 3px;
    
}
textarea{
    margin-bottom:.1rem;
    height:50px;
}
button{
    margin-top:1rem;
    
    font-size: 20px;
    color: white;
    padding:5px;


}
}
 }

.myForm{
    margin-top: 2rem;
    display:flex;
    flex-direction:column;

input{
    margin-bottom:1rem;
    border-radius: 5px;
    outline:none;
    border: 1px solid white;
    background: #1615148f;
    color:white;
    padding: 10px;
    
}
button{
    margin-top:1.5rem;
    font-family:'Roboto', sans-serif;
    background: linear-gradient(180deg, #fd0fd583 26.71%, #220a20bb 99.36%);
    box-shadow: 0px 20px 24px 3px rgba(40, 149, 251, 0.699);
    border-radius: 34px;
    border: none;
    font-size: 20px;
    color: white;
    padding:10px;

&:hover{
    background: white;
    color: #fd0fd583;
}

}
textarea{
    margin-bottom:1rem;
    border-radius: 5px;
    outline:none;
    border: 1px solid white;
    background: #1615148f;
    color:white;
}
}
`
const Lside=styled.div`
margin: 1rem;
font-size: calc(20px + 2vw); 
display: flex;
flex-direction:column;
white-space:nowrap;
color:'white';

color:white;
@media (max-width:1000px){


}
&>:first-child{
    margin-bottom: 2rem;
}
&>:nth-child(2){
    font-size:30px;
    
}
&>:last-child{
    font-size:30px;
    
}
@media (max-width:800px){

&>:nth-child(2){
    font-size:20px;
    
}
&>:last-child{
    font-size:20px;
    
}
}
@media (max-width:350px){
    &>:first-child{
        font-size:30px;
    margin-bottom: .5rem;
}
    &>:nth-child(2){
    font-size:20px;
    
}
&>:last-child{
    font-size:20px;
    
 
 }
}
`


const Contact = () => {
    const form = useRef();
    const [done, setDone]=useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_mud1jbg', 'template_7uval9u', form.current, 'pjPenMLRWAHv3ZFRB')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <MainContainer>
            <Background />
            <Box>
            <Lside>
                <span>Get in touch</span>
                <span>Your satisfaction, </span>
                <span>is my treasure coin</span>                

            </Lside>
            
            <form className='myForm' ref={form} onSubmit={sendEmail}>     
                        <input type="text" name='name' placeholder='Your full Name' required contenteditable/>
                        <input type="email" name='email' placeholder='Your Email' required contenteditable/>
                        <textarea name="message" rows="5" cols='25' placeholder='Your Message' required contenteditable></textarea>
                        <button type='submit' className='button btn-primary' contenteditable>Send Message </button>
                        <span>{done && "Thanks for contacting me!"}</span>

            </form>
            </Box>
           

        </MainContainer>
    );
};

export default Contact;