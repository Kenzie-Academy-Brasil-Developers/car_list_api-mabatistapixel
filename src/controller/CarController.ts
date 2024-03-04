import { Request, Response } from "express";
import { CarService } from "../services/CarService";

export class CarController {

    private carService: CarService = new CarService();

    public create = async (req: Request, res: Response): Promise<Response> => {

        const newCar = await this.carService.create(req.body);

        return res.status(201).json(newCar)
    }

    public findMany = async (req: Request, res: Response): Promise<Response> => {

        const findCars = await this.carService.findMany();

        return res.status(200).json(findCars);
    }

    public findOne = async (req: Request, res: Response): Promise<Response> => {

        const carId = req.params.id;

        const foundCar = await this.carService.findOne(carId);

        return res.status(200).json(foundCar);

    }

    public updateOne = async (req: Request, res: Response): Promise<Response> => {

        const carId = req.params.id;
        const body = req.body;

        const updateCar = await this.carService.updateOne(carId, body);

        return res.status(200).json(updateCar);

    }

    public delete = async (req: Request, res: Response): Promise<Response> => {

        const carId = req.params.id;

        await this.carService.deleteOne(carId);

        return res.status(204).json();

    }


}