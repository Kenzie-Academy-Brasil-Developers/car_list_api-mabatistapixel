import { prisma } from "../database";
import { TCar, TCarCreate, TCarReturn, TCarUpdate } from "../interfaces";
import { carReturnSchema } from "../schemas";

export class CarService {

    public create = async(payload: TCarCreate): Promise<TCarReturn> => {

        const newCar = await prisma.car.create({data: payload})

        return newCar;
    }

    public findMany = async(): Promise<Array<TCarReturn>> => {

        const findCars = await prisma.car.findMany();

        return findCars;

    }

    public findOne = async(carId: string): Promise<TCarReturn> => {

        const findOne = await prisma.car.findFirst({where: {id: carId}})

        return carReturnSchema.parse(findOne);
    }

    public updateOne = async(carId: string, data: TCarUpdate): Promise<TCar> => {

        const updateOne = await prisma.car.update({where: {id: carId}, data})

        return carReturnSchema.parse(updateOne);
    }

    public deleteOne = async(carId: string): Promise<void> => {

        await prisma.car.delete({where: {id: carId}});

    }

}
