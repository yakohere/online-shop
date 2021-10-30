import styled from "styled-components"

const Product = (props) => {
    return (
        <Wrapper>
            <div class="delete" onClick={props.deleteClicked}>X</div>
            <div className="img-container">
                <img src={props.image} alt="nike" />
            </div>

            <div className="info">
                <h1>{props.name}</h1>

                <div className="row">
                    <div className="price">
                        <p><b>Pirce:</b> ${props.price.toFixed(2)}</p>
                        <p><b>Total:</b> ${props.total.toFixed(2)}</p>
                    </div>

                    <div className="additional-info">
                        <p><b>Color:</b> {props.color.map(e => e.color).join(",")}</p>
                        <p><b>Count:</b> {props.count}</p>
                        <p><b>Size:</b> {props.size}</p>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Product;

const Wrapper = styled.div`
    width: 700px;
    display: flex;
    align-items: center;
    margin: 10px auto;
    background: rgba(51, 160, 255, 0.1);
    padding: 20px;
    position: relative;

    p {
        margin: 10px 0;
    }

    .delete {
        color: red;
        font-weight: bold;
        background-color: rgba(255, 0, 0, 0.3);
        padding: 5px 10px;
        border-radius: 5px;
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }

    .img-container {
        width: 150px;
        height: 150px;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .info {
        width: calc(100% - 150px);
        padding-left: 20px;

        .row {
            width: 100%;
            display:  flex;
            align-items: center;
            padding: 10px 0;
            justify-content: space-between;
        }

        h1 {
            font-size: 22px;
            color: #33A0FF;
            padding-bottom: 10px;
            border-bottom: 2px solid #33A0FF;
        }
    }
`;