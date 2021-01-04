import { Hamburguer, Menu } from 'components'
import Icon from './icon'
import { NavContainer } from 'containers'

export default function Nav() {
  return (
    <NavContainer>
      <Hamburguer />
      <Menu />
      <Icon />
    </NavContainer>
  )
}
