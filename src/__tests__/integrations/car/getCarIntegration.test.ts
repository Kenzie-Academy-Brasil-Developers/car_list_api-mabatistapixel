import { prisma } from "../../../database";
import { createCarBodyMock } from "../../__mocks__/car.mocks";
import { request } from "../../utils/request";
import { CarService } from "../../../services";

describe("Integration test: list cars", () => {


    beforeEach(async () => {
        await prisma.car.deleteMany();

    })

    afterAll(async () => {
        await prisma.car.deleteMany();
    });

    test("Should be able to list cars successfully", async () => {

        const carServices = new CarService();

        const prismaMock = await carServices.create(createCarBodyMock);

        const data = await request
            .get("/cars")
            .expect(200)
            .then((response) => response.body)

        const expectedValue = [
            {
                id: expect.any(String),
                name: createCarBodyMock.name,
                description: createCarBodyMock.description,
                brand: createCarBodyMock.brand,
                year: createCarBodyMock.year,
                km: createCarBodyMock.km
            }
        ]

        expect(data).toHaveLength(1)
        expect(data).toStrictEqual(expectedValue)

    })

    test("Should be able to retrieve a car by id successfully", async () => {

        const carServices = new CarService();

        const prismaMock = await carServices.create(createCarBodyMock);

        const data = await request
            .get(`/cars/${prismaMock.id}`)
            .expect(200)
            .then((response) => response.body)

        const expectedValue =
        {
            id: expect.any(String),
            name: createCarBodyMock.name,
            description: createCarBodyMock.description,
            brand: createCarBodyMock.brand,
            year: createCarBodyMock.year,
            km: createCarBodyMock.km
        }

        expect(data).toStrictEqual(expectedValue);
    })

    test("Should throw error when try to retrieve a car with inexistent id", async () => {


        const carServices = new CarService();

        const prismaMock = await carServices.create(createCarBodyMock);

        const data = await request
            .get(`/cars/${prismaMock.name}`)
            .expect(404)
            .then((response) => response.body);


        const expectedError = { message: 'Car not found.' };

        expect(data).toStrictEqual(expectedError);

    })

})