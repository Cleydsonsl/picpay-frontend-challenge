import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { Routers } from './Routers';

export function App() {
  
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Routers/>
    </BrowserRouter>
  )
}