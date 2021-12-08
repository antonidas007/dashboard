import { BrowserRouter } from 'react-router-dom';
import { Routes } from '@app/components';
import { createTheme, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { createStore } from '@app/utils';
import { theme } from '@app/config';
import { GlobalStyles } from '@app/components/GlobalStyles';
import '@app/config/configuration';

const muiTheme = createTheme(theme);

export const App = () => {
    const store = createStore();

    return (
        <Provider store={store}>
            <ThemeProvider theme={muiTheme}>
                <GlobalStyles />
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
};
