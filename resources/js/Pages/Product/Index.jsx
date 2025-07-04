import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
    Modal,
    Form,
    Button,
    Space, Drawer, DatePicker,
    Image, Col, Row,
    Table,
    Upload,
    Pagination,
    Tooltip,
    Input,
    Select,
    notification,
    Popconfirm,
} from "antd";
import {
    HomeOutlined,
    SearchOutlined,
    LockFilled,
    EditOutlined,
    DeleteOutlined,
    UploadOutlined,
    EyeOutlined,
    PlusCircleOutlined,
    PlusOutlined,
    MinusCircleOutlined,
} from "@ant-design/icons";
import { useForm, Link, Head } from "@inertiajs/react";
import { useState } from "react";
import InputError from "@/Components/InputError";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import DOMPurify from 'dompurify';


export default function OurProduct({ ourProduct }) {
    console.log("ourProduct", ourProduct);

    const {
        data,
        setData,
        post,
        put,
        patch,
        get,
        delete: destroy,
        errors,
        reset,
        clearErrors,
    } = useForm({
        vendor_id: "",
        category_id: "",
        image: "",
        name: "",
        material_id: "",
        color_id: "",
        pattern_id: "",
        unit: "",
        stock_quantity: "",
        price: "",
        offer_price: "",
        minimum_order_quantity: "",
        description: "",
        status: "active",
        search: searchParam,

    });
    const [edit_data, setedit_data] = useState({
        description: false,
        note: false

    });

    const [form] = Form.useForm();
    const formItemLayout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const ButtonStyle = {
        fontSize: "20px",
    };
    const RowStyle = {
        marginBottom: "20px",
        marginLeft: "3em",
    };
    const columnStyle = {
        fontSize: "1.1em",
        // fontFamily: "Times New Roman, Times, serif",
    };
    const okButtonProps = {
        shape: "round",
        type: "primary",
        className: "okbtn",
    }
    const cancelButtonProps = {
        shape: "round",
        type: "primary",
        danger: true,
    }
    const [open, setOpen] = useState(false);
    const [type, setType] = useState("");
    const [recordId, setRecordId] = useState(ourProduct);
    const [selectedRecord, setSelectedRecord] = useState(ourProduct);
    const [viewOpen, setViewOpen] = useState(false);
    console.log("selectedRecord", selectedRecord);

    const handleView = (record) => {
        setSelectedRecord(record);
        setViewOpen(true);
    };
    const handleViewCancel = () => {
        setViewOpen(false);
    };

    const showModal = () => {
        setType("Add");
        setOpen(true);
        setData({
            vendor_id: "",
            category_id: "",
            image: "",
            name: "",
            material_id: "",
            color_id: "",
            pattern_id: "",
            unit: "",
            stock_quantity: "",
            price: "",
            offer_price: "",
            minimum_order_quantity: "",
            description: "",
            status: "active",
        });
    };
    const handleCancel = () => {
        form.resetFields();
        setOpen(false);
        Object.keys(errors).forEach((field) => clearErrors(field));


    };

    const handleEdit = (record) => {
        console.log("Record:", record);
        setOpen(true);
        setType("Edit");

        setData({
            _method: "PUT",
            id: record.id,
            vendor_id: record.vendor_id,
            category_id: record.category_id,
            image_url: record.image,
            name: record.name,
            material_id: record.material?.id || "",
color_id: record.color?.id || "",
pattern_id: record.pattern?.id || "",
            unit: record.unit,
            stock_quantity: record.stock_quantity,
            price: record.price,
            offer_price: record.offer_price,
            minimum_order_quantity: record.minimum_order_quantity,
            description: record.description,
            status: record.status,
        });
    };

    // const sanitizeContent = (content) => {
    // 	return DOMPurify.sanitize(content, { USE_PROFILES: { html: true } });
    // };

    const [loading, setLoading] = useState(false);
    const onFinish = (values) => {
        setLoading(true);
        if (type == "Add") {
            post(route("admin.our_products.store"), {
                data: values,
                preserveScroll: true,
                onError: (errors) => {
                    console.log("errors", errors);
                    notification.error({
                        message: "Form submission failed",
                        // description: "Please check the form fields for errors.",
                    });
                    setLoading(false);
                },
                onSuccess: () => {
                    form.resetFields();
                    setOpen(false);
                    notification.success({
                        message: "Added successfully!",
                    });
                    setLoading(false);
                },
            });
        } else {
            {
                post(route("admin.our_products.update", recordId), {
                    data: values,
                    preserveScroll: true,

                    onError: (errors) => {
                        console.log("errors", errors);
                        notification.error({
                            message: "Form submission failed",
                            description:
                                "Please check the form fields for errors.",
                        });
                        setLoading(false);
                    },
                    onSuccess: () => {
                        form.resetFields();
                        setOpen(false);
                        notification.success({
                            message: "Updated successfully!",
                        });
                        setLoading(false);
                        setTimeout(() => {
                            window.location.href = route("admin.our_products.index");
                        }, 500);
                    },
                });
            }
        }
    };

    const flattenCategories = (categories, depth = 0) =>
        categories.flatMap((category) => [
            {
                value: category.id,
                label: `${'— '.repeat(depth)}${category.name}`,
            },
            ...(category.children
                ? flattenCategories(category.children, depth + 1)
                : []),
        ]);

    return (
        <AdminLayout        // user={auth.user}
        >
            <Head title="Products" />

            <div className="py-2" style={{ fontFamily: "Sans-serif" }}>
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-5">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <div
                            className="text-gray-900"
                            style={{ fontSize: "22px" }}
                        >
                            <h6 style={{ fontWeight: "bold" }}> Our Product</h6>
                        </div>
                        <Space>
                            {/* <Button
                                type="default"
                                style={{
                                    marginBottom: "5px",
                                    color: "white",
                                    backgroundColor: "#1677ff",
                                }}
                                onClick={showModal}
                            >
                                Add
                            </Button> */}
                            <EditOutlined style={{ fontSize: '30px', color: '#1677ff', border: '2px solid #1677ff', padding: '5px', borderRadius: '50%' }}
                                onClick={handleEdit} />
                        </Space>
                    </div>

                    <Drawer
                        title={type === "Add" ? "Add" : "Edit"}
                        open={open}
                        onClose={handleCancel}
                        footer={null}
                        width={700}
                        className="drawer-content"
                    >

                        <Form layout="vertical" onFinish={onFinish}>
                            <Form.Item label="Vendor" name="vendor_id"><Select options={vendors} onChange={(v) => setData("vendor_id", v)} value={data.vendor_id} allowClear /></Form.Item>
                            {/* <Form.Item label="Category" name="category_id"><Select options={categories} onChange={(v) => setData("category_id", v)} value={data.category_id} /></Form.Item> */}
                            <Form.Item label="Category" name="category_id" rules={[{ required: true }]}>
                                <Select
                                    value={data.category_id}
                                    onChange={(val) => setData("category_id", val)}
                                    options={flattenCategories(categories)} // ✅ use flattened options
                                    placeholder="Select category"
                                    allowClear
                                />
                            </Form.Item>

                            <Form.Item label="Name" name="name" rules={[{ required: true }]}><Input onChange={(e) => setData("name", e.target.value)} value={data.name} /></Form.Item>
                            {/* <Form.Item label="Material" name="material"><Input onChange={(e) => setData("material", e.target.value)} value={data.material} /></Form.Item>
                            <Form.Item label="Color" name="color"><Input onChange={(e) => setData("color", e.target.value)} value={data.color} /></Form.Item>
                            <Form.Item label="Pattern" name="pattern"><Input onChange={(e) => setData("pattern", e.target.value)} value={data.pattern} /></Form.Item> */}
                            <Form.Item label="Material" name="material_id">
                                <Select
                                    value={data.material_id}
                                    onChange={(value) => setData('material_id', value)}
                                    options={materials.map(m => ({ value: m.id, label: m.name }))}
                                    placeholder="Select a material"
                                />
                            </Form.Item>
                            <Form.Item label="Color" name="color_id">
                                <Select
                                    value={data.color_id}
                                    onChange={(value) => setData('color_id', value)}
                                    options={colors.map(c => ({ value: c.id, label: c.name }))}
                                    placeholder="Select a color"
                                />
                            </Form.Item>
                            <Form.Item label="Pattern" name="pattern_id">
                                <Select
                                    value={data.pattern_id}
                                    onChange={(value) => setData('pattern_id', value)}
                                    options={patterns.map(p => ({ value: p.id, label: p.name }))}
                                    placeholder="Select a pattern"
                                />
                            </Form.Item>
                            <Form.Item label="Unit" name="unit" rules={[{ required: true }]}>
                                <Select value={data.unit} onChange={(v) => setData('unit', v)}>
                                    <Select.Option value="meter">Meter</Select.Option>
                                    <Select.Option value="kg">Kg</Select.Option>
                                    <Select.Option value="yard">Yard</Select.Option>
                                </Select>
                            </Form.Item>

                            <Form.Item label="Stock Quantity" name="stock_quantity" rules={[{ required: true }]}>
                                <Input type="number" min="0" step="0.01" onChange={(e) => setData('stock_quantity', e.target.value)} value={data.stock_quantity} />
                            </Form.Item>

                            <Form.Item label="Price per Unit" name="price" rules={[{ required: true }]}>
                                <Input type="number" min="0" step="0.01" onChange={(e) => setData('price', e.target.value)} value={data.price} />
                            </Form.Item>

                            <Form.Item label="Offer Price (optional)" name="offer_price">
                                <Input type="number" min="0" step="0.01" onChange={(e) => setData('offer_price', e.target.value)} value={data.offer_price} />
                            </Form.Item>

                            <Form.Item label="Minimum Order Quantity" name="minimum_order_quantity" rules={[{ required: true }]}>
                                <Input type="number" min="0" step="0.01" onChange={(e) => setData('minimum_order_quantity', e.target.value)} value={data.minimum_order_quantity} />
                            </Form.Item>
                            <Form.Item label="Description" name="description"><Input.TextArea onChange={(e) => setData("description", e.target.value)} value={data.description} /></Form.Item>
                            <Form.Item label="Status" name="status"><Select onChange={(v) => setData("status", v)} value={data.status}><Select.Option value="active">Active</Select.Option><Select.Option value="inactive">Inactive</Select.Option></Select></Form.Item>
                            <Form.Item label="Image" name="image"><Upload beforeUpload={() => false} onChange={(info) => setData("image", info.file)}><Button icon={<UploadOutlined />}>Upload</Button></Upload></Form.Item>
                            <Form.Item><Button type="primary" htmlType="submit" loading={loading}>{type === "Edit" ? "Update" : "Add"}</Button></Form.Item>
                        </Form>
                    </Drawer>

                    {/* <Drawer
                        title={
                            <h2
                                style={{
                                    fontSize: "20px",
                                    textAlign: "center",
                                    fontFamily: "sans-serif",
                                }}
                            >
                                Details
                            </h2>
                        }
                        open={viewOpen}
                        onClose={handleViewCancel}
                        footer={null}
                        width={600}
                    > */}
                    {selectedRecord && (
                        <>
                            <Row><Col span={8}>Name:</Col><Col span={16}>{selectedRecord.name}</Col></Row>
                            <Row><Col span={8}>Category:</Col><Col span={16}>{selectedRecord.category?.name || "-"}</Col></Row>
                            <Row><Col span={8}>Material:</Col><Col span={16}>{selectedRecord.material?.name || "-"}</Col></Row>
                            <Row><Col span={8}>Color:</Col><Col span={16}>{selectedRecord.color?.name || "-"}</Col></Row>
                            <Row><Col span={8}>Pattern:</Col><Col span={16}>{selectedRecord.pattern?.name || "-"}</Col></Row>
                            <Row><Col span={8}>Unit:</Col><Col span={16}>{selectedRecord.unit}</Col></Row>
                            <Row><Col span={8}>Stock Quantity:</Col><Col span={16}>{selectedRecord.stock_quantity}</Col></Row>
                            <Row><Col span={8}>Price:</Col><Col span={16}>{selectedRecord.price}</Col></Row>
                            <Row><Col span={8}>Offer Price:</Col><Col span={16}>{selectedRecord.offer_price}</Col></Row>
                            <Row><Col span={8}>MOQ:</Col><Col span={16}>{selectedRecord.minimum_order_quantity}</Col></Row>
                            <Row><Col span={8}>Description:</Col><Col span={16}>{selectedRecord.description}</Col></Row>
                            <Row><Col span={8}>Status:</Col><Col span={16}>{selectedRecord.status}</Col></Row>
                            <Row><Col span={8}>Image:</Col><Col span={16}><Image src={selectedRecord.image} width={150} /></Col></Row>
                        </>
                    )}
                    {/* </Drawer> */}
                </div>
            </div>
        </AdminLayout>
    );
}
