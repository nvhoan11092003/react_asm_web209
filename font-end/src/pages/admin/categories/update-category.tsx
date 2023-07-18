import { useEffect, useState } from "react";
import { ICategory } from "../../../models/type";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Input } from "antd";

interface IProps {
  categories: ICategory[];
  onUpdate: (category: any) => void;
}

interface IForm {
  _id: string;
  name: string;
}

const UpdateCategory = (props: IProps) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [category, setCategory] = useState<ICategory>();
  useEffect(() => {
    const currentCategory = props.categories.find(
      (category: ICategory) => category._id == String(id)
    );
    setCategory(currentCategory);
  }, [props]);

  useEffect(() => {
    setFields();
  }, [category]);

  const [form] = Form.useForm();

  const setFields = () => {
    form.setFieldsValue({
      _id: category?._id,
      name: category?.name,
    });
  };

  const onFinish = (values: IForm) => {
    console.log("Submit ", values);

    props.onUpdate(values);

    navigate("/admin/categories");
  };
  const onFinishfail = (values: any) => {
    console.log("valid : ", values.errorFields[0], values);
  };

  return (
    <div className="w-100" style={{ marginTop: 100, backgroundColor: "white" }}>
      <h3 style={{ marginBottom: 50, marginTop: 20, color: "black" }}>
        Update Category
      </h3>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        form={form}
        style={{ maxWidth: 800 }}
        onFinish={onFinish}
        onFinishFailed={onFinishfail}
      >
        <Form.Item
          label=""
          name="_id"
          initialValue={id}
          style={{ display: "none" }}
          rules={[{ required: true, message: "Please input your id!" }]}
        >
          <Input />
        </Form.Item>

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
            Update Category
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateCategory;
