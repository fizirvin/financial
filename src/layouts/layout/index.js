import Nav from '../header'
import { ContainerArea, HeaderArea, MainArea } from 'containers'

export default function Layout({ children }) {
  return (
    <ContainerArea>
      <HeaderArea>
        <Nav />
      </HeaderArea>
      <MainArea>{children}</MainArea>
    </ContainerArea>
  )
}
