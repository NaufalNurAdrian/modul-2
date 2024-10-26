
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './themecontent';
import './input.css'; // Make sure to import your styles

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);