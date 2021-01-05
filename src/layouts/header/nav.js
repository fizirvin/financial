import { Hamburguer, Menu } from 'components'
import Icon from './icon'
import { NavContainer } from 'containers'
import { MenuComponent } from 'constants/menu'

export default function Nav() {
  return (
    <NavContainer>
      <Hamburguer />
      <Menu {...MenuComponent} />
      <Icon />
    </NavContainer>
  )
}
