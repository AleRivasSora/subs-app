import { Header } from './componentes/Header';
import './App.css';
import {FormAddMoney} from './componentes/FormAddMoney';
import { useState } from 'react';
import { MainControl } from './componentes/MainControl';

function App() {
  const [count,setCount] = useState(0);

  const [IsValid,setIsValid] = useState(false);

  const component = IsValid
      ? <MainControl count={count} />
      : <FormAddMoney setCount={setCount} setIsValid={setIsValid} />

  return (
    <div className="App">

      <Header />
      {component}
    </div>
  );
}

export default App;
