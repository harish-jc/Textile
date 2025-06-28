import { useForm } from '@inertiajs/react';
import { Button, Form, Input, Table, Modal, message, Space } from 'antd';
import { useState } from 'react';
import AdminLayout from "@/Layouts/AdminLayout";
import '@/Pages/Home/Home.css';


export default function PatternIndex({ patterns }) {
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
            ? route('admin.patterns.update', data.id)
            : route('admin.patterns.store');

        action(url, {
            onSuccess: () => {
                setOpen(false);
                reset();
                message.success(`Pattern ${editRecord ? 'updated' : 'added'} successfully.`);
            },
        });
    };

    const handleDelete = (record) => {
        destroy(route('admin.patterns.destroy', record.id), {
            onSuccess: () => message.success('Pattern deleted.'),
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
            <div className="p-4 bg-white shadow rounded">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Patterns</h2>
                    <Button type="primary" onClick={() => showModal()}>Add Pattern</Button>
                </div>

                <Table
                    dataSource={patterns}
                    columns={columns}
                    rowKey="id"
                    pagination={{ pageSize: 10 }}
                />

                <Modal
                    title={editRecord ? 'Edit Pattern' : 'Add Pattern'}
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
                                placeholder="Enter pattern name"
                            />
                        </Form.Item>
                    </Form>
                </Modal>
            </div>
        </AdminLayout>
    );
}
