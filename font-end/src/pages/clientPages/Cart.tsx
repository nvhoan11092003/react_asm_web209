import { useState, useEffect } from 'react';
import { Table,Space,Button,message,Popconfirm ,InputNumber } from 'antd';
import { ICart } from '../../models/type';
import { getAllCart } from '../../api/cart';





const CartPage =  () => {
    const [data,setData] = useState<ICart[]>([])
    const [quantityMap, setQuantityMap] = useState<{ [key: string]: number }>({});

    const handleQuantityChange = (key: string, value: number | undefined | null) => {
        setQuantityMap((prevQuantityMap) => ({
          ...prevQuantityMap,
          [key]: value || 1,
        }));
    };
      
    useEffect(()=>{
        getAllCart().then(({data})=>setData(data?.carts))
    },[])
    // console.log(data);


    const columns = [
        {
          title: 'Tên sản phẩm',
          render: (record: any) => <a>{record.items.productId.name}</a>,
        },
        {
          title: 'Hình ảnh',
          render: (record: any) => (<img src={record.items.productId.imgUrl[0]} alt="Product" width="200" />),
        },
        {
          title: 'Đơn giá',
          render: (record:any) => <p>{record.items.productId.originPrice}</p>
        },
        {
          title: 'Số lượng',
          dataIndex: 'quantity',
          render: (quantity: number, record: any) => (
              <InputNumber
                min={1}
                max={10}
                value={quantityMap[record.key] || quantity}
                defaultValue={1}
                onChange={(value) => handleQuantityChange(record.key, value)}
              />
            ),
        },
        {
          title: 'Số tiền',
          render: (record: any) => (
              <p>{record.items.productId.originPrice * (quantityMap[record.key] || 1)}</p>
            ),
        },
        {
          title: "Thao tác",
          key: "action",
          render: () => (
            <Space size="middle">
              <Popconfirm
                placement="top"
                title={"Bạn có chắc chắn muốn xóa không?"}
                onConfirm={() => confirm()}
                okText="Yes"
                cancelText="No"
              >
                <Button type="primary" danger>
                  Xóa
                </Button>
              </Popconfirm>
            </Space>
          ),
        },
      ];

  return (
    <div>
      <Table
        columns={columns}
        dataSource={data.map((product) => ({ ...product, key: product._id }))}
      />
    </div>
  );
};

export default CartPage;