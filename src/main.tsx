
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/Store/store.tsx'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
