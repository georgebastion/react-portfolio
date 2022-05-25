import React from 'react';
import styled, {keyframes} from 'styled-components';
import LogoComponent from '../subComponents/LogoComponent';
import PowerButton from '../subComponents/PowerButton';
import SocialIcons from '../subComponents/SocialIcons';
import { NavLink } from 'react-router-dom';
import { YinYang } from './AllSvgs';
import {useState} from 'react';
import Intro from './Intro'
import { motion } from 'framer-motion';
import Button from '../subComponents/Button';


const MainContainer =styled.div`
background: ${props=>props.theme.body};
width:100vw;
height:100vh;
overflow:hidden;

position:relative;
h2,h3,h4,h5,h6{
  font-family:'Karla', sans-serif ;
  font-weight:500;
}

`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled(NavLink)`
color:${props=>props.click ? props.theme.body : props.theme.text};
position: absolute;
right:calc(1rem + 2vw);
text-decoration:none;
z-index: 3;

`

const Blog = styled(NavLink)`
color:${props=>props.click ? props.theme.body : props.theme.text};
position: absolute;
right:calc(1rem + 2vw);
top: 50%;
transform: rotate(90deg) translate(-50%, -50%);
text-decoration:none;
z-index: 3;

`
const Work = styled(NavLink)`
color:${props=>props.click ? props.theme.body : props.theme.text};
position: absolute;
left:calc(1rem + 2vw);
top: 50%;
transform: translate(-50%, -50%) rotate(-90deg);
text-decoration:none;
z-index: 3;

`
const BottomBar=styled.div`
position:absolute;
bottom:1rem;
left:0;
right:0;
width:100%;
display:flex;
justify-content:space-evenly;
z-index:1;
`
const About= styled(NavLink)`
color:${props=>props.click ? props.theme.body : props.theme.text};
text-decoration:none;
z-index:1;

`
const Skills= styled(NavLink)`
color:${props=>props.click ? props.theme.body : props.theme.text};
text-decoration:none;
z-index:1;
`
const rotate = keyframes`
from {
    transform:rotate(0);
}
to {
    transform:rotate(360deg);
}
`
const Center = styled.button`
position:absolute;
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
left:${props=>props.click ? '92%' : '50%'};
top:${props=>props.click ? '85%' : '50%'};
transform:translate(-50%,-50%);
background-color:transparent;
border:none;
outline:none;
transition: all 3s ease;

&>:first-child{
    animation:${rotate} infinite 3s linear;
}

&>:last-child{
    display: ${props=>props.click ? 'none' : 'inline-block'};
    padding:1rem;
}


`
const Btn= styled(motion.div)`
display:flex;
z-index:1;
text-decoration:none;
color:${props=>props.click ? props.theme.body : props.theme.text};

`
const DarkDiv = styled.div`
position: absolute;
top: 0;
background-color: #000;
bottom: 0;
right: 50%;
width: ${props => props.click ? '50%' : '0%'};
height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition: height 0.5s ease, width 1s ease 0.5s;
`   
const Main =()=> {
    const [click, setClick]=useState(false);
    const handleClick = () => setClick(!click);

    return (
        <MainContainer>
            <Container>
                <DarkDiv click={click}/>
                <PowerButton />
        
                <LogoComponent theme={click ? 'dark' : 'light'}/>
                <SocialIcons theme={ click ? 'dark':'light'}/>
              
                <Center click={click}>
                    <YinYang onClick={()=>handleClick()} width={click ? 120:200} heigh={click?120:200} fill='currentColor'/>
                    <span>Click me</span>
                </Center>
                <Contact  to='/contact'>
                    <motion.h2 
                    initial={{
                        y:-200,
                        transition:{type:'spring', duration:1.5,delay:1}
                    }}
                    animate={{
                        y:0,
                        transition:{type:'spring', duration:1.5,delay:1}
                    }}
                    whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}>
                        Contact Me
                    </motion.h2>
                </Contact>
                
                <Work to='/work' click={click}>
                    <motion.h2
                    
                    initial={{
                        y:-200,
                        transition:{type:'spring', duration:1.5,delay:1}
                    }}
                    animate={{
                        y:0,
                        transition:{type:'spring', duration:1.5,delay:0}
                    }}
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}>
                        Work
                    </motion.h2>
                </Work>
                <BottomBar>
                    <Btn
                        initial={{
                            y:200,
                            transition:{type:'spring', duration:1.5,delay:1}
                        }}
                        animate={{
                            y:0,
                            transition:{type:'spring', duration:1.5,delay:0}
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}>
                            <Button text='About' to='/about' bcolor={click?'white':'black'} color={click?'black':'white'} bgcolor={click?'white':'black'}/>
                        </Btn>
                    
                    <Btn
                        initial={{
                            y:200,
                            transition:{type:'spring', duration:1.5,delay:1}
                        }}
                        animate={{
                            y:0,
                            transition:{type:'spring', duration:1.5,delay:0}
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}>
                            <Button bcolor='black' color='white' bgcolor='black' text='Skills' to='/skills'/>
                    </Btn>
                </BottomBar>

            </Container>
            {click ? <Intro click={click}/> : null}
        </MainContainer>

    );
}

export default Main;