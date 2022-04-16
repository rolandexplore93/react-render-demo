import logo from './logo.svg';
import './App.css';
import UseState from './Components/UseState/UseState';
import UseReducer from './Components/UseReducer/UseReducer';
import { ObjectUseState } from './Components/ImmutableState/ObjectUseState';

function App() {
  return (
    <div className="App">
      <h1>Learning React Render</h1>
      {/* <UseState/> */}
      {/* <UseReducer /> */}
      <ObjectUseState />
    </div>
  );
}

export default App;
