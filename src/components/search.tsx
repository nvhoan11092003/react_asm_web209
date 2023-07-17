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



function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [state, setState] = useState(false)

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        if (event.target.value !== "") {
            setState(true)
        }
        else {
            setState(false)
        }
    };
    const [condition, setCondition] = useState(false)
    useEffect(() => {

        const list = ReactDOM.findDOMNode(myRef.current) as HTMLElement
        const dark = ReactDOM.findDOMNode(close.current) as HTMLElement
        if (condition) {
            dark.style.display = "block"

        }
        else
            dark.style.display = "none"

        if (state && filteredProducts.length !== 0) {
            list.style.display = "block"
        }
        else list.style.display = "none"

    })
    const close = React.useRef(null);




    const myRef = React.useRef(null);
    const filteredProducts = productsWithTypeNames.filter((product) => {
        if (product) {
            return product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.typeName.toLowerCase().includes(searchTerm.toLowerCase());

        }

    });


    return (
        <div>
            <div ref={close} onClick={() => { setState(false), setCondition(false) }} style={{ zIndex: "1", display: "none", opacity: "0.5", position: "fixed", width: "100%", top: "0", bottom: "0", left: "0", right: "0", backgroundColor: "gray" }}></div>

            <div className=' ' style={{ zIndex: 3, position: "relative", width: "20rem" }}>
                <MDBInput className="" type="text" onClick={() => {
                    setCondition(true), setState(false)
                }} value={searchTerm} style={{ zIndex: "6" }}
                    onChange={handleSearchInputChange} placeholder="Search..." />
                <MDBListGroup ref={myRef} style={{ display: "none", position: "absolute", backgroundColor: "white", width: "100%" }}>
                    {

                        filteredProducts.map((product) => {
                            if (product == null) {
                                return ""
                            }
                            else return (
                                <MDBListGroupItem key={product.id} className='text-truncate
                            ' style={{ width: "20rem" }}>
                                    {product.name}
                                </MDBListGroupItem>
                            )
                        })

                    }

                </MDBListGroup>



            </div >
        </div >
    );
}

export default SearchBar;