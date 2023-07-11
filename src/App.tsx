import { useState } from "react";
import "./App.css";
import { Form, List } from "./components";
import { ICar } from "./interfaces/car";
import Table from "./components/Table";

const carData = [
    { id: 1, name: "BMW", price: 200 }, // item
    { id: 2, name: "FORD", price: 300 }, // item
    { id: 3, name: "MERCEDES", price: 400 }, // item
];
const columns = [
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
        render: ({ name }: any) => <a className="text-red-500">{name}</a>,
        header: ({ title }: any) => <div className="bg-green-500">{title}</div>,
    }, // column
    { title: "Price", dataIndex: "price", key: "price", render: ({ price }: any) => price * 2 }, // column
];

function App() {
    const [cars, setCars] = useState<ICar[]>(carData);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const addCar = (car: ICar) => {
        setCars([...cars, car]);
    };

    const removeCar = (id: any) => {
        setCars(cars.filter((car) => car.id !== id));
    };
    return (
        <>
            <div className="w-96 border border-gray-500 px-2 mx-auto">
                <Form onAdd={addCar} />
                <List data={cars} onRemove={removeCar} />

                <hr />
                <h2>Table</h2>
                <Table data={carData} columns={columns} />
            </div>
        </>
    );
}

export default App;
