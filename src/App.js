import React, {useState} from 'react';
import Home from './pages/landingpage'
import Login from './pages/loginpage'





function App() {
  const [state, setState] = useState(
    {
      page: 'Home'
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
