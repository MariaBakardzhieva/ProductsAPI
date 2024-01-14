import { Container } from "react-bootstrap";
import { LoginForm } from "../components/LoginForm";

export function LoginPage() {
  return (
    <Container className="mb-4">
      <LoginForm />
    </Container>
  );
}
