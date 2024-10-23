import styled from "styled-components";

const StyledLink = styled.a`
    background-color: white;
    font-size: 20px;
    border-radius: 10px;
    padding: 5px;
    width: 170px;
    text-align: center;
    display: inline-block;
    text-decoration: none;
    color: black;
`;

function Button() {
    return (
        <StyledLink href="https://github.com/NaufalNurAdrian/" target="_blank" rel="noopener noreferrer">
            Read More
        </StyledLink>
    );
}

export default Button;
