import styled from '@emotion/styled'

export const UListElement = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: yellow;

  @media (max-width: 850px) {
    display: none;
    flex-direction: column;
    align-items: initial;
    z-index: 1000;
  }
`
