import app from "./app";
import { startConnection } from "./database";

function main() {
  startConnection();
  app.listen(app.get("port"));
  console.log(`Server on port: ${app.get("port")}`);
}

main();
