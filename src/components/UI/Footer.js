import styled from "styled-components";

import { ReactComponent as WestrnUnion } from "../../assets/western-union.svg";
import { ReactComponent as MasterCard } from "../../assets/master-card.svg";
import { ReactComponent as Paypal } from "../../assets/paypal.svg";
import { ReactComponent as Visa } from "../../assets/visa.svg";

const Footer = () => {
    return (
        <Wrapper>
            <QuickLinks>
                <Links
                    title="Information"
                    links={["About Us", "Infomation", "Privacy Policy", "Terms & Conditions"]}
                />

                <Links
                    title="Service"
                    links={["About Us", "Infomation", "Privacy Policy", "Terms & Conditions"]}
                />

                <Links
                    title="My Account"
                    links={["About Us", "Infomation", "Privacy Policy", "Terms & Conditions"]}
                />

                <Links
                    title="Our offers"
                    links={["About Us", "Infomation", "Privacy Policy", "Terms & Conditions"]}
                />
            </QuickLinks>
            <End>
                <p>© 2018 Ecommerce theme by www.bisenbaev.com</p>

                <Brands>
                    <WestrnUnion />
                    <MasterCard />
                    <Paypal />
                    <Visa />
                </Brands>
            </End>
        </Wrapper>
    )
}

export default Footer;

const Wrapper = styled.div`
    padding: 112px 135px 55px 135px;
    background-color: #BCDDFE;
    margin-top: 90px;
`;

const QuickLinks = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const End = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    border-top: 1px solid white;
    padding-top: 20px;
`;

const Brands = styled.div`
    svg {
        margin: 0 8px;
    }
`;

export const Links = (props) => {
    return (
        <LinkWrapper>
            <p>{props.title}</p>
            <ul>
                {props.links.map((e, i) => <li key={i}>{e}</li>)}
            </ul>
        </LinkWrapper>
    )
}

const LinkWrapper = styled.div`
    p {
        margin-bottom: 30px;
        font-size: 18px;
    }
    ul li {
        list-style: none;
        font-size: 14px;
        line-height: 21px;
    }
`;