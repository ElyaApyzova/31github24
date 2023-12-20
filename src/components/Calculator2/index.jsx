import React, { useState } from "react";

export const Calculator2 = () => {
  //const [input1, setInput1] = useState(1);
  //const [input2, setInput2] = useState(1);
  const [result, setResult] = useState(0);
  const [inputValues, setInputValues] = useState({
    input1: 2,
    input2: 2,
  });

  const inputHandler = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    console.log(inputValues);
  };
  return (
    <div>
      <h1>Calculator2</h1>
      <input
        type="number"
        value={inputValues.input1}
        onChange={inputHandler}
        name="input1"
      />
      <button>+</button>
      <button>-</button>
      <input
        type="number"
        value={inputValues.input2}
        onChange={inputHandler}
        name="input2"
      />
      <h1>sum:{result}</h1>
    </div>
  );
};
export default Calculator2;
