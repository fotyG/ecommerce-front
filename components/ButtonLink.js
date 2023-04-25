import styled from "styled-components"
import { ButtonStyle } from "./Button"
import Link from "next/link"

export default function ButtonLink(props) {

  const StyledLink = styled(Link)`
    ${ButtonStyle}
  `

  return (
    <StyledLink {...props} />
  )
}