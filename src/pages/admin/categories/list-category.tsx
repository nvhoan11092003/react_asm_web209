import { Space, Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ICategory } from "../../../types/category";
import { Link } from "react-router-dom";

interface DataType {
  key: string | number;
  id: number;
  name: string;
  image: string;
}
interface IProps {
  categories: ICategory[];
  onRemove: (id: number) => void;
}

const ListCategory = (props: IProps) => {
  const removeCategory = (id: number) => {
    props.onRemove(id);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Category Id",
      dataIndex: "id",
      key: "id",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Category Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Category Image",
      dataIndex: "image",
      key: "image",
      render: (imgLink) => <img src={imgLink} alt="" style={{ width: 200 }} />,
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Button
            type="primary"
            style={{ backgroundColor: "red" }}
            onClick={() => removeCategory(record.id)}
          >
            Remove
          </Button>
          <Button type="primary">
            <Link to={`/admin/categories/${record.id}/update`}>Update</Link>
          </Button>
        </Space>
      ),
    },
  ];

  const data: DataType[] = props.categories.map((item: ICategory) => {
    return {
      key: item.id,
      ...item,
    };
  });

  return (
    <div style={{ marginTop: 100, width: 1200 }}>
      <Button type="primary" style={{ marginBottom: 30 }}>
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
