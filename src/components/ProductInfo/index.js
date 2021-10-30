import { useState } from "react";
import { useHistory, useParams, useRouteMatch } from "react-router";
import styled from "styled-components";

import { ReactComponent as CartIcon } from "../../assets/cart.svg"
import { produts } from "../../data/products";
import { Color } from "./Color";
import Counter from "./Counter";
import Size from "./Size";

const ProductInfo = () => {
    const colors = ["red", "blue", "black", "orange", "green"];

    const [color, setColor] = useState([{ id: 1, color: "red" }]);
    const [count, setCount] = useState(1);
    const [size, setSize] = useState(1);

    const { id } = useParams();

    const selectedProduct = produts.filter(e => e.id === parseInt(id));
    const currentPrice = selectedProduct[0].price - (selectedProduct[0].price * selectedProduct[0].discount / 100)

    const history = useHistory()

    const saveProduct = () => {
        const data = {
            productId: id,
            productName: selectedProduct[0].name,
            productPrice: currentPrice,
            productTotalPrice: currentPrice * count,
            productColor: color,
            productSize: size,
            productCount: count
        }


        let oldProducts = localStorage.getItem("saved-products");

        if (oldProducts) {
            oldProducts = JSON.parse(oldProducts)
        } else {
            oldProducts = []
        }

        localStorage.setItem("saved-products", JSON.stringify([...oldProducts, data]));

        history.push("/my-products")
    }

    return (
        <Wrapper>
            <img src={selectedProduct[0].image} alt="prodc-img" />

            <div className="info">
                <h1>{selectedProduct[0].name}</h1>

                <div className="prices">
                    <div className="current-price">
                        {"$" + currentPrice.toFixed(0)}</div>
                    <div className="discount">
                        <span>
                            {"$" + selectedProduct[0].price}
                        </span>
                        <b>
                            {selectedProduct[0].discount + "%"}
                        </b>
                    </div>
                </div>

                <div className="colors">

                    <p>Select color:</p>
                    {
                        color.map((e, colorIndex) => {

                            return (
                                <div className="colors-line">
                                    {
                                        e.id
                                    }
                                    {
                                        colors.map((el, i) =>
                                            <Color
                                                key={i}
                                                clicked={() => {
                                                    const colorState = [...color];
                                                    colorState[colorIndex].color = el;
                                                    setColor(colorState)
                                                }}
                                                color={el}
                                                active={e.color === el}
                                            />
                                        )
                                    }
                                </div>
                            )

                        })
                    }
                </div>


                <div className="size">
                    <p>
                        Select your size:
                    </p>

                    <Size change={(e) => setSize(e.target.value)} />
                </div>

                <Counter
                    count={count}
                    minusClicked={() => {
                        count - 1 !== 0 && setCount(count - 1);
                        color.length - 1 !== 0 && setColor(color.filter((e, i) => i !== color.length - 1))
                    }}
                    plusClicked={() => {
                        setCount(count + 1);
                        setColor([...color, { id: color[color.length - 1].id + 1, color: "red" }])
                    }}
                />

                <button onClick={saveProduct}>
                    <CartIcon />
                    Add to Cart
                </button>
            </div>
        </Wrapper>
    )
}

export default ProductInfo;

const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;

    .info {
        width: 300px;
        
        h1 {
            margin-bottom: 20px;
        }

        button {
            background: rgba(51, 160, 255, 0.1);
            padding: 10px 20px;
            border: none;
            margin: 20px 0 0 0;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            border-radius: 5px;
            color: #33A0FF;
            cursor: pointer;
        }
    }

    .colors {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 20px;

        .colors-line {
            display: flex;
            gap: 20px;
        }
    }

    .size {
        margin: 20px 0;
        display: flex;
        align-items: center;
        gap: 20px;
    }

.prices {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 20px;
        
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