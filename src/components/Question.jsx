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
        fontSize: "4rem",
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
            top: "calc(50% - 7rem)",
            right: "calc(50% + 0px)",
            textAlign: "right",
          }}
        >
          {num1.split(".")[0]}
        </div>
        <div
          style={{
            position: "fixed",
            top: "calc(50% - 7rem)",
            left: "calc(50% - 12px)",
            textAlign: "center",
            scale: "0.6",
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
            top: "calc(50% - 7rem)",
            left: "calc(50% + 15px)",
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
            right: "calc(50% + 0px)",
            textAlign: "center",
          }}
        >
          {num2.split(".")[0]}
        </div>
        <div
          style={{
            position: "fixed",
            top: "calc(50% - 2.5rem)",
            left: "calc(50% - 12px)",
            textAlign: "left",
            scale: "0.6",
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
            left: "calc(50% + 15px)",
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
      <input
        type="text"
        style={{
          position: "fixed",
          top: "calc(50% + 3rem)",
          left: "calc(50% - 200px)",
          textAlign: "center",
          width: "400px",
          fontSize: "4rem",
          outline: "none",
          border: "solid 1px #000",
          borderRadius: "5px",
        }}
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
          top: "calc(50% - 1.5rem)",
          left: "calc(50% - 200px)",
          fontFamily: "helvetica now display",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        x
      </div>
      <div>
        {
          // time + ", " +
          streak
        }
      </div>
    </div>
  );
}
