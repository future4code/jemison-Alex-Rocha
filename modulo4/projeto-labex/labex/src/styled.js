import styled from "styled-components";

export const Container = styled.section`
margin: 0 auto;
padding: 20px;
border-radius: 10px;

width: 50%;

background-color: #F28482;
text-align: center;
`

export const Button = styled.button`
    margin-right: 10px;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background-color: #F7EDE2;
    font-weight: 500;

    :hover {
        cursor: pointer;
    }
`

export const PostsList = styled.ul`
    list-style-type: none;
    padding: 0;
`