import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './global'
import { Router } from './Router'

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </>
  )
}

export default App
