import { prisma } from "../../../database";
import { createCarBodyMock } from "../../__mocks__/car.mocks";
import { request } from "../../utils/request";
import { CarService } from "../../../services";

describe("Integration test: delete car", () => {

    beforeEach(async () => {
        await prisma.car.deleteMany();
    });

    afterAll(async () => {
        await prisma.car.deleteMany();
    })

    test("should be able to delete a car successfully", async () => {

        const carServices = new CarService();

        const prismaMock = await carServices.create(createCarBodyMock);

        const data = await request 
        .delete(`/cars/${prismaMock.id}`)
        .expect(204)
    })

    test("should throw error when try to delete a car with invalid id", async () => {

        const carServices = new CarService();

        const prismaMock = await carServices.create(createCarBodyMock);

        const data = await request 
        .delete(`/cars/${prismaMock.year}`)
        .expect(404)
        .then((response) => response.body)


        const expectedError = { message: 'Car not found.' };

        expect(data).toStrictEqual(expectedError);
    })

    
})