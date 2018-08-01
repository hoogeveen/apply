import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './js/reducers'
import { characters } from './js/data/characters'

import { ThemeProvider } from 'styled-components'
import { theme } from './styles'
import './styles/defaults/globals'

const store = createStore(
    reducer,
    {
        account: {
            battletag: 'merijn#21686',
            email: 'mail@merijn.pt'
        },
        characters: characters.filter(char => char.level === 110),
        apply: {
            maxStep: 0,
            step: 0,
            answers: {
                role: null,
                character: null
            }
        }
    }
)

// main app
import App from './js/components/app';

export default () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    )
}
