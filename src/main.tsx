import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from "react-router-dom";
import { router } from './routers/Routers';


const quryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client = {quryClient}>
    <RouterProvider router = {router} />
  </QueryClientProvider>,
)
