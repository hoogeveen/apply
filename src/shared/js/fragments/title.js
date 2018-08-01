import styled from 'styled-components'

const Title = styled.h1`
    margin-top: 0;
    color: ${({ theme }) => theme.textColor };
    font-family: ${({ theme }) => theme.fontBold };
    font-weight: 700;
`

export default Title