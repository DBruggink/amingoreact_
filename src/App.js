import React, {useState} from 'react';
import Home from './pages/landingpage'
import Login from './pages/login'





function App() {
  const [state, setState] = useState(
    {
      page: 'Login'
    }
  )
  return (
    <div className='App'>
    {state.page==='Home' && <Home/>}
    {state.page==='Login' && <Login/>}

    </div>
  );
}

export default App;
