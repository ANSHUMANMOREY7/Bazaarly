import './App.css'
import { HomePage } from './Pages/HomePage'
import { Routes , Route} from 'react-router';
import { CheckoutPage} from './Pages/CheckoutPage';
import { OrdersPage} from './Pages/OrdersPage';
import { TrackingPage } from './Pages/TrackingPage';
function App() {

  return (

    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path="checkout" element={<CheckoutPage />}></Route>
      <Route path='Orders' element={<OrdersPage />}></Route>
      <Route path='Tracking' element={<TrackingPage />}></Route>
    </Routes>
     
  )
}

export default App
