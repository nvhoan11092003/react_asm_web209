import { MDBInput, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
interface Product {
    id: number;
    name: string;
    typeId: number;
    price: number;
}

const products: Product[] = [
    { id: 1, name: 'Product Adafadgghahahdadhhhhhhhhhhhhhhhaaaaaaa', typeId: 1, price: 100 },
    { id: 2, name: 'Product B', typeId: 2, price: 200 },
    { id: 3, name: 'Product C', typeId: 1, price: 300 },
    { id: 4, name: 'Product D', typeId: 3, price: 400 },
    { id: 5, name: 'Product E', typeId: 2, price: 500 },
];

interface ProductType {
    id: number;
    name: string;
}

const productTypes: ProductType[] = [
    { id: 1, name: 'Type 1' },
    { id: 2, name: 'Type 2' },
    { id: 3, name: 'Type 3' },
];
interface ProductWithTypeName extends Product {
    typeName: string;
}
const productsWithTypeNames: ProductWithTypeName[] = products.map((product) => {
    const productType = productTypes.find((type) => type.id === product.typeId);
    return {
        ...product,
        typeName: productType?.name || '',
    };
});
const Categories = () => {
    const [selectedType, setSelectedType] = useState('');
    const [selectedPrice, setSelectedPrice] = useState(0);

    const types = Array.from(new Set(productsWithTypeNames.map((product) => product.typeName)));

    const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedType(event.target.value);
    };

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedPrice(parseInt(event.target.value));
    };

    const filteredProducts2 = productsWithTypeNames
        .filter((product) => selectedType === '' || product.typeName === selectedType)
        .filter((product) => selectedPrice === 0 || product.price <= selectedPrice);
    return (
        <div>
            <select value={selectedType} onChange={handleTypeChange}>
                <option value="">All Types</option>
                {types.map((type) => (
                    <option key={type} value={type}>
                        {type}
                    </option>
                ))}
            </select>
            <input type="number" value={selectedPrice} onChange={handlePriceChange} placeholder="Max Price" />
            <ul>
                {filteredProducts2.map((product) => (
                    <li key={product.id}>
                        {product.name} - {product.typeName} - ${product.price}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Categories