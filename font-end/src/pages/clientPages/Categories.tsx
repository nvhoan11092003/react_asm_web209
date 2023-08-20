import { MDBInput } from "mdb-react-ui-kit";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetFoodsQuery } from "../service/food.service";
import LoadingSkeleton from "../../components/Skeleton";

const Categories = () => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(0);

  const { data, error, isLoading: isLoadingFecth } = useGetFoodsQuery();

  if (error) {
    console.error(error);
  }
  const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  })
  const types = Array.from(
    new Set(data?.map((product: any) => product.categoryId.name))
  );

  const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPrice(parseInt(event.target.value));

  };

  const filteredProducts2 = data
    ?.filter(
      (product: any) =>
        selectedType === "" || product.categoryId?.name === selectedType
    )
    .filter((product) => selectedPrice === 0 || product.price <= selectedPrice);
  return (
    <div>

      <div className="container d-flex flex-row-reverse my-5">
        <select style={{ width: "100px" }} className="browser-default custom-select" value={selectedType} onChange={handleTypeChange}>
          <option value="">All Types</option>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>

        <MDBInput

          style={{ width: "100px" }}
          type="number"
          value={selectedPrice}
          onChange={handlePriceChange}
          placeholder="Max Price"
          required
        />
      </div>
      <div
        className="container grid"
        style={{
          display: "grid",
          gridTemplateColumns: "22% 22% 22% 22%",
          gap: "4%",
        }}
      >
        {isLoadingFecth && <LoadingSkeleton />}
        {filteredProducts2?.map((item: any) => (
          <Link to={item._id} key={item._id}>
            <div className="g-col-3" style={{}}>
              <img src={item.imgUrl[0]} className="card-img-top" alt="..." />
              <div className="card-body">
                <b className="text-danger">{VND.format(item.price)}</b>
                <p className="card-text">{item.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Categories;
