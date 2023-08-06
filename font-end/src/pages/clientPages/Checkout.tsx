import { useContext } from "react"
import { UserContext } from "../../Layouts/websiteLayouts"
import { Form, Input, Button, Upload, Select, } from "antd";
const CheckoutPage = () => {

    const { user } = useContext(UserContext)
    const onSubmit = async (data: any) => { }
    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        }
    }; const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };


    return (
        <div className="container">
            <div className="py-5 text-center">
                <h2>Checkout form</h2>
            </div>
            <div className="row">
                <div className="col-md-4 order-md-2 mb-4">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-muted">Your cart</span>
                        <span className="badge badge-secondary badge-pill">3</span>
                    </h4>
                    <ul className="list-group mb-3">

                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <img style={{ width: '100px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT778zoXP-KtOezgh92L-RjEmRGzWS_O_T3BQKMh3nQjRWYBKNzY_KgqtqMB9_1soU9Ejs&usqp=CAU" alt="" />
                            <div style={{ marginLeft: '-100px' }}>
                                <h6 className="my-0 ">Product name</h6>
                                <small className="text-muted">Brief description</small>
                            </div>
                            <span className="text-muted">$12</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <img style={{ width: '100px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT778zoXP-KtOezgh92L-RjEmRGzWS_O_T3BQKMh3nQjRWYBKNzY_KgqtqMB9_1soU9Ejs&usqp=CAU" alt="" />
                            <div style={{ marginLeft: '-100px' }}>
                                <h6 className="my-0">Second product</h6>
                                <small className="text-muted">Brief description</small>
                            </div>
                            <span className="text-muted">$8</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between lh-condensed">
                            <img style={{ width: '100px' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT778zoXP-KtOezgh92L-RjEmRGzWS_O_T3BQKMh3nQjRWYBKNzY_KgqtqMB9_1soU9Ejs&usqp=CAU" alt="" />
                            <div style={{ marginLeft: '-100px' }}>
                                <h6 className="my-0">Third item</h6>
                                <small className="text-muted">Brief description</small>
                            </div>
                            <span className="text-muted">$5</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between bg-light">
                            <div className="text-success">
                                <h6 className="my-0">Promo code</h6>
                                <small>EXAMPLECODE</small>
                            </div>
                            <span className="text-success">-$5</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>$20</strong>
                        </li>
                    </ul>

                </div>
                <div className="col-md-6 mx-3 order-md-1">
                    <h4 className="mb-3">Billing address</h4>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 800 }}
                        initialValues={{ remember: true }}
                        onFinish={onSubmit}
                        onFinishFailed={onFinishFailed}
                        validateMessages={validateMessages}
                    >
                        <Form.Item
                            initialValue={user.username}
                            label="Name"
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
                            label="Email"
                            name="email"
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
                            label="adress"
                            name="adress"
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
                            label="number"
                            name="number"
                            rules={[
                                { required: true, },
                                { whitespace: true },
                                { min: 6, max: 255 },
                            ]}
                            hasFeedback
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                                Add Product
                            </Button>
                        </Form.Item>

                    </Form>

                </div>
            </div>
        </div>
    )
}

export default CheckoutPage