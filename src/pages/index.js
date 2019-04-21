import React from "react"
import styled from "styled-components"
import { font } from "../util"

export default () => <Test>Hello Gatsby!</Test>

const Test = styled.div`
  color: red;
  ${font.smallest};
`
