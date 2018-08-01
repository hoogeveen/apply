import React from 'react';

import { ThemeProvider } from 'styled-components'
import { theme } from './styles'
import './styles/defaults/globals'

// main app
import App from './js/components/app';

export default () => {
    return (
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    )
}
