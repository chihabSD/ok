const express = require("express");
const app = express();
const amqp = require("amqplib/callback_api");

app.get("/login", (req, res) => {
  res.json({ user: "Chihabeddine ahmed" });
});

// amqp.connect(process.env.RABBITMQ_URL, (connError, connection) => {
//   if (connError) {
//     throw connError;
//   }
//   // Step 2: Create Channel
//   connection.createChannel((channelError, channel) => {
//     if (channelError) {
//       throw channelError;
//     }
//     // Step 3: Assert Queue
//     const QUEUE = "session";
//     channel.assertQueue(QUEUE);
//     // Step 4: Receive Messages

//     // const QUEUE = "codingtest";
//     channel.assertQueue(QUEUE);
//     // Step 4: Send message to queue
//     channel.sendToQueue(
//       QUEUE,
//       Buffer.from(JSON.stringify({ user: " chihadededines" }))
//     );
//     // channel.sendToQueue(QUEUE, Buffer.from("hello from its coding time"));
//     console.log(`Message send ${QUEUE}`);

//     channel.consume(
//       QUEUE,
//       (msg) => {
//         console.log(`Message received: ${msg.content.toString()}`);
//       },
//       {
//         noAck: true,
//       }
//     );
//   });
// });

app.get("/", function (req, res) {
  // Step 1: Create Connection

  res.send({ test: process.env.RABBITMQ_URL });
});

app.listen(5000, function () {
  console.log("Starting hello-world server...");
});
