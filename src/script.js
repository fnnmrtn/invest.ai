"use strict";

const formContainer = document.getElementById("formContainer");
const ageInput = document.getElementById("ageInput");
const incomeInput = document.getElementById("incomeInput");
const savingsInput = document.getElementById("savingsInput");
const timeRangeInput = document.getElementById("timeRangeInput");
const submitButton = document.getElementById("submitButton");
const resultContainer = document.getElementById("resultContainer");
const resultText = document.getElementById("resultText");

// const openaiApiKey = process.env["API_KEY"];

const processSubmission = async function () {
  //   const repsonse = await fetch("https://api.openai.com/v1/chat/completions", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: ⁠ Bearer ${openaiApiKey}"⁠,
  //     },
  //     body: json.stringify({
  //       model: "gpt-4o-mini",
  //       messages: [{ role: "user", content: "Say this is a test!" }],
  //       temperature: 0.7,
  //     }),
  //   });
  //   const data = await repsonse.json();
};

submitButton.addEventListener("click", () => {
  console.log("test");
});
