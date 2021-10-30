import { useEffect, useState } from "react";
import styled from "styled-components";
import { produts } from "../../data/products";
import Product from "./Product";


const MyProducts = () => {
    const [products, setProducts] = useState([]);


    useEffect(function () {
        localStorage.getItem("saved-products") && setProducts(JSON.parse(localStorage.getItem("saved-products")).reverse())
    }, [])

    const removeProduct = (id) => {
        const filteredProducts = products.filter(e => e.productId !== id);
        setProducts(filteredProducts);
        localStorage.setItem("saved-products", JSON.stringify(filteredProducts));
    }

    return (
        <Wrapper>
            {
                products.map((e, i) => <Product
                    image={produts.filter(el => el.id === parseInt(e.productId))[0].image}
                    name={e.productName}
                    price={e.productPrice}
                    total={e.productTotalPrice}
                    color={e.productColor}
                    count={e.productCount}
                    size={e.productSize}
                    deleteClicked={() => removeProduct(e.productId)}
                />)
            }
        </Wrapper>
    )
}

export default MyProducts;

const Wrapper = styled.div`
    @media(max-width: 700px) {
        background-color: red;
    }
`;