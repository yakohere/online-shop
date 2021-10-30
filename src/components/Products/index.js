import styled from "styled-components";
import Product from "./Product";
import Product1 from "../../assets/product-1.png"
import { produts } from "../../data/products";
import { Link } from "react-router-dom";

const Products = () => {
    return (
        <Wrapper>
            <h1 className="title">Products</h1>

            <div className="switcher">
                <span>All</span>
                <span>Bags</span>
                <span>Sneakers</span>
            </div>

            <ProductsWrapper>
                {
                    produts.map((e, i) =>
                        <Link to={"/product-detail/" + e.id}>
                            <Product
                                key={i}
                                image={e.image}
                                name={e.name}
                                realPrice={"$" + e.price}
                                discount={e.discount + "%"}
                                currentPrice={"$" + (e.price - (e.price * e.discount / 100)).toFixed(2)}
                            />
                        </Link>
                    )
                }
            </ProductsWrapper>

            {/* <div className="load-more">LOAD MORE</div> */}
        </Wrapper>
    )
}

export default Products;

const Wrapper = styled.div`
    min-height: 100vh;
    margin-top: 60px;

    .title {
        text-align: center;
        margin-bottom: 26px;
    }

    .switcher {
        display: flex;
        justify-content: center;
        gap: 50px;
    }

    .load-more {
        text-align: center;
        color: #33A0FF;
        text-decoration: underline;
    }  
`;

const ProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 35px;
    padding: 30px 85px;

    a {
        text-decoration: none;
    }
`;