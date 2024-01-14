import { Container } from "react-bootstrap";
import { Products } from "../components/Products";

export function Store() {
  return (
    <Container className="mb-4">
      <h1>Store</h1>
      <Products />
    </Container>
  );
}
