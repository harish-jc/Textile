import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Table, Button, Typography } from 'antd';

const { Title } = Typography;

export default function Payments() {
    const payments = [
        { id: 1, reference: 'PAY-001', vendor: 'Acme Inc.', amount: 500.00, status: 'Paid' },
        { id: 2, reference: 'PAY-002', vendor: 'Beta Co.', amount: 300.00, status: 'Pending' },
    ];

    const columns = [
        { title: 'Reference', dataIndex: 'reference', key: 'reference' },
        { title: 'Vendor', dataIndex: 'vendor', key: 'vendor' },
        { title: 'Amount ($)', dataIndex: 'amount', key: 'amount' },
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
                    <Title level={3} style={{ margin: 0 }}>Payments</Title>
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
                <Table columns={columns} dataSource={payments} rowKey="id" bordered />
            </div>
        </AdminLayout>
    );
}
