import { Container } from "react-bootstrap";
import { ProfileInfo } from "../components/ProfileInfo";

export function ProfilePage() {
  return (
    <Container className="mb-4">
      <ProfileInfo />
    </Container>
  );
}
