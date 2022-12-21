import * as React from 'react';
import {Container,Content,Heading,SignUp,Subtitle,Action,Demo} from './mainElement';
import { AiOutlinePlayCircle } from "react-icons/ai";


function Main(){
    return(
        <Container>
            <Content>
                <Heading>Beautiful analytics to grow smarter</Heading>
                <Subtitle>Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.</Subtitle>
                
                <Action>
                    <Demo><AiOutlinePlayCircle/> Demo</Demo>
                    <SignUp>Sign Up</SignUp>
                </Action>
                
            </Content>
        </Container>
    );
}

export default Main;