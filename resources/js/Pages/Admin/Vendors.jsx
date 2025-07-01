import React from 'react';
import { Table, Button, Space, Tag, Typography } from 'antd';
import AdminLayout from '@/Layouts/AdminLayout';

const { Title } = Typography;

export default function Vendors() {
    // Static data for now
    const data = [
        {
            key: '1',
            name: 'Vendor One',
            email: 'vendor1@example.com',
            phone: '123-456-7890',
            status: 'Active',
        },
        {
            key: '2',
            name: 'Vendor Two',
            email: 'vendor2@example.com',
            phone: '987-654-3210',
            status: 'Inactive',
        },
        {
            key: '3',
            name: 'Vendor Three',
            email: 'vendor3@example.com',
            phone: '555-555-5555',
            status: 'Active',
        },
    ];

    // Columns definition
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status) => (
                <Tag color={status === 'Active' ? 'green' : 'red'}>
                    {status}
                </Tag>
            ),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <Space>
                    <Button type="primary">Edit</Button>
                    <Button danger>Delete</Button>
                </Space>
            ),
        },
    ];

    return (
        <AdminLayout>
            <div style={{ padding: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>

                    <Title level={3}>Vendors</Title>

                    <Button
                        type="primary"
                        style={{
                            borderRadius: '8px',
                            backgroundColor: '#1890ff',
                            borderColor: '#1890ff',
                        }}
                    >
                        Add New
                    </Button>

                </div>
                    <Table columns={columns} dataSource={data} bordered />
            </div>
        </AdminLayout>
    );
}
