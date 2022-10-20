import './App.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import getTestingText from "./redux/actions/cart/index"

function App () {

  const dispatch = useDispatch();
  useEffect( () => {
    return () => {
      dispatch( getTestingText() )
    }
  }, [dispatch] )
  const existText = useSelector( ( state ) => state.cart.text )
  console.log( "asda: ", existText )
  return (
    <div className="App">
      { existText ? <h2>{ existText }</h2> : <h2>Nop</h2> }
    </div>
  );
}

export default App;
