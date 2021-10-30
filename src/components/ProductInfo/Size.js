import styled from "styled-components"


const Size = (props) => {
    return (
        <Select onChange={props.change}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </Select>
    )
}

export default Size;

const Select = styled.select`
    padding: 10px 20px;
    border: 2px solid #F1F3F4;
`;