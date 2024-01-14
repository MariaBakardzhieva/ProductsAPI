import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { selectedProduct } from "../store/actions/product";
import { ProductDetailsItem } from "./ProductDetailsItem";

export function ProductDetails() {
  const product = useSelector((state: any) => state.product);
  const { id } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const fetchProductDetail = async () => {
    const request = await axios.get(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    setLoading(false);
    const response = await request;
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (id && id !== "") fetchProductDetail();
  }, [id]);

  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <ProductDetailsItem {...product} />
        </div>
      )}
    </>
  );
}
