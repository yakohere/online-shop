import styled from "styled-components"




const Counter = (props) => {
    return (
        <Wrapper>
            <div onClick={props.minusClicked}>-</div>
            <div>{props.count}</div>
            <div onClick={props.plusClicked}>+</div>
        </Wrapper>
    )
}

export default Counter

const Wrapper = styled.div`
    background: #F6F7F8;
    width: 120px;
    height: 50px;
    display: flex;

    div {
        line-height: 50px;
        width: 40px;
        text-align: center;
        color: #33A0FF;
        font-weight: bold;
        font-size: 18px;
        user-select: none;

        :first-child, :last-child {
            cursor: pointer;
        }
        
        :nth-child(2) {
            color: black;
        }
    }
`;