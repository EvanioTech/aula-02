"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routes_1 = require("./routes");
const app = express();
app.get("/", routes_1.createCourse);
app.listen(3333); // localhost:3333
