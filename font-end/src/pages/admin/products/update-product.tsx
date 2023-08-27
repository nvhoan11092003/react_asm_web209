import { useEffect, useState } from "react";
import { ICategory, IProduct } from "../../../models/type";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form, Input, Select, Upload, UploadProps } from "antd";
import TextArea from "antd/es/input/TextArea";

import { UploadOutlined } from '@ant-design/icons';

import { useGetCategoriesQuery } from "../../service/category.service";
import { useGetFoodByIdQuery } from "../../service/food.service";
import axios from "axios";
interface IProps {
    products: IProduct[];
    onUpdate: (product: IProduct) => void;
}
const UpdateProduct = (props: IProps) => {
    const { id } = useParams();
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [fileList, setFileList] = useState<any[]>([])
    var { data }: any = useGetFoodByIdQuery(String(id))
    const product: IProduct = data
    var { data }: any = useGetCategoriesQuery()
    const categories = data
    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) =>
        setFileList(newFileList);

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
            images: product?.imgUrl
        });
    };

    useEffect(() => {
        setFields()
    }, [product])

    const onFinish = async (values: any) => {
        let newurls = []
        if (values.images.fileList) {
            newurls = await Promise.all(values.images.fileList.map(async (item: any) => {
                if (!item.status) {
                    const formData = new FormData();
                    formData.append("image", item.originFileObj);
                    const API_key = "42d2b4a414af48bbc306d6456dd1f943"
                    const apiResponse: any = await axios.post(
                        `https://api.imgbb.com/1/upload?key=${API_key}`,
                        formData
                    );
                    return apiResponse.data.data.url
                }

                return item.url
            }))

        } else {
            newurls = values.images
        }

        console.log(newurls);

        const newProduct: IProduct = {
            _id: values._id,
            name: values.name,
            categoryId: values.categoryId,
            imgUrl: newurls,
            price: values.price,
            originPrice: values.originPrice,
            processingInstructions: values.processingInstructions,
            storageInstructions: values.storageInstructions,
            description: values.description,
        };
        console.log(newProduct);
        props.onUpdate(newProduct)
        alert("Cập nhật sản phẩm thành công");
        navigate("/admin/products");
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
                    label=""
                    name="_id"
                    initialValue={id}
                    style={{ display: "none" }}
                    rules={[{ required: true, message: "Please input your id!" }]}
                >
                    <Input />
                </Form.Item>
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
                    hidden
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
                    <Select id="" >
                        {categories?.map((Category: ICategory) => {
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
                        fileList={fileList}
                        beforeUpload={() => false}
                        onChange={handleChange}
                        accept="image/*" listType="picture-circle" multiple maxCount={5}>
                        <Button icon={<UploadOutlined />} block>
                            Chọn ảnh
                        </Button>
                    </Upload>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" className="bg-blue-500">
                        Update Product
                    </Button>
                </Form.Item>
            </Form>
        </div >
    );
}

export default UpdateProduct;
