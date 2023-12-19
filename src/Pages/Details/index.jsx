import { Conteiner } from "./styles";

import { Button } from '../../Components/Button'
// import { Button } from '../..//Button'

export function Details() {
  return (
    <Conteiner>
      <h1>Hello Word!</h1>

      <h2>Gustavo Melo</h2>

      <Button title="Entrar" />
      <Button title="Cadastrar" />
    </Conteiner>
  );
}
