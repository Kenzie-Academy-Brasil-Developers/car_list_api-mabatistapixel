import { prisma } from "../../database"
import { CarService } from "../../services";
import { createCarBodyMock } from "../__mocks__/car.mocks";


describe("Unit test: delete car", () => {

    beforeEach(async () => {
        await prisma.car.deleteMany();
    })

    afterAll(async () => {
        await prisma.car.deleteMany();
    })

    test("delete car should work correctly", async () => {

        const carServices = new CarService();

        const car = await carServices.create(createCarBodyMock);

        const id = car.id;

        const data = await carServices.deleteOne(id);

        expect(data).toBeUndefined();

    })
})