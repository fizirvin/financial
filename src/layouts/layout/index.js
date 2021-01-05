import Nav from '../header'
import { ContainerArea, FooterArea, HeaderArea, MainArea } from 'containers'

export default function Layout({ children }) {
  return (
    <ContainerArea>
      <HeaderArea>
        <Nav />
      </HeaderArea>
      <MainArea>{children}</MainArea>
      <FooterArea id={'footer'}>FooterArea</FooterArea>
    </ContainerArea>
  )
}
