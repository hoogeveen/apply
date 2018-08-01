import { injectGlobal } from 'styled-components'
import color from '../variables/colors'

injectGlobal`
  html {
    -webkit-font-smoothing: subpixel-antialiased;
  }

  body {
    background-color: ${color.darkGrey};
    background-image: url('/img/pattern.png');
    background-size: 66px;
  }

  a {
    color: ${color.green};
  }
  a:hover {
    text-decoration: underline;
  }
  h2 {
    line-height: 1.5;
  }
  .locked {
    overflow: hidden;
    position: relative;
    height: 100%;
  }
`
