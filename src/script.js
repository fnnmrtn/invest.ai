"use strict";

const formContainer = document.getElementById("formContainer");
const ageInput = document.getElementById("ageInput");
const incomeInput = document.getElementById("incomeInput");
const savingsInput = document.getElementById("savingsInput");
const timeRangeInput = document.getElementById("timeRangeInput");
const submitButton = document.getElementById("submitButton");
const resultContainer = document.getElementById("resultContainer");
const resultText = document.getElementById("resultText");
const openaiApiKey = "API_KEY";

const processSubmission = async function () {
  const repsonse = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${openaiApiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: "What is the most popular fruit in India." },
      ],
      temperature: 0.7,
    }),
  });
  const data = await repsonse.json();
  console.log(data);
};

submitButton.addEventListener("click", () => {
  console.log("Submit button clicked!");
  processSubmission();
});
