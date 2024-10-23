import styled from "styled-components"

const StyledButton = styled.button`
    background-color: white;
    font-size: 20px;
    border-radius: 15px;
    padding: 5px;
    width: 200px;
`

function Button () {
    return (
        <StyledButton>Read More</StyledButton>
    )
}

export default Button