import React, { useEffect, useState } from "react";
import { getAllProduct } from "../api/product";
import { getAllCategory } from "../api/category";
import { IFood, ProductWithTypeName, ICategory } from "../models";
import ReactDOM from "react-dom";
import { MDBInput, MDBListGroup, MDBListGroupItem } from "mdb-react-ui-kit";
import { IProduct } from "../models/type";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(false);

  // const [category, setCategory] = useState<ICategory[]>([]);

  const [data2, setData2] = useState<IProduct[]>([]);

  useEffect(() => {
    const getData = async () => {
      const product = await getAllProduct();
      setData2(product.data);
    };
    getData();
    // const getCate = async () => {
    //   const cate = await getAllCategory()
    //   setCategory(cate.data)

    // }
    // getCate()
  }, []);

  // const productsWithTypeNames: ProductWithTypeName[] = data2.map((product) => {
  //   const productType = category.find((type) => type.id === product.categoryId);
  //   return {
  //     ...product,
  //     typeName: productType?.name || "",
  //   };
  // });

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchTerm(event.target.value);
    if (event.target.value !== "") {
      setState(true);
    } else {
      setState(false);
    }
  };
  const [condition, setCondition] = useState(false);
  useEffect(() => {
    const list = ReactDOM.findDOMNode(myRef.current) as HTMLElement;
    const dark = ReactDOM.findDOMNode(close.current) as HTMLElement;
    if (condition) {
      dark.style.display = "block";
    } else dark.style.display = "none";

    if (state && filteredProducts.length !== 0) {
      list.style.display = "block";
    } else list.style.display = "none";
  });
  const close = React.useRef(null);

  const myRef = React.useRef(null);
  const filteredProducts = data2.filter((product: any) => {
    if (product) {
      return (
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.categoryId.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  });
  console.log(filteredProducts);

  return (
    <div>
      <div
        ref={close}
        onClick={() => {
          setState(false), setCondition(false);
        }}
        style={{
          zIndex: "1",
          display: "none",
          opacity: "0.5",
          position: "fixed",
          width: "100%",
          top: "0",
          bottom: "0",
          left: "0",
          right: "0",
          backgroundColor: "gray",
        }}
      ></div>

      <div
        className=" "
        style={{ zIndex: 3, position: "relative", width: "20rem" }}
      >
        <MDBInput
          className=""
          type="text"
          onClick={() => {
            setCondition(true), setState(false);
          }}
          value={searchTerm}
          style={{ zIndex: "6" }}
          onChange={handleSearchInputChange}
          placeholder="Search..."
        />
        <MDBListGroup
          ref={myRef}
          style={{
            display: "none",
            position: "absolute",
            backgroundColor: "white",
            width: "100%",
          }}
        >
          {filteredProducts.map((product) => {
            if (product == null) {
              return "";
            } else
              return (
                <MDBListGroupItem
                  key={product._id}
                  className="text-truncate
                            "
                  style={{ width: "20rem" }}
                >
                  {product.name}
                </MDBListGroupItem>
              );
          })}
        </MDBListGroup>
      </div>
    </div>
  );
};

export default Search;
