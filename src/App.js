import logo from './logo.svg';
import './App.css';
import UseState from './Components/UseState/UseState';
import UseReducer from './Components/UseReducer/UseReducer';
import { ObjectUseState } from './Components/ImmutableState/ObjectUseState';
import { ArrayUseState } from './Components/ImmutableState/ArrayUseState';
import ParentOne from './Components/Optimization/ParentOne';
import { ChildOne } from './Components/Optimization/ChildOne';
import ParentTwo from './Components/Optimization/ParentTwo';
import ParentThree from './Components/IncorrectOptimizations/ParentThree';
import ParentFour from './Components/IncorrectOptimizations/ParentFour';
import { ContextParent } from './Components/Context/ContextParent';
import { ChildA } from './Components/Context/ContextChildren';

function App() {
  return (
    <div className="App">
      <h1>Learning React Render</h1>
      {/* <UseState/> */}
      {/* <UseReducer /> */}
      {/* <ObjectUseState /> */}
      {/* <ArrayUseState /> */}
      {/* <ParentOne>
        <ChildOne />
      </ParentOne> */}
      {/* <ParentTwo /> */}
      {/* <ParentThree /> */}
      {/* <ParentFour /> */}
      {/* <ContextParent /> */}
      <ContextParent>
        <ChildA />
      </ContextParent>
    </div>
  );
}

export default App;
