import { prisma } from "../../../database"
import { request } from "../../utils/request";
import { createCarBodyMock, createCarInvalidBodyMock } from "../../__mocks__/car.mocks";


describe("Integration test: create car", () => {

    beforeEach(async () => {
        await prisma.car.deleteMany();
    });

    afterAll(async () => {
        await prisma.car.deleteMany();
    })


    test("should be able to create a car successfully", async () => {

        const data = await request
            .post("/cars")
            .send(createCarBodyMock)
            .expect(201)
            .then((response) => response.body);


        const expectedValue = {
            id: expect.any(String),
            name: createCarBodyMock.name,
            description: createCarBodyMock.description,
            brand: createCarBodyMock.brand,
            year: createCarBodyMock.year,
            km: createCarBodyMock.km
        }

        expect(data).toStrictEqual(expectedValue);

    })


    test("should throw error when try to create a car with invalid body", async () => {
        await request
            .post("/cars")
            .send(createCarInvalidBodyMock)
            .expect(400)
    })

})