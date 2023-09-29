import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from "react-router-dom";
import { router } from './routers/Routers';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import MainLoading from './components/Loaders/MainLoader/MainLoading';


const quryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <QueryClientProvider client = {quryClient}>
    <RouterProvider router = {router} fallbackElement={<MainLoading />}/>
  </QueryClientProvider>
  </Provider>
)
