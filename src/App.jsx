import './App.css'
import { HomePage } from './Pages/HomePage'
import { Routes , Route} from 'react-router';
import { CheckoutPage} from './Pages/CheckoutPage';
function App() {

  return (

    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path="checkout" element={<CheckoutPage />}></Route>
    </Routes>
     
  )
}

export default App
