import { MenuContainer, UListElement } from 'containers'

export default function Menu({ items = [], lan = 0 }) {
  const renderItems = items.map((item, index) => (
    <li key={index}>
      <a href={item[2]}>{item[lan]}</a>
    </li>
  ))
  return (
    <MenuContainer>
      <UListElement>{renderItems}</UListElement>
    </MenuContainer>
  )
}
