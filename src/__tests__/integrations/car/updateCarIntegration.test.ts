import { prisma } from "../../../database";
import { createCarBodyMock, updateCarBodyMock, updateCarInvalidBodyMock } from "../../__mocks__/car.mocks";
import { request } from "../../utils/request";
import { CarService } from "../../../services";

describe("Integration: update car", () => {

    beforeEach(async () => {
        await prisma.car.deleteMany();
    });

    afterAll(async () => {
        await prisma.car.deleteMany();
    });


    test("Should be able to update car successfully", async () => {

        const carServices = new CarService();

        const prismaMock = await carServices.create(createCarBodyMock);

        const data = await request
            .patch(`/cars/${prismaMock.id}`)
            .send(updateCarBodyMock)
            .expect(200)
            .then((response) => response.body)

        const expectedValue = {
            id: prismaMock.id,
            name: updateCarBodyMock.name,
            description: updateCarBodyMock.description,
            brand: updateCarBodyMock.brand,
            year: updateCarBodyMock.year,
            km: updateCarBodyMock.km
        }

        expect(data).toStrictEqual(expectedValue);

    })

    test("should throw error when try to update a car with invalid body", async () => {

        const carServices = new CarService();

        const prismaMock = await carServices.create(createCarBodyMock);

        const data = await request
        .patch(`/cars/${prismaMock.id}`)
        .send(updateCarInvalidBodyMock)
        .expect(400)
        .then((response) => response.body)
    })

    test("should throw error when try to update a car with invalid id", async () => {

        const carServices = new CarService();

        const prismaMock = await carServices.create(createCarBodyMock);

        const data = await request
        .patch(`/cars/${prismaMock.name}`)
        .send(updateCarBodyMock)
        .expect(404)
        .then((response) => response.body)

        
        const expectedError = { message: 'Car not found.' };

        expect(data).toStrictEqual(expectedError);
    })

})