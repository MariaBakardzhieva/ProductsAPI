import { Offcanvas, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useCart } from "../context/CartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { ShoppingCartItem } from "./ShoppingCartItem";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const cartItems = useSelector((state: any) => state.cart);
  const { closeCart } = useCart();

  return (
    <>
      <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Stack gap={3}>
            {cartItems.map((item: any) => (
              <ShoppingCartItem key={item.id} {...item} />
            ))}
            <div className="ms-auto fw-bold fs-5">
              Total{" "}
              {formatCurrency(
                cartItems.reduce(
                  (total: number, cartItem: { id: any; quantity: number }) => {
                    const item = cartItems.find(
                      (i: any) => i.id === cartItem.id
                    );
                    return total + (item?.price || 0) * cartItem.quantity;
                  },
                  0
                )
              )}
            </div>
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
