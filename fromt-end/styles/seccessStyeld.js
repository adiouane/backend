import styled from "styled-components";

export const SuccessStyled = styled.div`
    margin: 5rem 10rem 10rem 10rem;
    text-align: center;
    background-color: #fff;
    padding: 2rem;
    border-radius: 2rem;

    h1{
        font-size: 2.5rem;
        margin: 2rem;
    }
    h2{
        font-size: 1rem;
        margin: 1rem;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;

    }
    ul{
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li{
        margin: 1rem;
        font-size: 1rem;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
    button{
        width: 100%;
        background-color: #000;
        color: #fff;
        border: none;
        padding: 1rem;
        font-size: 1.2rem;
        margin: 2rem 0;
        cursor: pointer;
    }
    button:hover{
        background-color: #333;
    }
    .img{
        height: 30%;
        width: 20%;
    }
`;