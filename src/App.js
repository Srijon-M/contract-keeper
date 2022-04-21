import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import AddContract from './components/AddContract'
import ContractList from './components/ContractList'

import GlobalState from './context/global/GlobalState'
import AlertState from './context/alert/AlertState'

function App() {
  return (
    <GlobalState>
      <AlertState>
        <Router>
          <Route exact path='/' component={ContractList} />
          <Route path='/add' component={AddContract}/>
        </Router>
      </AlertState>
    </GlobalState>   
  )
}

export default App;
