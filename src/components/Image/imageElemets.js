import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
padding: 0 30px;
margin-top: 96px;
margin-bottom: 180px;
position: relative;
z-index: 1;
`;

export const Content = styled.div`
z-index: 1;
max-width: 840px;
position: relative;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center; 
`;

export const Laptop = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    position: Relative;
    height:auto;
    margin-bottom: -57%;
`;

export const Pic = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 83%;
    position: Relative;
    padding-left : 0.5%;
    height:auto;
    margin-top: 0px;

    @media  screen and (max-width : 760px) {
        display : none;
    }
`;

export const Pic1 = styled.img`
    display: none;
    margin-left: auto;
    margin-right: auto;
    width: 83%;
    position: Relative;
    padding-left : 0.5%;
    height:auto;
    margin-top: 0px;

    @media  screen and (max-width : 760px) {
        display : block;
    }
`;