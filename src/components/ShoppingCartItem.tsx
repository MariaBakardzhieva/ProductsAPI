import { Button, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/actions/cart";
import { formatCurrency } from "../utilities/formatCurrency";

type ShoppingCartItemProps = {
  id: number;
  quantity: number;
};

export function ShoppingCartItem({ id, quantity }: ShoppingCartItemProps) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: any) => state.cart);

  const item = cartItems.find((i: any) => i.id === id);

  if (!item) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.images}
        alt="productImg"
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.title}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div>{formatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => dispatch(removeFromCart(item))}
      >
        &times;
      </Button>
    </Stack>
  );
}
