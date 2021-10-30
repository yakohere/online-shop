import styled from "styled-components";
import ShoeImage from "../../assets/shoe.png";

const ShoeAd = () => {
    return (
        <Wrapper>
            <div className="text-container">
                <h1>
                    Adidas Men Running <br />
                    Sneakers
                </h1>
                <p>
                    Performance and design. Taken right to the edge.
                </p>
                <a href="/">
                    SHOP NOW
                </a>
            </div>

            <img src={ShoeImage} alt="shoe" />
        </Wrapper>
    )
}

export default ShoeAd;

const Wrapper = styled.div`
    height: 600px;
    background-color: #40BFFF;
    margin: 90px 0;
    position: relative;

    img {
        position: absolute;
        right: -20px;
        top: -100px;
    }

    .text-container {
        color: white;
        position: absolute;
        top: 50%;
        left: 85px;
        transform: translate(0, -50%);
    
        h1 {
            font-weight: 500;
            font-size: 55px;
            line-height: 82px;
        }

        p {
            font-size: 24px;
            line-height: 36px;
        }

        a {
            font-weight: 600;
            font-size: 20px;
            line-height: 30px;
            color: white;
        }
    }
`;