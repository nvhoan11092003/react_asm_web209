import { useState } from "react";
import { ICategory, IProduct } from "../../../models/type";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";


interface IProps {
  onAdd: (product: IProduct) => void;
  category: ICategory[]
}

const AddProduct = (props: IProps) => {
  // const navigate = useNavigate();
  const [imgUrls, setImgUrls] = useState<string[]>([]);
  const { register, handleSubmit,reset} = useForm();


  const onSubmit = async (data: any) => {
    try {
      // Prepare form data
      const formData = new FormData();
      const imageFiles = data.images;
      for (let i = 0; i < imageFiles.length; i++) {
        formData.append("img", imageFiles[i]);
      }

      // call api backend
      const response = await axios.post("http://localhost:8080/api/upload", formData);
      

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
          description: data.description
        }
        props.onAdd(newProduct);

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

      <form onSubmit={handleSubmit(onSubmit)}>
        <h3 style={{color: "black"}}>Tên sản phẩm</h3>
        <input type="text" {...register("productName", { required: true })} />

        <h3 style={{color: "black"}}>Danh mục</h3>
        <select id="" {...register("categoryId", { required: true })} >
          {props.category.map((cate)=>{
                          return(
                            <option value={cate._id}>{cate.name}</option>
                          )
                        })}
        </select>

        <h3 style={{color: "black"}}>Giá gốc</h3>
        <input type="number" {...register("price", { required: true })} />

        <h3 style={{color: "black"}}>Giá đã giảm</h3>
        <input type="number" {...register("originPrice", { required: true })} />

        <h3 style={{color: "black"}}>Hướng dẫn chế biến</h3>
        <textarea id="" cols= {30} rows={10} {...register("processingInstructions", { required: true })}>

        </textarea>

        <h3 style={{color: "black"}}>Hướng dẫn bảo quản</h3>
        <textarea id="" cols= {30} rows={10} {...register("storageInstructions", { required: true })}>

        </textarea>

        <h3 style={{color: "black"}}>Mô tả</h3>
        <textarea id="" cols= {30} rows={10} {...register("description", { required: true })}>

        </textarea>

        <h3 style={{color: "black"}}>Hình ảnh</h3>
        <input type="file" {...register("images", { required: true })} multiple style={{color: "black"}}/>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
