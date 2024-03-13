const createCarBodyMock = {
    "name": "Car name",
    "description": "Car description",
    "brand": "Car brand",
    "year": 2023,
    "km": 10000
};

const createCarInvalidBodyMock = {
    "name": "Car name",
    "description": "Car description",
    "brand": "Car brand",
    "year": "2023",
    "km": "5000"
}

const updateCarBodyMock = {
    "name": "Car name updated",
    "description": "Car description updated",
    "brand": "Car brand updated",
    "year": 2022,
    "km": 20000
}

const updateCarInvalidBodyMock = {
    "name": 1234,
    "description": "Car description updated",
    "brand": "Car brand updated",
    "year": 2022,
    "km": 20000

}

const carMock = {
    "id": "fe111d24-1b79-44df-931b-4c9fd5859014",
    "name": "Car name",
    "description": "Car description",
    "brand": "Car brand",
    "year": 2023,
    "km": 10000
}

const carListMock = [
    {
        "id": "fe111d24-1b79-44df-931b-4c9fd5859014",
        "name": "Car name",
        "description": "Car description",
        "brand": "Car brand",
        "year": 2023,
        "km": 10000
    }
]

export { createCarBodyMock, createCarInvalidBodyMock, updateCarBodyMock, updateCarInvalidBodyMock, carMock, carListMock}