import { App } from '@app/components';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');

// TODO const root = ReactDOM.hydrateRoot(container, <App />);
// @ts-ignore
const root = ReactDOM.createRoot(container);

root.render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// reportWebVitals(console.log);
