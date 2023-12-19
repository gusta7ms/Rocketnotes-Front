import { Conteiner, Profile } from './styles'

export function Header() {
  return (
    <Conteiner>
      <Profile>
        <img
          src="https://github.com/gusta7ms.png"
          alt="Foto do usuário"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Gustavo Melo</strong>
        </div>
      </Profile>
    </Conteiner>
  )
}