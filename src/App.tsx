import { Routes, Route } from "react-router-dom";
import { Store } from "./pages/Store";
import { ProductDetails } from "./components/ProductDetails";
import { LoginPage } from "./pages/LoginPage";
import { Navbar } from "./components/Navbar";
import { Register } from "./components/Register";
import { ProfilePage } from "./pages/ProfilePage";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
