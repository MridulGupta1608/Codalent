import *  as React from 'react';
import pic from '../../assests/pc.jpeg';
import pic1 from '../../assests/pc1.jpeg';
import laptop from '../../assests/laptop.png';
import {Container, Content,Laptop,Pic1,Pic} from './imageElemets';

function Image(){
    return (
        <Container>
            <Content>
                <Laptop src = {laptop}/>
                <Pic src = {pic}/>
                <Pic1 src = {pic1}/>
            </Content>
        </Container>
    );
}

export default Image;