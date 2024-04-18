import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./styles/global.scss"
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { DoctorProvider } from './context/DoctorContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<DoctorProvider>
    <App />
</DoctorProvider>
)