import { FC } from "react";
import { Button, Card } from "react-bootstrap";
import { StoreItem } from "../models/StoreItem";
import { formatCurrency } from "../utilities/formatCurrency";
import { Link } from "react-router-dom";
import {
  increaseCartQuantity,
  decreaseCartQuantity,
  removeFromCart,
} from "../store/actions/cart";
import { useDispatch, useSelector } from "react-redux";

const cardStyles = {
  postion: "relative",
  width: "100%",
  height: "100%",
  minHeight: "500px",
  borderRadius: "12px",
  alignItems: "center",
  justifyContent: "center",
};

const containerStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const ProductDetailsItem: FC<StoreItem> = (product) => {
  const dispatch = useDispatch();
  const { id, title, category, price, images } = product;
  const cartItems = useSelector((state: any) => state.cart);

  function getItemQuantity(id: number) {
    return cartItems.find((item: any) => item.id === id)?.quantity || 0;
  }

  const quantity = getItemQuantity(id);

  return (
    <>
      <Card key={id} style={cardStyles}>
        <div style={containerStyles}>
          <Card.Img
            variant="top"
            src={images}
            height="200px"
            style={{ objectFit: "contain", width: "100%", height: "300px" }}
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
              <span className="fs-4">{title}</span>
              <span className="ms-2 text-muted">{formatCurrency(price)}</span>
            </Card.Title>
            <span className="fs-6 text-muted" style={{ marginBottom: "50px" }}>
              {category?.id}
            </span>
            <div className="mt-auto">
              <Link to={"/store"}>Back to store</Link>
              {quantity === 0 ? (
                <Button
                  className="w-100"
                  onClick={() => dispatch(increaseCartQuantity(product))}
                >
                  + Add to Cart
                </Button>
              ) : (
                <div
                  className="d-flex align-items-center flex-column"
                  style={{ gap: ".5rem" }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ gap: ".5rem" }}
                  >
                    <Button
                      onClick={() => dispatch(decreaseCartQuantity(product))}
                    >
                      -
                    </Button>
                    <div>
                      <span className="fs-3">{quantity}</span> in cart
                    </div>
                    <Button
                      onClick={() => dispatch(increaseCartQuantity(product))}
                    >
                      +
                    </Button>
                  </div>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => dispatch(removeFromCart(product))}
                  >
                    Remove
                  </Button>
                </div>
              )}
            </div>
          </Card.Body>
        </div>
      </Card>
    </>
  );
};
