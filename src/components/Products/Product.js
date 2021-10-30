import styled from "styled-components";
import { ReactComponent as Rate } from "../../assets/rate.svg"

const Product = (props) => {
    return (
        <Wrapper>
            <div className="image-container">
                <img src={props.image} alt="product-img" />
            </div>

            <div className="product-info">
                <div className="product-name">{props.name}</div>

                <Rate />

                <div className="prices">
                    <div className="current-price">{props.currentPrice}</div>
                    <div className="discount">
                        <span>{props.realPrice}</span> <b>{props.discount}</b>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Product;

const Wrapper = styled.div`
    width: 100%;
    background-color: #ffffff;
    border: 2px solid #F6F6F6;

   
    .product-name {
        font-weight: bold;
        font-size: 16px;
        letter-spacing: 0.5px;
        color: #223263;
        text-align: center;
    }

    .image-container {
        height: 200px;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .product-info {
        padding: 10px;

        svg {
            display: block;
            margin: 15px auto;
        }
    }

    .prices {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        .discount span:first-child{
            font-size: 14px;
            letter-spacing: 0.5px;
            text-decoration-line: line-through;
            color: #9098B1;
        }

        b {
            color: #FB7181;
            font-weight: bold;
            font-size: 16px;
        }


        .current-price {
            font-size: 20px;
            letter-spacing: 0.5px;
            color: #40BFFF;         
            font-weight: bold;
        }
    }
`;