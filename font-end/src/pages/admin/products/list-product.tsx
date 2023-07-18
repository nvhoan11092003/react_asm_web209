import { Space, Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IProduct } from "../../../models/type";
import { Link } from "react-router-dom";

interface DataType {
  key: string | number;
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}
interface IProps {
  products: IProduct[];
  onRemove: (id: string) => void;
}

const ListProduct = (props: IProps) => {
  console.log(props.products);
  const removeProduct = (id: string) => {
    props.onRemove(id);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Product Image",
      dataIndex: "imgUrl",
      key: "imgUrl",
      render: (imgLink) => <img src={imgLink} alt="" style={{ width: 100 }} />,
    },
    {
      title: "Product Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Product Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Origin Price",
      dataIndex: "originPrice",
      key: "originPrice",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "ProcessingInstructions",
      dataIndex: "processingInstructions",
      key: "processingInstructions",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "StorageInstructions",
      dataIndex: "storageInstructions",
      key: "storageInstructions",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Button
            type="primary"
            style={{ backgroundColor: "red" }}
            onClick={() => {
              const delProduct = confirm("Bạn có muốn xoá không?");
              if (delProduct) {
                removeProduct(record._id);
              }
            }}
          >
            Remove
          </Button>
          <Button type="primary">
            <Link to={`/admin/products/${record._id}/update`}>Update</Link>
          </Button>
        </Space>
      ),
    },
  ];

  const data: DataType[] = props.products.map((item: IProduct) => {
    return {
      key: item._id,
      ...item,
    };
  });

  return (
    <div style={{ marginTop: 100, width: 1200 }}>
      <Button type="primary" style={{ marginBottom: 30 }}>
        <Link to={"/admin/products/add"}>Add New Product</Link>
      </Button>
      <Table
        style={{ backgroundColor: "white" }}
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default ListProduct;
