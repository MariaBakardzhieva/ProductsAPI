import { useEffect } from "react";
import { ProductItem } from "./ProductItem";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setProducts } from "../store/actions/product";

export function Products() {
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const request = await axios.get("https://api.escuelajs.co/api/v1/products");
    const response = await request;

    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="products-container">
        <ProductItem />
      </div>
    </>
  );
}
