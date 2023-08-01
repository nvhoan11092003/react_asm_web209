import { useEffect, useState } from "react";
import { ICategory, IProduct } from "../../../models/type";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Input, Select, Upload, UploadFile, UploadProps } from "antd";
import TextArea from "antd/es/input/TextArea";
import { getAllCategory } from "../../../api/category";
import { UploadOutlined } from '@ant-design/icons';
import axios from "axios";
interface IProps {
  products: IProduct[];
  onUpdate: (product: IProduct) => void;
}

const UpdateProduct = (props: IProps) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [product, setProduct] = useState<IProduct>();
  const [fileList, setFileList] = useState<any[]>([])
  useEffect(() => {
    const currentProduct = props.products.find((product) => product._id == id);
    setProduct(currentProduct);
  }, [props]);

  useEffect(() => {
    getAllCategory().then(({ data }) => setCategories(data));
  }, [props]);

  useEffect(() => {
    setFields();
  }, [product]);
  const [form] = Form.useForm();
  const setFields = () => {
    const imgdefaul = product?.imgUrl.map((item, index) => {
      return {
        name: "image",
        uid: `-${index}`,
        status: 'done',
        url: item,
      }
    });
    if (imgdefaul) {
      setFileList(imgdefaul)
    }
    form.setFieldsValue({
      _id: product?._id,
      categoryId: product?.categoryId._id,
      name: product?.name,
      price: product?.price,
      originPrice: product?.originPrice,
      processingInstructions: product?.processingInstructions,
      storageInstructions: product?.storageInstructions,
      description: product?.description,
      images: imgdefaul
    });

  };
  useEffect(() => {
    console.log(fileList);
  })
  const prop: UploadProps = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload(file, FileList) {
      return false;
    },
    onChange: async (file) => {
      // Xử lý data tải lên hình ảnh 
      console.log(file);
      const formData = new FormData();
      formData.append("img", file.file);
      const response = await axios.post(
        "http://localhost:8080/api/upload",
        formData
      );
      const urlImages = response.data.imgUrl;

      const img = {
        name: "image",
        status: 'done',
        url: urlImages[0],
      }
      console.log(img);
      console.log(setFileList([...fileList, img]));

    },
    fileList,
  };

  const onFinish = async (values: any) => {

    console.log(values.images);
    // props.onUpdate(values)
    alert("Cập nhật sản phẩm thành công");
    // navigate("/admin/products");
  };

  const onFinishFailed = (values: any) => {
    console.log("errors", values);
  };
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    }
  };

  return (
    <div className="w-100" style={{ marginTop: 100, backgroundColor: "white" }}>
      <h3 style={{ marginBottom: 50, marginTop: 20, color: "black" }}>
        Update Product
      </h3>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 800 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        form={form}
        onFinishFailed={onFinishFailed}
        validateMessages={validateMessages}
        autoComplete="off"
      >
        <Form.Item
          label="Product Name"
          name="name"
          rules={[
            { required: true, },
            { whitespace: true },
            { min: 6, max: 255 },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="_id"

        >
          <Input hidden />
        </Form.Item>
        <Form.Item
          label="Category"
          name="categoryId"
          rules={[
            { required: true, },
          ]}
          hasFeedback
        >
          <Select id="" defaultValue={{ key: product?.categoryId._id, value: product?.categoryId.name }}>
            {categories?.map((Category) => {
              return <Select.Option key={Category._id} value={Category._id}>{Category.name}</Select.Option>;
            })}
          </Select>
        </Form.Item>

        <Form.Item
          label="Product Price"
          name="price"
          rules={[
            { required: true, min: 1, max: 100000000, pattern: new RegExp(/^[0-9]+$/), message: "Price is not valid number" },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="origin Price"
          name="originPrice"

          rules={[
            { required: true, min: 1, max: 100000000, pattern: new RegExp(/^[0-9]+$/), message: "originPrice is not valid number" },
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="processingInstructions"
          name="processingInstructions"
          rules={[
            { required: true, },
          ]}
          hasFeedback
        >
          <TextArea />
        </Form.Item>
        <Form.Item
          label="storageInstructions"
          name="storageInstructions"
          rules={[
            { required: true, },
          ]}
          hasFeedback
        >
          <TextArea />
        </Form.Item>

        <Form.Item
          label="Product Description"
          name="description"
          rules={[
            { required: true, },
          ]}
          hasFeedback
        >
          <TextArea />
        </Form.Item>
        <Form.Item
          label="Ảnh sản phẩm"
          name="images"
          wrapperCol={{ offset: 3, span: 16 }}
          rules={[{ required: true, message: "Vui lòng chọn ảnh sản phẩm" }]}
        >
          <Upload
            {...prop}
            // fileList={fileList}
            accept="image/*" listType="picture-circle" multiple maxCount={5}>
            <Button icon={<UploadOutlined />} block>
              Chọn ảnh
            </Button>
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Update Product
          </Button>
        </Form.Item>
      </Form>
    </div >
  );
};

export default UpdateProduct;
