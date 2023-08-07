import { useState, useEffect } from 'react';
import { Table, Space, Button, message, Popconfirm, InputNumber } from 'antd';
import { ICart } from '../../models/type';
import { deleteCart, getAllCart } from '../../api/cart';



const CartPage = () => {
  const [data, setData] = useState<ICart[]>([])
  const [quantityMap, setQuantityMap] = useState<{ [key: string]: number }>({});
  const [error, setError] = useState<string | null>(null);

  const handleQuantityChange = (key: string, value: number | undefined | null) => {
    setQuantityMap((prevQuantityMap) => ({
      ...prevQuantityMap,
      [key]: value || 1,
    }));
  };

  useEffect(() => {
    getAllCart()
      .then(({ data }) => {
        setData(data?.carts);
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const onHandleRemove = (id: string) => {
    deleteCart(id).then(() => {
      const remove = data.filter((item) => item._id !== id)
      console.log(remove);
      setData(remove)
    })
      .catch((error) => {
        setError(error.response.data.message)
      })
  }

  const confirm = (record: any) => {
    message.info('Xóa sản phẩm thành công');
    onHandleRemove(record._id)
  };

  const columns = [
    {
      dataIndex: "selected",
      render: (selected: boolean, record: any) => (
        <input
          type="checkbox"
          checked={selected}
        // onChange={() => handleCheckboxChange(record.key)}
        />
      ),
    },
    {
      title: 'Tên sản phẩm',
      render: (record: any) => <a>{record.items?.productId.name}</a>,
    },
    {
      title: 'Hình ảnh',
      render: (record: any) => (<img src={record.items?.productId.imgUrl[0]} alt="Product" width="200" />),
    },
    {
      title: 'Đơn giá',
      render: (record: any) => <p>{record.items?.productId.originPrice}</p>
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
        <p>{record.items?.productId.originPrice * (quantityMap[record.key] || 1)}</p>
      ),
    },
    {
      title: "Thao tác",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <Popconfirm
            placement="top"
            title={"Bạn có chắc chắn muốn xóa không?"}
            onConfirm={() => confirm(record)}
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