import styled from "styled-components";

export const NavStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: #f8f8f8; */
    margin: 0 0 2rem 0;
    a{
        text-decoration: none;
        color: black;
        font-size: 2rem;
        cursor: pointer;
    }
    svg{
        font-size: 2rem;
        cursor: pointer;
    }
    h1{
        font-size: 1.5rem;
    }
`;

export const CartStyle = styled.div`
    div{
        margin: 0 0.75rem;
        display: flex;
        align-items: center;  
        font-size  : 1.2rem;
    }
    h3{
        text-decoration: none;
        color: var(--secondary);
        font-size: 1.1rem;
        cursor: pointer;
    }
    span{
        background-color: #ff2828;
        color: white;
        padding: 0.2rem 0.5rem;
        border-radius: 50%;
        margin-left: 1.7rem;
        font-size: 0.75rem;
        pointer-events: none;
    }
    svg{
        font-size: 2rem;
        cursor: pointer;
    }
`;
