import React, { useState } from 'react';
import { Drawer, Form, Input, Button, message } from 'antd';

const BuyerRfqForm = () => {
    const [open, setOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [form] = Form.useForm();

    const handleSubmit = (values) => {
        console.log('RFQ Submitted:', values);
        setSubmitted(true);
        message.success('Your RFQ has been submitted successfully!');

        setTimeout(() => {
            setOpen(false);
            setSubmitted(false);
            form.resetFields();
        }, 2000);
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
                RFQ
            </button>

            <Drawer
                title="Send RFQ (Request for Quotation)"
                placement="right"
                width={560}
                onClose={() => {
                    setOpen(false);
                    setSubmitted(false);
                    form.resetFields();
                }}
                open={open}
            >
                {submitted ? (
                    <div className="text-green-600 text-center font-semibold py-6">
                        Your RFQ has been submitted!
                    </div>
                ) : (
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={handleSubmit}
                        requiredMark="optional"
                    >
                        <Form.Item
                            label="Product Name"
                            name="productName"
                            rules={[{ required: true }]}
                        >
                            <Input placeholder="Enter product name" />
                        </Form.Item>

                        <Form.Item
                            label="Quantity (in meters)"
                            name="quantity"
                            rules={[{ required: true }]}
                        >
                            <Input type="number" placeholder="e.g. 100" />
                        </Form.Item>

                        <Form.Item label="Email"
                            name="email"
                            rules={[{ required: true, type: 'email' }]}>
                            <Input placeholder="Enter your email" />
                        </Form.Item>

                        <Form.Item
                            label="Message"
                            name="description"
                            rules={[{ required: true }]}
                        >
                            <Input.TextArea rows={4} placeholder="Describe your requirements" />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" block>
                                Submit RFQ
                            </Button>
                        </Form.Item>
                    </Form>
                )}
            </Drawer>
        </>
    );
};

export default BuyerRfqForm;
