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
transition: all 2s ease;

&>:first-child{
    animation:${rotate} infinite .3s linear;
}

&>:last-child{
    display: ${props=>props.click ? 'none' : 'inline-block'};
    padding:1rem;
}


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
                <Contact target="_blank" to={{pathname:"mailto:georgejacob437@gmail.com"}}>
                    <motion.h2 
                    whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}>
                        Say hi...
                    </motion.h2>
                </Contact>
                <Blog to='/blog' >
                    <motion.h2
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}>
                        Blog
                    </motion.h2>
                </Blog>
                <Work to='/work' click={click}>
                    <motion.h2
                    whileHover={{scale: 1.1}}
                    whileTap={{scale: 0.9}}>
                        Work
                    </motion.h2>
                </Work>
                <BottomBar>
                    <About to='/about' click={click}>
                        <motion.h2
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}>
                            About
                        </motion.h2>
                    </About>
                    <Skills to='/skills' >
                        <motion.h2
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}>
                            Skills
                        </motion.h2>
                    </Skills>
                </BottomBar>

            </Container>
            {click ? <Intro click={click}/> : null}
        </MainContainer>

    );
}

export default Main;