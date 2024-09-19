import './App.css';
import HomeScreen from './Screen/HomeScreen.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Transaction from './Screen/Transaction.js';
import Rewards from './Screen/Rewards.js';
import Finance from './Screen/Finance.js';
import Card from './Screen/Card.js';
import Me from './Screen/Me.js';
import AddMoney from './Screen/AddMoney.js';
import Transfer from './Screen/Transfer.js';
import Withdraw from './Screen/Withdraw.js';
import ToOpay from './Screen/ToOpay.js';


function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
                <Route path="/" element={<HomeScreen/>} />
                <Route path="/Transaction" element={<Transaction/>} />
                <Route path="/back" element={<HomeScreen/>} />
                <Route path="/Home" element={<HomeScreen/>} />
                <Route path="/Reward" element={<Rewards/>} />
                <Route path="/Finance" element={<Finance/>} />
                <Route path="/Card" element={<Card/>} />
                <Route path="/Me" element={<Me/>} />
                <Route path="/AddMoney" element={<AddMoney/>} />
                <Route path="/Transfer" element={<Transfer/>} />
                <Route path="/Withdraw" element={<Withdraw/>} />
                <Route path="/ToOpay" element={<ToOpay/>}/>
                <Route path="/Home/ToOpay" element={<ToOpay/>}/>
                <Route path="/back/ToOpay" element={<ToOpay/>}/>
            </Routes> 
        </Router>
    </div>
  );
}

export default App;
