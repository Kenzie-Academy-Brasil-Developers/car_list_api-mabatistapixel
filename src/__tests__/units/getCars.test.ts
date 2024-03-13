import { prisma } from "../../database"
import { CarService } from "../../services";
import { createCarBodyMock, updateCarBodyMock, carListMock, carMock } from "../__mocks__/car.mocks";

describe("Unit test: get cars", () => {

    
    beforeEach(async () => {
        await prisma.car.deleteMany();
    })

    afterAll(async () => {
        await prisma.car.deleteMany();
    })

    test("read cars should work correctly", async () => {

        const carServices = new CarService();

        const prismaMock = await carServices.create(createCarBodyMock);

        const data = await carServices.findMany();


        expect(data[0].id).toBeDefined();
        expect(data[0].name).toBe(createCarBodyMock.name);
        expect(data[0].description).toBe(createCarBodyMock.description);
        expect(data[0].brand).toBe(createCarBodyMock.brand);
        expect(data[0].year).toBe(createCarBodyMock.year);
        expect(data[0].km).toBe(createCarBodyMock.km);
        expect(data).toHaveLength(1);
    })

    test("should be able to retrieve a car correctly", async () => {

        const carServices = new CarService();

        const prismaMock = await carServices.create(createCarBodyMock);

        const data = await carServices.findOne(prismaMock.id);

        expect(data.name).toBe(createCarBodyMock.name);
        expect(data.description).toBe(createCarBodyMock.description);
        expect(data.brand).toBe(createCarBodyMock.brand);
        expect(data.year).toBe(createCarBodyMock.year);
        expect(data.km).toBe(createCarBodyMock.km);
    
    })

} )