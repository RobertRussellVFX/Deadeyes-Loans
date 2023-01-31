const Discord = require("discord.js");
const client = new Discord.Client();
const token = "ODk5NzI5ODE2ODU5ODYxMDIy.Gb-515.6NhH-md1dpX5x-YUW1XNjGESv6fnL_vP-HYhIU";

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
