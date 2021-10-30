import styled from "styled-components";

const ProductCard = (props) => {
    return (
        <Wrapper>
            <div className="product-name">{props.name}</div>

            <div className="image-container">
                <img src={props.image} alt="product-img" />
            </div>

            <div className="prices">
                <div className="discount">
                    <span>{props.realPrice}</span> <b>{props.discount}</b>
                </div>
                <div className="current-price">{props.currentPrice}</div>
            </div>
        </Wrapper>
    )
}

export default ProductCard;

const Wrapper = styled.div`
    width: 300px;
    padding: 15px;
    background-color: #F6F6F6;

   
    .product-name {
        font-weight: bold;
        font-size: 20px;
        letter-spacing: 0.5px;
        color: #223263;
    }

    .image-container {
        height: 200px;
        margin: 10px 0;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
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
`
