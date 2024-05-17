import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Delivery from "./pages/Delivery/Delivery";
import NotFound from "./pages/NotFound/NotFound";
import Menu from "./components/Menu/Menu";
import Announce from "./Components/Announce";
import Newsletter from "./Components/Newsletter";
import Register from "./pages/Register";
import ReactDOM from "react-dom";
import Products from "./components/Products";
import { createContext, useEffect, useState } from "react";
import {
  onAuthChange,
  onCategoriesLoad,
  onOrdersLoad,
  onProductsLoad,
} from "./firebase";
import ThankYou from "./pages/ThankYou/ThankYou";
import Orders from "./pages/Orders/Orders";

export const AppContext = createContext({
  categories: [],
  products: [],
  orders: [],
  cart: {},
  setCart: () => {},
  user: null,
});

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || {};
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    onCategoriesLoad(setCategories);
    onProductsLoad(setProducts);
    onOrdersLoad(setOrders);

    onAuthChange((user) => {
      if (user) {
        user.isAdmin = user && user.email === "mmukashova1@gmail.com";
      }

      setUser(user);
    });
  }, []);

  return (
    <div className="App">
      <AppContext.Provider
        value={{ categories, products, cart, setCart, user, orders }}
      >
        <Router>
          <Layout>
            <Announce />
            <Navbar />
            <Menu />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contacts" element={<Contacts />} />
                <Route path="category" element={<CategoryPages />} />
                <Route path="delivery" element={<Delivery />} />
                <Route path="cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
                <Route path="login" element={<Login />} />
                <Route path="productPage" element={<ProductPage />} />
                <Route path="products" element={<Products />} />
                <Route path="register" element={<Register />} />
              </Routes>
            </main>
            <Newsletter />
            <Footer />
          </Layout>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
