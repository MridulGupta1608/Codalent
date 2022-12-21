import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 30px;
    margin-top: 96px;
    margin-bottom: 0px;
    position: relative;
    z-index: 1;
`;

export const Content = styled.div`
    z-index: 1;
    max-width: 1200px;
    position: relative;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center; 
`;

export const Heading = styled.h1`
    font-size: 60px;
    text-align: center;
    font-weight: 600;
    @media screen and (max-width: 760px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
        
    }
`;

export const Subtitle = styled.p`
    font-size: 20px;
    max-width: 768px;
    margin-top: 24px;
    text-align: center;
    color: #667085;
`;

export const Action = styled.div`
    text-align: center;
    display: flex;
    flex-direction: row;
    margin-top: 48px;
    @media  screen and (max-width : 760px) {
        flex-direction : column-reverse;
        width : 100%;
    }
`;

export const Demo = styled.span`
    border-color: #D0D5DD;
    border-width: 1px;
    border-style: solid;
    color: #344054;
    margin : 0px 6px;
    text-decoration: none;
    font-size: 18px;
    line-height: 28px;
    border-radius: 8px;
    padding : 16px 28px;
    z-index: 4;
    position : relative;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #F9FAFB;
        transition: all 0.3s ease-in-out;
    }

    @media  screen and (max-width : 760px) {
        margin : 6px 0px;
    }

`;

export const SignUp = styled.span`
    background-color: #7F56D9;
    color: white;
    margin : 0px 6px;
    text-decoration: none;
    font-size: 18px;
    line-height: 28px;
    border-radius: 8px;
    padding : 16px 28px;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #6941C6;
        transition: all 0.3s ease-in-out;
    }

    @media  screen and (max-width : 760px) {
        margin : 6px 0px;
    }
`;