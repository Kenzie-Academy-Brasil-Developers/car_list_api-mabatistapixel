import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import { prisma } from "../database";
import { AppError } from "../errors";

class EnsureMiddleware {

    public validBody = (schema: AnyZodObject) => (req: Request, _: Response, next: NextFunction) => {
        req.body = schema.parse(req.body);

        return next();
    }

    public verifyCarIdExists = async (req: Request, res: Response, next: NextFunction) => {

        const carId = req.params.id;

        const foundCar = await prisma.car.findFirst({where: {id: carId}})

        if(!foundCar){
            throw new AppError("Car not found.", 404);
        }

        return next();
    }

};

export const ensure = new EnsureMiddleware();



