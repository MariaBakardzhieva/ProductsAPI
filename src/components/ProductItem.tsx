import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StoreItem } from "../store/types/types";
import { SearchFilter } from "./SearchFilter";
import { useState } from "react";
import {
  increaseCartQuantity,
  decreaseCartQuantity,
  removeFromCart,
} from "../store/actions/cart";

const cardStyles = {
  maxWidth: "400px",
  width: "100%",
  height: "450px",
  borderRadius: "12px",
  border: "1px solid #1c607a",
  marginBottom: "20px",
};

const linkStyles = {
  color: "#000",
  textDecoration: "none",
};

interface ProductItemProps extends StoreItem {}

export function ProductItem() {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.allProducts.products);
  const [searchTerm, setSearchTerm] = useState("");
  const cartItems = useSelector((state: any) => state.cart);

  const filterFunction = (item: StoreItem) => {
    if (searchTerm === "") return item;
    if (
      item.category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return item;
    }
  };

  function handleInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(e.target.value);
  }

  function getItemQuantity(id: number) {
    return cartItems.find((item: any) => item.id === id)?.quantity || 0;
  }

  const renderList = products
    .filter(filterFunction)
    .map((product: ProductItemProps) => {
      const { id, title, category, price, images } = product;

      const quantity = getItemQuantity(id);

      return (
        <>
          <Card key={id} style={cardStyles}>
            <Card.Img
              variant="top"
              src={images}
              height="200px"
              style={{
                objectFit: "cover",
                width: "100%",
                borderRadius: "12px",
              }}
            />
            <Card.Body className="d-flex flex-column">
              <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <Link style={linkStyles} to={`/products/${product.id}`}>
                  <span className="fs-4">{title}</span>
                </Link>
                <span className="ms-2 text-muted">{formatCurrency(price)}</span>
              </Card.Title>
              <span className="fs-6 text-muted">{category.id}</span>
              <div className="mt-auto">
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
                        onClick={() =>
                          dispatch(decreaseCartQuantity(product))
                        }
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
          </Card>
        </>
      );
    });

  return (
    <>
      <SearchFilter
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleInputValue}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {renderList}
      </div>
    </>
  );
}
