import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// index.html id='root'에 아래의 App.jsx를
createRoot(document.getElementById('root')).render(<App />);
