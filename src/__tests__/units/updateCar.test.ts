import { prisma } from "../../database"
import { CarService } from "../../services";
import { createCarBodyMock, updateCarBodyMock } from "../__mocks__/car.mocks";


describe("Unit test: update car", () => {

    beforeEach(async () => {
        await prisma.car.deleteMany();
    })

    afterAll(async () => {
        await prisma.car.deleteMany();
    })

    test("update car should work correctly", async () => {

        const carServices = new CarService();

        const car = await carServices.create(createCarBodyMock);

        const id = car.id;

        const data = await carServices.updateOne(id, updateCarBodyMock);

        expect(data.id).toBeDefined();
        expect(data.name).toBe(updateCarBodyMock.name);
        expect(data.description).toBe(updateCarBodyMock.description);
        expect(data.brand).toBe(updateCarBodyMock.brand);
        expect(data.year).toBe(updateCarBodyMock.year);
        expect(data.km).toBe(updateCarBodyMock.km);
       
    })
})