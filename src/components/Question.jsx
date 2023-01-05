import React, { useState } from "react";

export default function Question() {
  const arrayOfMultiplyers = [10, 100, 1000];
  const arrayOfDecimals = [0, 1, 2];
  const [num1, setNum1] = useState(
    (Math.random() * arrayOfMultiplyers[Math.floor(Math.random() * 3)]).toFixed(
      arrayOfDecimals[Math.floor(Math.random() * 3)]
    )
  );
  const [num2, setNum2] = useState(
    (Math.random() * arrayOfMultiplyers[Math.floor(Math.random() * 3)]).toFixed(
      arrayOfDecimals[Math.floor(Math.random() * 3)]
    )
  );
  console.log(num1, num2, num1 * num2);
  const [typedAnswer, setTypedAnswer] = useState("");
  const createQuestion = () => {
    setNum1(
      (
        Math.random() * arrayOfMultiplyers[Math.floor(Math.random() * 3)]
      ).toFixed(arrayOfDecimals[Math.floor(Math.random() * 3)])
    );
    setNum2(
      (
        Math.random() * arrayOfMultiplyers[Math.floor(Math.random() * 3)]
      ).toFixed(arrayOfDecimals[Math.floor(Math.random() * 3)])
    );
    console.log(num1, num2, num1 * num2);
  };
  return (
    <div
      style={{
        fontSize: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "jetbrains mono",
      }}
    >
      <span>
        <div
          style={{
            position: "fixed",
            top: "0",
            right: "calc(50% + 0px)",
            textAlign: "right",
          }}
        >
          {num1.split(".")[0]}
        </div>
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "calc(50% + 0px)",
            textAlign: "center",
          }}
        >
          {num1.split(".")[1] !== undefined && "."}
        </div>
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "calc(50% + 15px)",
            textAlign: "right",
          }}
        >
          {num1.split(".")[1]}
        </div>
      </span>
      <span>
        <div
          style={{
            position: "fixed",
            top: "40px",
            right: "calc(50% + 0px)",
            textAlign: "center",
          }}
        >
          {num2.split(".")[0]}
        </div>
        <div
          style={{
            position: "fixed",
            top: "40px",
            left: "calc(50% + 0px)",
            textAlign: "left",
          }}
        >
          {num2.split(".")[1] !== undefined && "."}
        </div>
        <div
          style={{
            position: "fixed",
            top: "40px",
            left: "calc(50% + 15px)",
            textAlign: "left",
          }}
        >
          {num2.split(".")[1]}
        </div>
      </span>
      <input
        type="text"
        style={{
          position: "fixed",
          top: "80px",
          left: "calc(50% - 100px)",
          textAlign: "center",
          width: "200px",
          fontSize: "2rem",
          fontFamily: "jetbrains mono",
        }}
        onKeyUp={(e) => {
          setTypedAnswer(e.target.value);
          if (
            Math.abs(
              parseFloat(e.target.value) - parseFloat(num1) * parseFloat(num2)
            ) < 0.01
          ) {
            createQuestion();
            e.target.value = "";
          }
        }}
      />
    </div>
  );
}
