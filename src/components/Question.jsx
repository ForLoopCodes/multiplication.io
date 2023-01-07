import React, { useState } from "react";

export default function Question() {
  const arrayOfMultiplyers = [10, 100, 1000];
  const arrayOfDecimals = [0, 1, 2];
  const [streak, setStreak] = useState(0);
  const [num1, setNum1] = useState(
    (
      Math.random() *
      arrayOfMultiplyers[Math.floor(Math.random() * arrayOfMultiplyers.length)]
    ).toFixed(
      arrayOfDecimals[Math.floor(Math.random() * arrayOfDecimals.length)]
    )
  );
  const [num2, setNum2] = useState(
    (
      Math.random() *
      arrayOfMultiplyers[Math.floor(Math.random() * arrayOfMultiplyers.length)]
    ).toFixed(
      arrayOfDecimals[Math.floor(Math.random() * arrayOfDecimals.length)]
    )
  );
  console.log(num1, num2, num1 * num2);
  const createQuestion = () => {
    setNum1(
      (
        Math.random() *
        arrayOfMultiplyers[
          Math.floor(Math.random() * arrayOfMultiplyers.length)
        ]
      ).toFixed(
        arrayOfDecimals[Math.floor(Math.random() * arrayOfDecimals.length)]
      )
    );
    setNum2(
      (
        Math.random() *
        arrayOfMultiplyers[
          Math.floor(Math.random() * arrayOfMultiplyers.length)
        ]
      ).toFixed(
        arrayOfDecimals[Math.floor(Math.random() * arrayOfDecimals.length)]
      )
    );
    console.log(num1, num2, num1 * num2);
  };
  const [time, setTime] = useState(300);
  // setTimeout(() => {
  //   setTime((time) => time - 1);
  //   if (time === 0) {
  //     setTime(300);
  //     createQuestion();
  //     setStreak(0);
  //   }
  // }, 100);
  return (
    <div
      style={{
        fontSize: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span>
        <div
          style={{
            position: "fixed",
            top: "calc(50% - 5rem)",
            right: "calc(50% - 10px)",
            textAlign: "right",
          }}
        >
          {num1.split(".")[0]}
        </div>
        <div
          style={{
            position: "fixed",
            top: "calc(50% - 5rem)",
            left: "calc(50% + 13px)",
            textAlign: "center",
            opacity: "0.8",
          }}
        >
          {num1.split(".")[1] === undefined
            ? ""
            : parseInt(num1.split(".")[1]) === 0
            ? ""
            : "."}
        </div>
        <div
          style={{
            position: "fixed",
            top: "calc(50% - 5rem)",
            left: "calc(50% + 25px)",
            textAlign: "right",
          }}
        >
          {num1.split(".")[1] === undefined
            ? ""
            : parseInt(num1.split(".")[1]) === 0
            ? ""
            : parseInt(num1.split(".")[1]).toString()[1] === "0"
            ? parseInt(num1.split(".")[1]).toString()[0]
            : parseInt(num1.split(".")[1])}
        </div>
      </span>
      <span>
        <div
          style={{
            position: "fixed",
            top: "calc(50% - 2.5rem)",
            right: "calc(50% - 10px)",
            textAlign: "center",
          }}
        >
          {num2.split(".")[0]}
        </div>
        <div
          style={{
            position: "fixed",
            top: "calc(50% - 2.5rem)",
            left: "calc(50% + 13px)",
            textAlign: "left",
            opacity: "0.8",
          }}
        >
          {num2.split(".")[1] === undefined
            ? ""
            : parseInt(num2.split(".")[1]) === 0
            ? ""
            : "."}
        </div>
        <div
          style={{
            position: "fixed",
            top: "calc(50% - 2.5rem)",
            left: "calc(50% + 25px)",
            textAlign: "left",
          }}
        >
          {num2.split(".")[1] === undefined
            ? ""
            : parseInt(num2.split(".")[1]) === 0
            ? ""
            : parseInt(num2.split(".")[1]).toString()[1] === "0"
            ? parseInt(num2.split(".")[1]).toString()[0]
            : parseInt(num2.split(".")[1])}
        </div>
      </span>
      <nav class="line"></nav>
      <input
        type="number"
        placeholder=""
        className="input"
        onKeyUp={(e) => {
          if (
            Math.abs(
              parseFloat(e.target.value) - parseFloat(num1) * parseFloat(num2)
            ) < 0.01
          ) {
            createQuestion();
            e.target.value = "";
            setTime(300);
            setStreak((streak) => streak + 1);
          }
        }}
      />
      <div
        style={{
          position: "fixed",
          top: "calc(50% - 2.35rem)",
          left: "calc(50% - 100px)",
          opacity: "0.6",
        }}
      >
        <svg viewBox="0 0 24 24" width="28px" height="30px" fill="#fff">
          <path d="M18,6h0a1,1,0,0,0-1.414,0L12,10.586,7.414,6A1,1,0,0,0,6,6H6A1,1,0,0,0,6,7.414L10.586,12,6,16.586A1,1,0,0,0,6,18H6a1,1,0,0,0,1.414,0L12,13.414,16.586,18A1,1,0,0,0,18,18h0a1,1,0,0,0,0-1.414L13.414,12,18,7.414A1,1,0,0,0,18,6Z" />
        </svg>
      </div>
      <div style={{ opacity: "0" }}>
        {
          // time + ", " +
          streak
        }
      </div>
    </div>
  );
}
