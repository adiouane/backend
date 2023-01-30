import styled from "styled-components";

export const Detailsstyles = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 7rem;
    img {
        width: 40%;
        margin-right: 10rem;
    }
`;

export const Info = styled.div`
    width: 50%;
    button{
        font-size: 1rem;
        font-weight: medium;
        padding: 0.5rem 1rem;
        cursor: pointer;
    }
    p{
        margin: 1rem 0rem;
    }

`;

export const Quantity = styled.div`
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
        margin-right: 1rem;
        color: var(--secondary);
    }
    svg{
        color: #494949;
    }

`;

export const AddToCart = styled.button`
    width: 100%;
    background: var(--primary);
    color: white;
    font-weight: 500;
`;