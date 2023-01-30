import styled from "styled-components";

export const CartWrapper = styled.div`
// this cart wrapper CartWrapper
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    z-index: 100;
    display: flex;
    justify-content: flex-end;
    /* display: none; */

`;

export const CartStyle = styled.div`
    top: 0;
    right: 0;
    background: #f1f1f1;
    width: 35%;
    height: 100%;
    padding: 20px 40px;
    overflow-y: auto;
    position: relative;
    h1{
        font-size: 2rem;
    }
`;

export const OrderCart = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    /* border-bottom: 1px solid #ccc; */
    border-radius: 15px;
    overflow: hidden;
    background: white;
    margin: 2rem 1rem;
    padding: 2rem 1rem;
    img{
        width: 100px;
        height: 100px;
        object-fit: cover;
        margin-right:4rem;
        margin-left: 1rem;
    }
    h2{
        font-size: 15px;
    }
    h3{
        font-size: 15px;
        margin: 0.5rem 0
    }

`;

export const EmptyCart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    flex-direction: column;
    h1{
        font-size: 2rem;
        margin: 2rem 0;
    }
`;

export const Quantityorder = styled.div`
 display: flex;
    align-items: center;
    margin: 1rem 0rem;
    p {
        width: 1rem;
        text-align: center;
    }
    button {
        background: transparent;
        border: none;
        display: flex;
        font-size: 1.5rem;
    }
    span{
        margin-right: 5px;
        margin-left: 5px;
        color: var(--secondary);
    }
    svg{
        color: #494949;
    }
    //hover effect
    /* &:hover{
        cursor: pointer;
        transform: scale(1.1);
    } */
`;

export const TotalPricestyle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    h2{
        font-size: 1.3rem;
        margin: 1rem 0;
        overflow: hidden;
        opacity: 0.8;
        color : #15c39a;
        border-radius: 5%;
        padding: 1rem 3rem 1rem 3rem;
    }
    button{
        background: var(--primary);
        color: white;
        padding: 0.7rem 13rem 0.7rem 13rem;
        border: none;
        font-size: 1rem;
        margin: 1rem 0;
    }
`;
