import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import AuthProvider from './providers/AuthProvider'
import 'react-tooltip/dist/react-tooltip.css'
import '@smastrom/react-rating/style.css'
import 'react-local-toast/dist/bundle.min.css';
import { LocalToastProvider } from 'react-local-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LocalToastProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </LocalToastProvider>
  </React.StrictMode>
)
