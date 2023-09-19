import './App.css';
import './payment.css';
import  './banking.css';
import './cashcard.css';
import './investing.css';
import Home from './components/Home';
import Payment from './components/Payment';
import Banking from './components/Banking';
import Cashcard from './components/Cashcard';
import Investing from './components/Investing';
function App() {
  return (
    <div className="App">
      <Home/>
      <Payment/>
      <Banking/>
      <Cashcard/>
      <Investing/>
      
    </div>
  );
}

export default App;
