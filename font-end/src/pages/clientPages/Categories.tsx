import { MDBInput, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";
import { getAllProduct } from '../../api/product';
import { getAllCategory } from '../../api/category';
import { ICategory, IFood, ProductWithTypeName } from "../../models";


const Categories = () => {
    const [selectedType, setSelectedType] = useState('');
    const [selectedPrice, setSelectedPrice] = useState(0);

    const [data2, setData2] = useState<IFood[]>([])

    useEffect(() => {
        const getData = async () => {
            const product = await getAllProduct()
            setData2(product.data)

        }
        getData()

    }, [])



    const types = Array.from(new Set(data2.map((product: any) => product.categoryId.name)));

    const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedType(event.target.value);
    };

    const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedPrice(parseInt(event.target.value));
    };

    const filteredProducts2 = data2
        .filter((product: any) => selectedType === '' || product.categoryId?.name === selectedType)
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
            <div className="container grid" style={{ display: "grid", gridTemplateColumns: "22% 22% 22% 22%", gap: "4%" }} >
                {filteredProducts2.map((item: any) =>
                    <div className="g-col-3" style={{}}>
                        <img src={item.imgUrl[0]} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <b className="text-danger">{item.price}đ</b>
                            <p className="card-text">{item.name}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Categories