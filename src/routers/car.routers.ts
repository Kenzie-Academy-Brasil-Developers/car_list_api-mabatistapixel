import { Router } from "express";
import { ensure } from "../middlewares";
import { carCreateSchema, carReturnSchema, carUpdateSchema } from "../schemas";
import { CarController } from "../controller";

export const carRouter = Router();

const controller = new CarController();

carRouter.post("/", ensure.validBody(carCreateSchema), controller.create);

carRouter.get("/", controller.findMany);

carRouter.get("/:id", ensure.verifyCarIdExists, controller.findOne );

carRouter.patch("/:id", ensure.validBody(carUpdateSchema), ensure.verifyCarIdExists, controller.updateOne);

carRouter.delete("/:id", ensure.verifyCarIdExists, controller.delete);

