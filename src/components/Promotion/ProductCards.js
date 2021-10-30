import styled from "styled-components";
import ProductCard from "./PorductCard";
import YellowSneakrs from "../../assets/yellow-sneakers.png"
import RedSneakrs from "../../assets/red-sneakers.png"
import Bag from "../../assets/bag.png"

const ProductCards = () => {
    return (
        <Wrapper>
            <ProductCard
                image={YellowSneakrs}
                name="FS - Nike Air Max 270 React..."
                realPrice="$334,14"
                discount="14% Off"
                currentPrice="$399,43"
            />

            <ProductCard
                image={RedSneakrs}
                name="FS - Nike Air Max 270 React..."
                realPrice="$534,33"
                discount="4% Off"
                currentPrice="$499,43"
            />
            <ProductCard
                image={Bag}
                name="FS - QUILTED MAXI CROSS BAG"
                realPrice="$534,33"
                discount="50% Off"
                currentPrice="$222,43"
            />
        </Wrapper>
    )
}

export default ProductCards;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: -60px;
`;