import express from "express";
const app = express();


import employeeRouter from "./routes/EmployeeRoutes.js";


app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.originalUrl);
  next();
});

app.route("/").get((req, res) => {
  res.send("Hello employees!");
});

app.use("/employees", employeeRouter);



app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal server error");
});

export default app;