import RegisterPage from "./TooManyLogicInJSX/LogicOutsideJSX";
import ShowMessageOnlyWhenOdd from "./ShortCircuit/TernaryOperator";
import ShowMessageOnlyWhenOdd2 from "./ShortCircuit/ShortCircuit";

const App = () =>{
  return(
    <div>
      {/* <RegisterPage/> */}
      <ShowMessageOnlyWhenOdd2/>
    </div>
  )
}

export default App;