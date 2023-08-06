import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom'
import { MDBInput, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { useGetFoodsQuery } from "../service/food.service";
// import { Link } from "react-router-dom";
const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(false);
  const { data, error, isLoading } = useGetFoodsQuery()
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

    if (state && filteredProducts?.length !== 0) {
      list.style.display = "block";
    } else list.style.display = "none";
  });
  const close = React.useRef(null);

  const myRef = React.useRef(null);
  const filteredProducts = data?.filter((product: any) => {
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

      <div className=' ' style={{ zIndex: 3, position: "relative", width: "20rem" }}>
        <MDBInput className="" type="text" onClick={() => {
          setCondition(true), setState(false)
        }} value={searchTerm} style={{ zIndex: "6" }}
          onChange={handleSearchInputChange} placeholder="Search..." />
        <MDBListGroup ref={myRef} style={{ display: "none", position: "absolute", backgroundColor: "white", width: "100%" }}>
          {

            filteredProducts?.map((product: any) => {
              if (product == null) {
                return ""
              }
              else return (
                <MDBListGroupItem key={product._id} className='text-truncate
                            ' style={{ width: "20rem" }}>
                  <a href={`/menu/${product._id}`}>{product.name}</a>
                </MDBListGroupItem>
              );
            })}
        </MDBListGroup>
      </div>
    </div>
  );
};

export default Search;
