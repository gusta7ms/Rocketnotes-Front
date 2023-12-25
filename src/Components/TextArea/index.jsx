/* eslint-disable react/prop-types */
import { Container } from "./styled";

export function TextArea({value, ...rest}) {
  return <Container {...rest}>
    {value}
  </Container>
}
