const mqtt = require("mqtt");
const client = mqtt.connect("mqtts://e9554be9e7ed4e33a0952957c2555844.s1.eu.hivemq.cloud:8883", {
  username: "KITTIPIT",
  password: "Aa33XTX7tJeCTap",
});

client.on("connect", () => {
  console.log("Connected to HiveMQ");

  // Subscribe to water pump status
  client.subscribe("plantgrowtech/waterpump/status", (err) => {
    if (err) {
      console.error("Subscription error:", err);
    } else {
      console.log("Subscribed to plantgrowtech/waterpump/status");
    }
  });

  // Subscribe to light status
  client.subscribe("plantgrowtech/light/status", (err) => {
    if (err) {
      console.error("Subscription error:", err);
    } else {
      console.log("Subscribed to plantgrowtech/light/status");
    }
  });

  // Subscribe to feeding servo status
  client.subscribe("plantgrowtech/feeding/status", (err) => {
    if (err) {
      console.error("Subscription error:", err);
    } else {
      console.log("Subscribed to plantgrowtech/feeding/status");
    }
  });
});

client.on("error", (err) => {
  console.error("Connection error:", err);
});

// Publish command to control the water pump
const controlWaterPump = (status) => {
  client.publish("plantgrowtech/waterpump/control", status);
};

// Publish command to control the light
const controlLight = (status) => {
  client.publish("plantgrowtech/light/control", status);
};

// Publish command to control the feeding servo motor
const controlFeeding = (action) => {
  client.publish("plantgrowtech/feeding/control", action);
};

module.exports = { controlWaterPump, controlLight, controlFeeding };
