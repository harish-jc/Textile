import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Link, Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import {
    Button,
    Col,
    Row,
    Image,
    Form,
    Modal,
    Input,
    Upload,
    notification,
    Table,
    Tooltip,
    Popconfirm,
    Space,
    Pagination,
    Dropdown,
    Menu,
    Drawer, Select
} from "antd";
import InputError from "@/Components/InputError";
import {
    UploadOutlined,
    EditOutlined,
    DeleteOutlined,
    EyeOutlined,
    SearchOutlined,
    MoreOutlined,
} from "@ant-design/icons";
import '@/Pages/Home/Home.css';
import AdminLayout from "@/Layouts/AdminLayout";

export default function Products({ products, materials = [], colors = [], patterns = [], categories }) {
    const params = new URLSearchParams(window.location.search);
    const searchParam = params.get("search");
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
        unit: "meter",             // default value
        stock_quantity: "",        // e.g. 100.00
        price: "",                 // per unit price
        offer_price: "",           // optional discounted price
        minimum_order_quantity: "",// e.g. 0.50
        description: "",
        status: "active",
        search: searchParam,
    });
    const [form] = Form.useForm();
    const okButtonProps = {
        shape: "round",
        type: "primary",
        className: "okbtn",
    };
    const cancelButtonProps = {
        shape: "round",
        type: "primary",
        danger: true,
    };
    const formItemLayout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };

    const [open, setOpen] = useState(false);
    const [type, setType] = useState("");
    const [recordId, setRecordId] = useState("");
    const [selectedRecord, setSelectedRecord] = useState(null);
    const [viewOpen, setViewOpen] = useState(false);

    const handleView = (record) => {
        setSelectedRecord(record);
        setViewOpen(true);
    };
    const handleViewCancel = () => {
        setViewOpen(false);
    };
    const RowStyle = {
        marginBottom: "20px",
    };
    const columnStyle = {
        fontSize: "1.2em",
        fontFamily: "sans-serif",
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
            unit: "meter",             // default value
            stock_quantity: "",        // e.g. 100.00
            price: "",                 // per unit price
            offer_price: "",           // optional discounted price
            minimum_order_quantity: "",// e.g. 0.50
            description: "",
            status: "active",
        });
    };
    const handleCancel = () => {
        form.resetFields();
        setOpen(false);

        Object.keys(errors).forEach((field) => clearErrors(field));
        // clearErrors("name");
        // clearErrors("description");
        // clearErrors("image");
    };

    const handleEdit = (record) => {
        console.log("Record:", record);
        setOpen(true);
        setType("Edit");
        setRecordId(record.id);
        setData({
            _method: "PUT",
            id: record.id,
            vendor_id: record.vendor_id,
            category_id: record.category_id,
            // image: "",
            image_url: record.image,
            name: record.name,
            material_id: record.material?.id || "",
            color_id: record.color?.id || "",
            pattern_id: record.pattern?.id || "",
            unit: record.unit, // Assuming unit is a string like "meter"
            stock_quantity: record.stock_quantity,
            price: record.price,
            offer_price: record.offer_price,
            minimum_order_quantity: record.minimum_order_quantity,
            description: record.description,
            status: record.status,
        });
    };

    const handleDelete = (recordId) => {
        destroy(route("admin.products.destroy", recordId), {
            onSuccess: () => {
                notification.success({
                    message: "Deleted successfully!",
                    // description: " updated successfully!",
                });
            },
        });
    };
    const [loading, setLoading] = useState(false);
    const onFinish = (values) => {
        console.log("V");

        setLoading(true);
        if (type == "Add") {
            post(route("admin.products.store"), {
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
                    form.resetFields(); // Reset form fields using form instance method
                    setOpen(false);

                    notification.success({
                        message: "Added successfully!",
                        // description: " added successfully!",
                    });
                    setLoading(false);
                },
            });
        } else {
            {
                post(route("admin.products.update", recordId), {
                    data: values,
                    preserveScroll: true,

                    onError: (errors) => {
                        console.log("errors", errors);
                        notification.error({
                            message: "Form submission failed",
                            // description:
                            //     "Please check the form fields for errors.",
                        });
                        setLoading(false);
                    },
                    onSuccess: () => {
                        form.resetFields(); // Reset form fields using form instance method
                        setOpen(false);

                        notification.success({
                            message: "Updated successfully!",
                            // description:
                            //     " updated successfully!",
                        });
                        setLoading(false);
                        // setData({ name: "", description: "", image: "" });
                    },
                });
            }
        }
    }; //Here end the code for Add student & Edit student//

    const [isSmallScreen, setIsSmallScreen] = useState(
        window.innerWidth <= 768
    );

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 768);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    // Table columns defines start here
    const columns = [
        {
            title: "S.no", dataIndex: "id", key: "id",
            render: (text, record, index) =>
                index + 1 + (products.current_page - 1) * products.per_page
        },
        { title: "Category", dataIndex: ["category", "name"] },

        { title: "Name", dataIndex: "name", key: "name" },
        { title: "Material", dataIndex: ["material", "name"] },
        { title: "Color", dataIndex: ["color", "name"] },
        { title: "Pattern", dataIndex: ["pattern", "name"] },
        { title: "Unit", dataIndex: "unit" }, // Assuming unit is a string like "meter"
        { title: "Stock Quantity", dataIndex: "stock_quantity" }, // e.g. 100.00
        { title: "Price", dataIndex: "price" },
        { title: "Offer Price", dataIndex: "offer_price" },
        { title: "MOQ", dataIndex: "minimum_order_quantity" },
        {
            title: "Image",
            dataIndex: "image",
            render: (image) => (
                <Image src={image} width={50} style={{ borderRadius: 5 }} />
            ),
        },

        {
            title: "Actions",
            key: "actions",
            render: (record) => (
                <Space className="table-actions">
                    {isSmallScreen ? (
                        <Dropdown
                            menu={{
                                items: [
                                    {
                                        label: (
                                            <Tooltip title="Edit Record">
                                                <Button
                                                    type="link"
                                                    icon={
                                                        <EditOutlined
                                                            style={ButtonStyle}
                                                        />
                                                    }
                                                    onClick={() =>
                                                        handleEdit(record)
                                                    }
                                                />
                                            </Tooltip>
                                        ),
                                    },
                                    {
                                        label: (
                                            <Popconfirm
                                                title="Are you sure to delete this Record ?"
                                                // description="Are you sure to delete this Record Record?"
                                                onConfirm={() =>
                                                    handleDelete(record)
                                                }
                                                okButtonProps={okButtonProps}
                                                cancelButtonProps={
                                                    cancelButtonProps
                                                }
                                                okText="Yes"
                                                cancelText="No"
                                            >
                                                <Tooltip title="Delete Record">
                                                    <Button
                                                        type="link"
                                                        style={{ color: "red" }}
                                                        icon={
                                                            <DeleteOutlined
                                                                style={
                                                                    ButtonStyle
                                                                }
                                                            />
                                                        }
                                                    />
                                                </Tooltip>
                                            </Popconfirm>
                                        ),
                                    },
                                    {
                                        label: (
                                            <Tooltip title="View Record">
                                                <Button
                                                    type="link"
                                                    icon={
                                                        <EyeOutlined
                                                            style={ButtonStyle}
                                                        />
                                                    }
                                                    onClick={() =>
                                                        handleView(record)
                                                    }
                                                    style={{ color: "black" }}
                                                />
                                            </Tooltip>
                                        ),
                                    },
                                ],
                            }}
                            trigger={["click"]}
                        >
                            <Button
                                type="link"
                                icon={<MoreOutlined style={ButtonStyle} />}
                            />
                        </Dropdown>
                    ) : (
                        <>
                            <Tooltip title="Edit Record">
                                <Button
                                    type="link"
                                    icon={<EditOutlined style={ButtonStyle} />}
                                    onClick={() => handleEdit(record)}
                                />
                            </Tooltip>
                            <Popconfirm
                                title="Are you sure to delete this Record ?"
                                // description="Are you sure to delete this Record ?"
                                onConfirm={() => handleDelete(record)}
                                okButtonProps={okButtonProps}
                                cancelButtonProps={
                                    cancelButtonProps
                                }
                                okText="Yes"
                                cancelText="No"
                            >
                                <Tooltip title="Delete Record">
                                    <Button
                                        type="link"
                                        style={{ color: "red" }}
                                        icon={
                                            <DeleteOutlined
                                                style={ButtonStyle}
                                            />
                                        }
                                    />
                                </Tooltip>
                            </Popconfirm>
                            <Tooltip title="View Record">
                                <Button
                                    type="link"
                                    icon={<EyeOutlined style={ButtonStyle} />}
                                    onClick={() => handleView(record)}
                                    style={{ color: "black" }}
                                />
                            </Tooltip>
                        </>
                    )}
                </Space>
            ),
        },
    ]; //Table column definitions end here//
    console.log('columns ', columns);
    const ButtonStyle = {
        fontSize: "20px",
    };
    const [clearButtonVisible, setClearButtonVisible] = useState(false);
    useEffect(() => {
        console.log("clearButton");
        if (data.search) {
            setClearButtonVisible(true);
        }
    }, []);
    const handleSearch = () => {
        setClearButtonVisible(true);
        get(route("admin.products.index"));
    };

    const handlePageChange = (page, pageSize) => {
        // Fetch data for the selected page
        get(route("admin.products.index", { page }));
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
        <AdminLayout>
            <Head title="Products" />
            <div className="container">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-5">
                    <div className="header-title mb-4 text-xl font-semibold">Product List</div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                        <Space className="button-group">
                            <Input
                                name="search"
                                placeholder="Search here..."
                                type="default"
                                onChange={(e) => setData("search", e.target.value)}
                                style={{
                                    marginBottom: "5px",
                                }}
                                value={data.search}
                            />
                            <Button
                                type="default"
                                disabled={!data.search}
                                onClick={handleSearch}
                                style={{
                                    marginBottom: "5px",
                                    color: "white",
                                    backgroundColor: "#1677ff",
                                    // paddingTop: 2,
                                    // paddingBottom: 10,
                                }}
                            >
                                <SearchOutlined />
                            </Button>
                            {clearButtonVisible && (
                                <Link href={route("admin.products.index")}>
                                    <Button
                                        type="default"
                                        style={{
                                            marginBottom: "5px",
                                            color: "white",
                                            backgroundColor: "red",
                                        }}
                                    >
                                        X
                                    </Button>
                                </Link>
                            )}
                            <Button
                                className="button"
                                type="default"
                                style={{
                                    marginBottom: "5px",
                                    color: "white",
                                    backgroundColor: "#1677ff",
                                }}
                                onClick={showModal}
                            >
                                Add Record
                            </Button>
                        </Space>
                    </div>
                    <div className="table-container">
                        <Table
                            dataSource={products.data}
                            columns={columns}
                            pagination={false}
                            size="middle"
                            rowKey={"id"}
                            bordered
                            components={{
                                header: {
                                    cell: (props) => (
                                        <th
                                            style={{
                                                backgroundColor: "#1677ff",
                                                color: "#fff",
                                            }}
                                        >
                                            {props.children}
                                        </th>
                                    ),
                                },
                            }}
                        />
                    </div>
                    <Pagination
                        style={{
                            display: "flex",
                            justifyContent: "right",
                            marginTop: "20px",
                        }}
                        current={products.current_page}
                        total={products.total}
                        pageSize={products.per_page}
                        onChange={handlePageChange}
                        showQuickJumper
                        showTotal={(total) => `Total ${total} items`}
                    />
                    <Drawer
                        title={type == "Add" ? "Add Record" : "Edit Record"}
                        open={open}
                        onClose={handleCancel}
                        footer={null}
                        width={500}
                        className="drawer-content"
                    >
                        <Form layout="vertical" form={form} onFinish={onFinish} initialValues={data}>
                            {/* <Form.Item label="Vendor" name="vendor_id"><Select options={vendors} onChange={(v) => setData("vendor_id", v)} value={data.vendor_id} allowClear /></Form.Item> */}
                            {/* <Form.Item label="Category" name="category_id"><Select options={categories} onChange={(v) => setData("category_id", v)} value={data.category_id} /></Form.Item> */}
                            <Form.Item label="Category" name="category_id">
                                <Select
                                    value={data.category_id}
                                    onChange={(val) => setData("category_id", val)}
                                    options={flattenCategories(categories)}
                                    placeholder="Select category"
                                />
                            </Form.Item>

                            <Form.Item label="Name" name="name" rules={[{ required: true }]}><Input onChange={(e) => setData("name", e.target.value)} value={data.name} /></Form.Item>
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
                            <Form.Item label="Status" name="status"><Select value={data.status} onChange={(v) => setData("status", v)}><Select.Option value="active">Active</Select.Option><Select.Option value="inactive">Inactive</Select.Option></Select></Form.Item>
                            <Form.Item
                                label={<span>Image<span style={{ color: 'red' }}>*</span></span>}
                                // label="Front Image"
                                name="image"
                                valuePropName="fileList"
                                getValueFromEvent={(e) => e && e.fileList}
                            >
                                <div>
                                    <Upload
                                        listType="picture-circle"
                                        maxCount={1}
                                        beforeUpload={() => false}
                                        onChange={(info) => {
                                            console.log("info addddd", info.file);
                                            setData("image", info.file);
                                        }}
                                    >
                                        <UploadOutlined />
                                    </Upload>
                                    {data.image_url ? (
                                        <Image
                                            src={data.image_url}
                                            height={100}
                                            width={80}
                                            style={{ margin: 5 }}
                                        />
                                    ) : null}

                                    <InputError
                                        message={errors.image}
                                        className="mt-2"
                                    />
                                </div>
                            </Form.Item>
                            <Button type="primary" htmlType="submit" loading={loading}>{type === "Add" ? "Add" : "Update"}</Button>
                        </Form>
                    </Drawer>
                    <Drawer title="Product Details" open={viewOpen} onClose={handleViewCancel} width={500}>
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
                    </Drawer>
                </div>
            </div>
        </AdminLayout>
    );
};

