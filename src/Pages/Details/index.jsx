// TODO PAGES DETAILS
// ! PAGES DETAILS
// ? PAGES DETAILS

import { Conteiner, Links } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../Components/Section'

export function Details() {
  return (
    <Conteiner>
      <Header />

      <Section title='Links uteis'>
        <Links>
          <li><a href="#">https://www.rocketseat.com.br/</a></li>
          <li><a href="#">https://www.rocketseat.com.br/</a></li>
        </Links>
      </Section>

      <Button title="Voltar" />
    </Conteiner>
  )
}
