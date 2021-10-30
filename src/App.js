import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Home from "./routes/Home";
import ProductDetail from "./routes/ProductDetail";
import { Route, Switch } from "react-router";
import MyProducts from "./components/MyProducts";

const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/product-detail/:id" component={ProductDetail} exact />
                <Route path="/my-products" component={MyProducts} exact />
            </Switch>
            <Footer />
        </>
    );
}

export default App;
