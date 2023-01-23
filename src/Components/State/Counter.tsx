import { stat } from "fs";
import React, { useReducer } from "react";
type CouterState = {
  count: number;
};

type Update={
    type: "inc" | "dec";
  payload: number;

}
type Reset={
    type: "res";
  payload?: number;

}
type CounterAction = Update|Reset
const initialState = { count: 0 };

function reducer(state: CouterState, action: CounterAction) {
  switch (action.type) {
    case "inc":
      return {
        count: state.count + action.payload,
      };
    case "dec":
      return {
        count: state.count === 0 ? state.count : state.count - action.payload,
      };
    case "res":
      return initialState;
    default:
      return state;
  }
}
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <h1>Count : {state.count}</h1>
      <button onClick={() => dispatch({ type: "inc", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "dec", payload: 10 })}>
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: "res"})}>
        reset
      </button>
    </>
  );
};

export default Counter;
