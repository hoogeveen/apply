import styled from 'styled-components'

const Paragraph = styled.p`
    color: ${({ theme }) => theme.textColor };
    font-family: ${({ theme }) => theme.fontBold };
`

export default Paragraph