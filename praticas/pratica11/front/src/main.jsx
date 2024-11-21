import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<< HEAD
import { AuthProvider } from './contexts/AuthContext.jsx'
=======
import { AuthProvider } from './contexts/AuthContext';
>>>>>>> 3496c1eed4443ce8e23a194ad31dd72622dd7ad6

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <App />
    </AuthProvider>
  </StrictMode>,
)
