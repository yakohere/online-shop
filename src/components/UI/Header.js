import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg"

const Header = () => {
    return (
        <Wrapper>
            <div className="logo">
                <LogoIcon />
                <h1>E-Comm</h1>
            </div>

            <nav>
                <Link to="/">Home</Link>
                <Link to="/bags">Bags</Link>
                <Link to="/sneakers">Sneakers</Link>
                <Link to="/my-products">My Products</Link>
            </nav>
        </Wrapper>
    )
}

export default Header;

const Wrapper = styled.div`
    height: 80px;
    padding: 0 104px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
        display: flex;
        align-items: center;
        column-gap: 10px;

        h1 {
            font-size: 18px;
        }
    }

    nav a {
        margin-right: 80px;
        color: #262626;
        font-size: 18px;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 500;

        :last-child {
            margin: 0;
        }
    }
`;