import styled from '@emotion/styled'

export const ContainerArea = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4rem 100vh 4rem;
  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-gap: 0.1rem;
  font-weight: 800;

  @media (max-width: 850px) {
    font-weight: 500;
  }
`

export const HeaderArea = styled.header`
  grid-area: header;
  box-shadow: 0 1px 0 0 #e0e0e0;
  position: fixed;
  width: 100vw;
  height: 4rem;
  left: 0;
  top: 0;
  z-index: 4;
`

export const MainArea = styled.main`
  grid-area: main;
`

export const FooterArea = styled.footer`
  grid-area: footer;
  background-color: orange;
`
