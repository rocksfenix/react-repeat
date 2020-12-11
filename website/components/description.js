import styled from 'styled-components'
import * as polished from 'polished'
import { foreground } from '../utils/colors';

const Description = styled.p`
  color: ${foreground};
  font-size: ${polished.modularScale(1)};
  margin-bottom: ${polished.rem(20)};
  margin-top: ${polished.rem(60)};
`

export default Description
