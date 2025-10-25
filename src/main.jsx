import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { RouterProvider } from 'react-router-dom'
import { router } from './router.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css'
import App from './App.jsx'
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>
    <Toaster position='top-right' toastOptions={{duration: 2000}}/>
    <App />
    </QueryClientProvider>
  </StrictMode>,
)
