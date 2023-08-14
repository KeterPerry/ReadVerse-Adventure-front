import { app } from "./app.js";
// import "./db/mongoose.js";

import "./models/user/user.schema.js";
import http from "http";
// import jwt from "jsonwebtoken";

const server = http.createServer(app);
const PORT = process.env.PORT || 3001;
server.listen(PORT, () =>
  console.log(`The server is up and running on port ${PORT}`)
);
