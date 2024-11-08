const mqtt = require("mqtt");
const client = mqtt.connect(
  "mqtts://e9554be9e7ed4e33a0952957c2555844.s1.eu.hivemq.cloud:8883",
  {
    username: "KITTIPIT",
    password: "Aa33XTX7tJeCTap",
  }
);

client.on("connect", () => {
  console.log("Connected to HiveMQ");

  // Subscribe to water pump status
  client.subscribe("nemoproject/waterpump/status", (err) => {
    if (err) {
      console.error("Subscription error:", err);
    } else {
      console.log("Subscribed to nemoproject/waterpump/status");
    }
  });

  // Subscribe to light status
  client.subscribe("nemoproject/light/status", (err) => {
    if (err) {
      console.error("Subscription error:", err);
    } else {
      console.log("Subscribed to nemoproject/light/status");
    }
  });

  // Subscribe to feeding servo status
  client.subscribe("nemoproject/feeding/status", (err) => {
    if (err) {
      console.error("Subscription error:", err);
    } else {
      console.log("Subscribed to nemoproject/feeding/status");
    }
  });
});

client.on("error", (err) => {
  console.error("Connection error:", err);
});

// Publish command to control the water pump
const controlWaterPump = (status) => {
  client.publish("nemoproject/waterpump/control", status);
};

// Publish command to control the light
const controlLight = (status) => {
  client.publish("nemoproject/light/control", status);
};

// Publish command to control the feeding servo motor
const controlFeeding = (action) => {
  client.publish("nemoproject/feeding/control", action);
};

module.exports = { controlWaterPump, controlLight, controlFeeding };
