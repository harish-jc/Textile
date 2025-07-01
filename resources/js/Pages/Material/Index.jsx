import { useForm } from '@inertiajs/react';
import { Button, Form, Input, Table, Modal, message, Space } from 'antd';
import { useState } from 'react';
import AdminLayout from "@/Layouts/AdminLayout";
import '@/Pages/Home/Home.css';


export default function MaterialIndex({ materials }) {
    const [open, setOpen] = useState(false);
    const [editRecord, setEditRecord] = useState(null);

    const { data, setData, post, put, delete: destroy, reset, errors } = useForm({
        id: '',
        name: '',
    });

    const showModal = (record = null) => {
        setEditRecord(record);
        if (record) {
            setData({ id: record.id, name: record.name });
        } else {
            reset();
        }
        setOpen(true);
    };

    const handleSubmit = () => {
        const action = editRecord ? put : post;
        const url = editRecord
            ? route('admin.materials.update', data.id)
            : route('admin.materials.store');

        action(url, {
            onSuccess: () => {
                setOpen(false);
                reset();
                message.success(`Material ${editRecord ? 'updated' : 'added'} successfully.`);
            },
        });
    };

    const handleDelete = (record) => {
        destroy(route('admin.materials.destroy', record.id), {
            onSuccess: () => message.success('Material deleted.'),
        });
    };

    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <Space>
                    <Button size="small" onClick={() => showModal(record)}>Edit</Button>
                    <Button size="small" danger onClick={() => handleDelete(record)}>Delete</Button>
                </Space>
            ),
        },
    ];

    return (
        <AdminLayout>
            <div className="p-4 rounded">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Materials</h2>
                    <Button type="primary" onClick={() => showModal()}>Add Material</Button>
                </div>

                <Table
                    dataSource={materials}
                    columns={columns}
                    rowKey="id"
                    pagination={{ pageSize: 10 }} bordered
                />

                <Modal
                    title={editRecord ? 'Edit Material' : 'Add Material'}
                    open={open}
                    onCancel={() => setOpen(false)}
                    onOk={handleSubmit}
                    okText={editRecord ? 'Update' : 'Add'}
                >
                    <Form layout="vertical">
                        <Form.Item
                            label="Name"
                            validateStatus={errors.name && 'error'}
                            help={errors.name}
                        >
                            <Input
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                placeholder="Enter material name"
                            />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </AdminLayout>
    );
}
