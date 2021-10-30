import styled from "styled-components";
import PromotionImage from "../../assets/promotion-image.png"
import ProductCards from "./ProductCards";

const Promotion = () => {
    return (
        <>
            <PromotionWrapper>
                <h1>
                    Super Flash Sale
                    <br />
                    50% Off
                </h1>
            </PromotionWrapper>

            <ProductCards />
        </>
    )
}

export default Promotion;

const PromotionWrapper = styled.div`
    width: 100%;
    height: 450px;
    background-image: url(${PromotionImage});
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    padding: 0 104px;

    h1 {
        color: white;
        font-size: 64px;
        font-weight: bold;
    }
`;