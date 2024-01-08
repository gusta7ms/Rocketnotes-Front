/* eslint-disable react/prop-types */
import { Container } from "./styles";

export function ButtonText({ title, isActive = false, ...rest }) {
  return (
    <Container
     $isactive={isActive.toString()}
     type="button"
     {...rest}
    >
      {title}
    </Container>
  );
}
