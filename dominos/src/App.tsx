import { useState } from "react";
import {
  countDoubleNumber,
  flipNumber,
  removeDuplicate,
  removeTotalNumber,
  sortAsc,
  sortDesc,
} from "./utils";

function App() {
  const [inputNumber, setInputNumber] = useState<number | "">("");
  const originVal = [
    [6, 1],
    [4, 3],
    [5, 1],
    [3, 4],
    [1, 1],
    [3, 4],
    [1, 2],
    [2, 2],
  ];
  const [val, setVal] = useState<number[][]>(originVal);
  const [notMatch, setNotMatch] = useState<boolean>(false);

  const renderDots = (number: number) => {
    const dotPositions = [
      [],
      ["center"],
      ["top-left", "bottom-right"],
      ["top-left", "center", "bottom-right"],
      ["top-left", "top-right", "bottom-left", "bottom-right"],
      ["top-left", "top-right", "center", "bottom-left", "bottom-right"],
      [
        "top-left",
        "top-right",
        "center-left",
        "center-right",
        "bottom-left",
        "bottom-right",
      ],
    ];

    return (
      <div className="relative w-full h-full flex flex-wrap justify-center items-center">
        {dotPositions[number].map((position, index) => (
          <div
            key={index}
            className={`absolute w-2 h-2 bg-black rounded-full ${positionClass(
              position as
                | "center"
                | "top-left"
                | "bottom-right"
                | "top-right"
                | "bottom-left"
                | "center-left"
                | "center-right"
            )}`}
          ></div>
        ))}
      </div>
    );
  };

  const positionClass = (
    position:
      | "center"
      | "top-left"
      | "top-right"
      | "bottom-left"
      | "bottom-right"
      | "center-left"
      | "center-right"
  ) => {
    const classes = {
      center: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
      "top-left": "top-1 left-1",
      "top-right": "top-1 right-1",
      "bottom-left": "bottom-1 left-1",
      "bottom-right": "bottom-1 right-1",
      "center-left": "top-1/2 left-1 transform -translate-y-1/2",
      "center-right": "top-1/2 right-1 transform -translate-y-1/2",
    };
    return classes[position];
  };

  return (
    <div className="container mx-auto my-20 p-20 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {val.map((item, idx) => {
          const isDouble = item[0] === item[1];
          return (
            <div
              className={`flex flex-col w-20 h-40 border rounded-lg shadow items-center justify-between p-2 relative ${
                isDouble ? "bg-red-500" : "bg-white"
              }`}
              key={idx}
            >
              <div className="flex items-center justify-center w-full h-full border-b border-gray-300 relative">
                {renderDots(item[0])}
              </div>
              <div className="flex items-center justify-center w-full h-full relative">
                {renderDots(item[1])}
              </div>
            </div>
          );
        })}
      </div>

      {notMatch && (
        <p className="text-red-500 text-center font-medium mb-4">
          Input not match with domino total sum
        </p>
      )}

      <div className="text-lg font-medium mb-6">
        Count Double Number:{" "}
        <span className="font-bold">{countDoubleNumber(val)}</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600"
          onClick={() => sortAsc(val, setVal)}
        >
          Asc
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600"
          onClick={() => sortDesc(val, setVal)}
        >
          Desc
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600"
          onClick={() => removeDuplicate(val, setVal)}
        >
          Remove Duplicate
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600"
          onClick={() => flipNumber(val, setVal)}
        >
          Flip
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600"
          onClick={() => setVal(originVal)}
        >
          Reset
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-4">
        <input
          type="number"
          placeholder="Input Number"
          min={0}
          value={inputNumber}
          onChange={(e) => setInputNumber(Number(e.target.value))}
          className="border border-gray-300 rounded-lg p-2 w-full md:w-auto"
        />
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600"
          onClick={() =>
            removeTotalNumber(inputNumber, val, setVal, setNotMatch)
          }
        >
          Remove
        </button>
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-lg shadow hover:bg-red-600"
          onClick={() =>
            window.location.reload()
          }
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
