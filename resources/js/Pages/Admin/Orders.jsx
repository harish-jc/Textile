import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Table, Button, Typography } from 'antd';

const { Title } = Typography;

export default function Orders() {
    const orders = [
        { id: 1, order_number: 'ORD-001', customer: 'John Doe', total: 120.00, status: 'Pending' },
        { id: 2, order_number: 'ORD-002', customer: 'Jane Smith', total: 250.00, status: 'Completed' },
    ];

    const columns = [
        { title: 'Order #', dataIndex: 'order_number', key: 'order_number' },
        { title: 'Customer', dataIndex: 'customer', key: 'customer' },
        { title: 'Total ($)', dataIndex: 'total', key: 'total' },
        { title: 'Status', dataIndex: 'status', key: 'status' },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <>
                    <Button
                        type="primary"
                        size="small"
                        style={{ borderRadius: '6px', marginRight: '6px' }}
                    >
                        View
                    </Button>
                    <Button
                        type="default"
                        size="small"
                        style={{ borderRadius: '6px', marginRight: '6px' }}
                    >
                        Edit
                    </Button>
                    <Button
                        danger
                        size="small"
                        style={{ borderRadius: '6px' }}
                    >
                        Delete
                    </Button>
                </>
            ),
        },
    ];

    return (
        <AdminLayout>
            <div style={{ padding: 24 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                    <Title level={3} style={{ margin: 0 }}>Orders</Title>
                    {/* <Button
                        type="primary"
                        style={{
                            borderRadius: '8px',
                            backgroundColor: '#1890ff',
                            borderColor: '#1890ff',
                        }}
                    >
                        Add New
                    </Button> */}
                </div>
                <Table columns={columns} dataSource={orders} rowKey="id" bordered />
            </div>
        </AdminLayout>
    );
}
