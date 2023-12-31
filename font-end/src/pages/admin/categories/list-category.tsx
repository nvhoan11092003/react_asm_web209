import { Space, Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ICategory } from "../../../models/type";
import { Link } from "react-router-dom";

interface DataType {
  key?: string | number;
  _id?: string;
  name: string;
  image?: string;
}
interface IProps {
  categories: ICategory[];
  onRemove: (id: string) => void;
}

const ListCategory = (props: IProps) => {
  const removeCategory = (id: string) => {
    props.onRemove(id);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "ID",
      dataIndex: "_id",
      key: "_id",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Category Name",
      dataIndex: "name",
      key: "name",
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
              const is = confirm("ban có muốn xóa ko ");
              if (is) {
                removeCategory(record._id);
              }
            }}
          >
            Remove
          </Button>

          <Button type="primary" className="bg-blue-500">
            <Link to={`/admin/categories/${record._id}/update`}>Update</Link>
          </Button>
        </Space>
      ),
    },
  ];

  const data: DataType[] = props.categories.map((item: ICategory) => {
    return {
      key: item._id,
      ...item,
    };
  });

  return (
    <div style={{ marginTop: 100, width: 1200 }}>
      <Button type="primary" className="bg-blue-500" style={{ marginBottom: 30 }}>
        <Link to={"/admin/categories/add"}>Add New Category</Link>
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

export default ListCategory;
