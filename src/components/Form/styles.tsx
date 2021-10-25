import styled from "styled-components";

export const Placer = styled.div`
    margin: auto;
`
export const Container = styled.form`
    display: flex;
    flex-direction: column;
    margin: auto;
    background-color:dimgray;
    color: white;
    width: 360px;
    height: 280px;
    font-size: 18px;
    border: 5px solid gray;
    border-radius: 5px;
    align-items: center;
    user-select: none; 
    input {
        margin: 8px;
        margin-top: 2px;
        font-size: 16px;
        width: 240px;
        height: 26px;
        border: 2.5px solid gray;
        border-radius: 4px;
    }
    button {
        font-size: 18px;
        margin-top: 16px;
        width: 120px;
        height: 30px;
        background-color: whitesmoke;
        border: 3px solid gray;
        border-radius: 24px;
        cursor: pointer;
    }
    button:active {
        margin-top: 16.5px;
        width: 118px;
        height: 29px;
        background-color:darkgrey;
    }
`
export const Operator = styled.div`
    text-align: center;
    margin-top: 12px;
    margin-bottom: 8px;
    font-size: 28px;
`