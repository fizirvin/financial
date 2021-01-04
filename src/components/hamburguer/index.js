import React from 'react'
import { HamburgerContainer } from 'containers'

export default function Hamburguer() {
  const [active, setActive] = React.useState(false)
  return (
    <HamburgerContainer active={active} onClick={() => setActive(!active)}>
      <div className="bar1"></div>
      <div className="bar2"></div>
      <div className="bar3"></div>
    </HamburgerContainer>
  )
}
