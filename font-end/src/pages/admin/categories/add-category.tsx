import React, { useState } from "react";
import { ICategory } from "../../../models/type";
import axios from "axios";
import { useForm } from "react-hook-form";

interface IProps {
  onAdd: (category: ICategory) => void;
}

const AddCategory = (props: IProps) => {
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
        // link ảnh khi được server trả về thành công
        // console.log(linkUrl);
        
        setImgUrls(linkUrl);

        
        const newCategory: ICategory = {
          name: data.categoryName,
          imgUrl: linkUrl, // truyền đường dẫn ảnh server trả về và gán nó với imgUrl trong bảng category
        };
        props.onAdd(newCategory);

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

      <form onSubmit={handleSubmit(onSubmit)}>
        <h3>Tên danh mục</h3>
        <input type="text" {...register("categoryName", { required: true })} />


        <h3>Hình ảnh</h3>
        <input type="file" {...register("images", { required: true })} multiple  style={{color: "black"}}/>


        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddCategory;
