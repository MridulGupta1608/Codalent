import styled from 'styled-components';

export const Nav = styled.nav`
    background: white;
    border-color: #D0D5DD;
    height: 80px;
    margin-top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    top: 0;
    z-index: 10;
    border-bottom-width:1px;
    border-bottom-style:solid;
    @media screen and (max-width: 960px) {
        transition: 00.8 all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;


export const NavLogo = styled.div`
    color: #7F56D9;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 24px;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: 600;
    text-decoration: none;

`;

export const MobileIcon = styled.div`
    display: none;
    color: gray;

    transition: all 0.3s ease-in-out;
    &:hover {
        color: gray;
        transition: all 0.3s ease-in-out;
    }

    @media screen and (max-width: 760px) {
        
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -11px;
    margin-left: -11px;
    @media screen and (max-width: 760px) {
        display: none;
    }
`;

export const NavLogin = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    @media screen and (max-width: 760px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    color: black;

`;

export const NavLinks = styled.div`
    color: #344054;

    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`;

export const SignUp = styled.div`
    background-color: #7F56D9;
    color: white;
    text-decoration: none;
    font-size: 16px;
    line-height: 24px;
    border-radius: 8px;
    white-space: nowrap;
    outline: none;
    border: none;
    cursor: pointer;
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 10px 18px;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: #6941C6;
        transition: all 0.3s ease-in-out;
    }
    `;
