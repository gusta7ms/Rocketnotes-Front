/* eslint-disable react/prop-types */
import { Conteiner } from "./styles";

export function Button({ title, loading = false, ...rest }) {
  //! Aparentemente está dando erro de " is missing in props validation"
  return (
    <Conteiner
      type="button"
      disabled={loading} {...rest}
    >
      {loading ? "Carregando..." : title}
    </Conteiner>
  );
}
