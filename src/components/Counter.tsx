import { BaseSyntheticEvent, useState } from "react";

import { useAppSelector, useAppDispatch } from "../hooks";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../slices/counterSlice";

type Props = {};

const Counter = (props: Props) => {
  // const [counter, setCounter] = useState(0);

  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [temp, setTemp] = useState(count);

  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className="flex flex-row gap-2 items-center justify-center">
        <button
          className="p-2 border-2 rounded-lg"
          onClick={() => dispatch(decrement())}
        >
          decrement
        </button>
        <div>{count}</div>
        <button
          className="p-2 border-2 rounded-lg"
          onClick={() => dispatch(increment())}
        >
          increment
        </button>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <input
          onChange={(e: BaseSyntheticEvent) => setTemp(e.target.value)}
          value={temp}
          className="w-auto border-2 p-2 rounded-lg"
          placeholder="counter"
          type="number"
          min={0}
        />
        <button
          className="p-2 border-2 rounded-lg w-full bg-sky-400 text-white"
          onClick={() => {
            dispatch(incrementByAmount(+temp));
            setTemp(0);
          }}
        >
          Set
        </button>
      </div>
    </div>
  );
};

export default Counter;
