import styled from "styled-components"

const Service = (props) => {
    return (
        <Wrapper>
            <div className="icon">
                {props.icon}
            </div>

            <h1>{props.name}</h1>
            <p>
                {props.description}
            </p>
        </Wrapper>
    )
}

export default Service;

const Wrapper = styled.div`
    width: 200px;
    height: 269px;

    .icon {
        height: 90px;
        margin-bottom: 50px;
    }

    svg {
        height: 90px;
        display: block;
        margin: auto;
    }

    h1 {
        font-weight: 500;
        font-size: 27px;
        line-height: 40px;

        color: #22262A;
    }

    p {
        font-size: 18px;
        line-height: 22px;
        text-align: center;

        color: #22262A;

    }
`;