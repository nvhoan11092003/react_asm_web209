import { ICategory } from "../../../models/type";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { addCategory, getAllCategory } from "../../../api/category";

interface IProps {
  onAdd: (category: ICategory) => void;
}

const AddCategory = (props: IProps) => {
  const navigate = useNavigate();
  // const navigate = useNavigate();
  // const onFinish = (values: ICategory) => {
  //   const newProduct = {
  //     id: values.id,
  //     name: values.name,
  //   };
  //   props.onAdd(newProduct);
  //   navigate("/admin/categories");
  // };

  // const onFinishFailed = (errorInfo: any) => {
  //   console.log("Failed:", errorInfo);
  // const navigate = useNavigate();

  const [imgUrls, setImgUrls] = useState<string[]>([]);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);

    try {
      // Prepare form data
      const formData = new FormData();
      const imageFiles = data.images;
      for (let i = 0; i < imageFiles.length; i++) {
        formData.append("img", imageFiles[i]);
      }
      // call api backend
      const response = await axios.post(
        "http://localhost:8080/api/upload",
        formData
      );

      // kiểm tra nếu thành công
      if (response.status === 200) {
        const linkUrl = response.data.imgUrl;
        // link ảnh khi được server trả về thành công
        // console.log(linkUrl);
        console.log("Đã lấy đc ảnh", linkUrl);

        setImgUrls(linkUrl);

        const newCategory: ICategory = {
          name: data.categoryName,
          imgUrl: linkUrl, // truyền đường dẫn ảnh server trả về và gán nó với imgUrl trong bảng category
        };
        console.log(newCategory);
        console.log(getAllCategory());

        props.onAdd(newCategory);
        alert("Thêm danh mục thành công");
        navigate("/admin/categories");
        // Đặt lại biểu mẫu sau khi gửi thành công
        reset();
      } else {
        console.error("Image upload failed!");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="w-100" style={{ marginTop: 100, backgroundColor: "white" }}>
      <h3 style={{ marginTop: 20, marginBottom: 50, color: "black" }}>
        Add New Category
      </h3>
      {/* <Form
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
      </Form> */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Tên danh mục</h3>
        <input
          className="form-control"
          type="text"
          {...register("categoryName", { required: true })}
        />

        <h3>Hình ảnh</h3>
        <input
          className="form-control"
          type="file"
          {...register("images", { required: true })}
          multiple
          style={{ color: "black" }}
        />

        {/* <img src={imgUrls ? imgUrls[0] : ""} alt="" /> */}

        <button type="submit" className="btn btn-primary mt-5">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
