import { prisma } from "../../database"
import { CarService } from "../../services";
import { createCarBodyMock} from "../__mocks__/car.mocks";

describe("Unit test: create car", () => {

    beforeEach(async () => {
        await prisma.car.deleteMany();
    })

    afterAll(async () => {
        await prisma.car.deleteMany();
    })


    test("create car should work correctly", async () => {

        const carServices = new CarService();

        const data = await carServices.create(createCarBodyMock);

        expect(data.id).toBeDefined();
        expect(data.name).toBe(createCarBodyMock.name);
        expect(data.description).toBe(createCarBodyMock.description);
        expect(data.brand).toBe(createCarBodyMock.brand);
        expect(data.year).toBe(createCarBodyMock.year);
        expect(data.km).toBe(createCarBodyMock.km);

    })

})