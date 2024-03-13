import 'express-async-errors'
import express, { Application, json } from "express";
import { handleErrors } from "./middlewares";
import { carRouter } from "./routers/car.routers";
import helmet from "helmet";

const app: Application = express();

export default app;

app.use(helmet());
app.use(json());

app.use("/cars", carRouter);


app.use(handleErrors);

