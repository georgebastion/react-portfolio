import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import './Home.scss'

const Buttonn= styled(NavLink)`


height:5rem;
width:5rem;
z-index:1;
text-decoration:none;
color:${props=>props.click ? props.theme.body : props.theme.text};

`

const About= styled.div``

const Button = (props) => {
    return (
        <About  >
                        <span id='dissapear'>
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{zIndex:'-9', height:'4rem', width:0}}>
                                <defs>
                                    <filter id="gooey">

                                        <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
                                        <feColorMatrix in="blur" type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="highContrastGraphic" />
                                        <feComposite in="SourceGraphic" in2="highContrastGraphic" operator="atop" />
                                    </filter>
                                </defs>
                            </svg>
                            <Buttonn style={{background: props.bcolor, color:props.color}} to={props.to} id='gooey-button'> {props.text}
                                <span className='bubbles'>
                                    <span className='bubble' style={{background: props.bgcolor}}></span>
                                    <span className='bubble' style={{background: props.bgcolor}}></span>
                                    <span className='bubble' style={{background: props.bgcolor}}></span>
                                    <span className='bubble' style={{background: props.bgcolor}}></span>
                                    <span className='bubble' style={{background: props.bgcolor}}></span>
                                    <span className='bubble' style={{background: props.bgcolor}}></span>
                                    <span className='bubble' style={{background: props.bgcolor}}></span>
                                    <span className='bubble' style={{background: props.bgcolor}}></span>
                                    <span className='bubble' style={{background: props.bgcolor}}></span>
                                    <span className='bubble' style={{background: props.bgcolor}}></span>
                                </span>
                            </Buttonn>
                        </span>
                        
                    </About>
    );
};

export default Button;