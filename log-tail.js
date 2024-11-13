import { Logtail } from "@logtail/node";
import { config } from "dotenv";

config();

console.log(process.env.LOGGER_TOKEN)
const logtail = new Logtail(process.env.LOGGER_TOKEN);


logtail.error("Something bad happend.");
logtail.info("Log message with structured data.", {
  item: "Orange Soda",
  price: 100.0,
});

// Ensure that all logs are sent to Logtail
logtail.flush();
