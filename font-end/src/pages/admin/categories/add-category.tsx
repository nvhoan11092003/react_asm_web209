import { ICategory } from "../../../models/type";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";

interface IProps {
  onAdd: (category: ICategory) => void;
}

const AddCategory = (props: IProps) => {
  const navigate = useNavigate();
  const onFinish = (values: ICategory) => {
    const newProduct = {
      id: values.id,
      name: values.name,
    };
    props.onAdd(newProduct);
    navigate("/admin/categories");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="w-100" style={{ marginTop: 100, backgroundColor: "white" }}>
      <h3 style={{ marginTop: 20, marginBottom: 50, color: "black" }}>
        Add New Category
      </h3>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 800 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Category Name"
          name="name"
          rules={[
            { required: true, message: "Please input your name!" },
            { whitespace: true },
            { min: 6, max: 255 },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Add Category
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddCategory;
