import { Space, Table, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { IUser } from "../../../models/type";

interface IProps {
  users: IUser[];
  onRemove: (id: string) => void;
}

const ListUser = (props: IProps) => {
  const removeUser = (id: string) => {
    props.onRemove(id);
  };

  const columns: ColumnsType<IUser> = [
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
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
              const delUser = confirm("Bạn có muốn xoá không?");
              if (delUser) {
                removeUser(record._id);
              }
            }}
          >
            Remove
          </Button>
        </Space>
      ),
    },
  ];

  const data: IUser[] = props.users.map((item: IUser) => {
    return {
      key: item._id,
      ...item,
    };
  });

  return (
    <div style={{ marginTop: 100 }}>
      <Table
        className=""
        style={{ backgroundColor: "white", marginTop: 100 }}
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default ListUser;
