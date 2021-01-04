import styled from '@emotion/styled'

export const HamburgerContainer = styled.div`
  display: inline-block;
  cursor: pointer;

  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 5px;
    background-color: #333;
    margin: 6px 0;
    transition: 0.3s;
  }

  /* ${(props) =>
    props.active && {
      backgroundColor: 'red'
    }} */

  .bar1 {
    ${(props) =>
      props.active && {
        webkitTransform: 'rotate(-45deg) translate(-9px, 6px)',
        transform: 'rotate(-45deg) translate(-9px, 6px)'
      }}
  }

  .bar2 {
    ${(props) =>
      props.active && {
        opacity: '0'
      }}
  }

  .bar3 {
    ${(props) =>
      props.active && {
        webkitTransform: 'rotate(45deg) translate(-8px, -8px)',
        transform: 'rotate(45deg) translate(-8px, -8px)'
      }}
  }
`

export const NavContainer = styled.nav`
  height: 100%;
  width: 90vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: blue;

  @media (max-width: 850px) {
    height: 40px;
  }
`

export const IconContainer = styled.div`
  width: 3rem;
  height: 2rem;
  background-color: red;
`

export const MenuContainer = styled.div`
  width: 50%;
`
