import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './pages/login';
import Panel from './pages/panel';
import { Switch, Route, Redirect } from 'wouter';
import Register from './pages/register';
import Provider from './context/Provider';
import Cesta from './pages/cesta';



const Main = () => {
  return(
   <Provider>
     <Switch>
      <Route path='/login' component={Login} />
      <Route path='/panel' component={Panel} />
      <Route path='/' component={Register} />
      <Route path='/cesta' component={Cesta} />
      <Redirect to='/login' />
     </Switch>
   </Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
