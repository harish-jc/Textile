import { useForm } from "@inertiajs/react";
import { Button, Table, Modal, Form, Input, Select, message } from "antd";
import { useState } from "react";
import AdminLayout from "@/Layouts/AdminLayout";
import '@/Pages/Home/Home.css';

export default function CategoryIndex({ categories, allCategories }) {
    const [open, setOpen] = useState(false);
    const [editRecord, setEditRecord] = useState(null);

    const { data, setData, post, put, delete: destroy, reset, errors } = useForm({
        id: "",
        name: "",
        parent_id: null,
    });

    const showModal = (record = null) => {
        setEditRecord(record);
        if (record) {
            setData({
                id: record.id,
                name: record.name,
                parent_id: record.parent_id,
            });
        } else {
            reset();
        }
        setOpen(true);
    };

    const handleSubmit = () => {
        const url = editRecord
            ? route("admin.categories.update", data.id)
            : route("admin.categories.store");

        const action = editRecord ? put : post;

        action(url, {
            onSuccess: () => {
                setOpen(false);
                message.success("Category saved successfully.");
            },
        });
    };

    const handleDelete = (record) => {
        destroy(route("admin.categories.destroy", record.id), {
            onSuccess: () => message.success("Category deleted."),
        });
    };

    const columns = [
        { title: "Name", dataIndex: "name", key: "name" },
        {
            title: "Parent",
            dataIndex: ["parent", "name"],
            key: "parent",
            render: (_, record) => record?.parent?.name || "-",
        },
        {
            title: "Actions",
            render: (text, record) => (
                <>
                    <Button onClick={() => showModal(record)}>Edit</Button>
                    <Button danger onClick={() => handleDelete(record)} style={{ marginLeft: 8 }}>
                        Delete
                    </Button>
                </>
            ),
        },
    ];

    return (
        <AdminLayout>
            <div className="p-4 bg-white shadow rounded">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Categories</h2>
                    <Button type="primary" onClick={() => showModal()}>Add Category</Button>
                </div>

                <Table dataSource={categories} columns={columns} rowKey="id" />

                <Modal
                    title={editRecord ? "Edit Category" : "Add Category"}
                    open={open}
                    onCancel={() => setOpen(false)}
                    onOk={handleSubmit}
                >
                    <Form layout="vertical">
                        <Form.Item
                            label="Category Name"
                            validateStatus={errors.name && "error"}
                            help={errors.name}
                        >
                            <Input
                                value={data.name}
                                onChange={(e) => setData("name", e.target.value)}
                            />
                        </Form.Item>

                        <Form.Item label="Parent Category (optional)">
                            <Select
                                value={data.parent_id}
                                allowClear
                                onChange={(value) => setData("parent_id", value)}
                                placeholder="Select parent category"
                            >
                                {allCategories
                                    .filter((c) => c.id !== data.id) // prevent self as parent
                                    .map((cat) => (
                                        <Select.Option key={cat.id} value={cat.id}>
                                            {cat.name}
                                        </Select.Option>
                                    ))}
                            </Select>
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </AdminLayout>
    );
}
