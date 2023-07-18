import TextArea from "antd/es/input/TextArea";
import { ICategory, IProduct } from "../../../models/type";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { getAllCategory } from "../../../api/category";

// interface IProps {
//   onAdd: (product: IProduct) => void;

// }

// const AddProduct = (props: IProps) => {
//   const navigate = useNavigate();
//   const onFinish = (values: IProduct) => {
//     const newProduct = {
//       id: values.id,
//       name: values.name,
//       price: values.price,
//       description: values.description,
//       image: values.image,
//     };
//     props.onAdd(newProduct);
//     navigate("/admin/products");
//   };

//   const onFinishFailed = (errorInfo: any) => {
//     console.log("Failed:", errorInfo);
//   };

interface IProps {
  onAdd: (product: IProduct) => void;
}

const AddProduct = (props: IProps) => {
  const navigate = useNavigate();
  console.log(props);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [imgUrls, setImgUrls] = useState<string[]>([]);
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    getAllCategory().then(({ data }) => setCategories(data));
  }, []);
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
        console.log(linkUrl);

        // link ảnh khi được server trả về thành công
        // console.log(linkUrl);

        setImgUrls(linkUrl);

        const newProduct: IProduct = {
          name: data.productName,
          categoryId: data.categoryId,
          imgUrl: linkUrl,
          price: data.price,
          originPrice: data.originPrice,
          processingInstructions: data.processingInstructions,
          storageInstructions: data.storageInstructions,
          description: data.description,
        };

        props.onAdd(newProduct);
        alert("thêm thành công sản phẩm");
        navigate("/admin/products");
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
        Add New Product
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
          label="Product Name"
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

        <Form.Item
          label="Product Price"
          name="price"
          rules={[
            { required: true, message: "Please input your price!" },
            { whitespace: true },
            { min: 1 },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Product Description"
          name="desc"
          rules={[
            { required: true, message: "Please input your description!" },
          ]}
          hasFeedback
        >
          <TextArea />
        </Form.Item>

        <Form.Item className="form-group mb-3" label="Product Image">
          <Input
            type="file"
            id="image"
            className="form-control"
            style={{ backgroundColor: "white", color: "black" }}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Add Product
          </Button>
        </Form.Item>
      </Form> */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 style={{ color: "black" }}>Tên sản phẩm</h3>
        <input
          type="text"
          {...register("productName", { required: true })}
          className="form-control"
        />

        <h3 style={{ color: "black" }}>Danh mục</h3>
        <select
          className="form-control"
          id=""
          {...register("categoryId", { required: true })}
        >
          {categories?.map((cate) => {
            return <option value={cate._id}>{cate.name}</option>;
          })}
        </select>

        <h3 style={{ color: "black" }}>Giá gốc</h3>
        <input
          className="form-control"
          type="number"
          {...register("price", { required: true })}
        />

        <h3 style={{ color: "black" }}>Giá đã giảm</h3>
        <input
          type="number"
          {...register("originPrice", { required: true })}
          className="form-control"
        />

        <h3 style={{ color: "black" }}>Hướng dẫn chế biến</h3>
        <textarea
          className="form-control"
          id=""
          rows={3}
          {...register("processingInstructions", { required: true })}
        ></textarea>

        <h3 style={{ color: "black" }}>Hướng dẫn bảo quản</h3>
        <textarea
          className="form-control"
          id=""
          rows={3}
          {...register("storageInstructions", { required: true })}
        ></textarea>

        <h3 style={{ color: "black" }}>Mô tả</h3>
        <textarea
          className="form-control"
          id=""
          rows={3}
          {...register("description", { required: true })}
        ></textarea>

        <h3 style={{ color: "black" }}>Hình ảnh</h3>
        <input
          className="form-control"
          type="file"
          {...register("images", { required: true })}
          multiple
          style={{ color: "black" }}
        />

        <button type="submit" className="mt-5 btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
