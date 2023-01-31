const Discord = require("discord.js");
const client = new Discord.Client();
const token = "./config.json";

client.on("ready", () => {
  console.log(`Bot is ready, logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
  if (message.content === "ping") {
    message.reply("pong");
  }
});

client.login(token);

document.getElementById("submitLoanRequest").addEventListener("click", function () {
  const name = document.getElementById("name").value;
  const loanAmount = document.getElementById("loanAmount").value;
  const payDate = document.getElementById("payDate").value;

  const channel = client.channels.cache.get("836683398210388041");

  channel.send(
    `A new loan request has been submitted: \n\nName: ${name}\nLoan Amount: ${loanAmount}\nExpected Loan Pay Date: ${payDate}`
  );
});
