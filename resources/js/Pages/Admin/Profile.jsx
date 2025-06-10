import React, { useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { Form, Input, Button, Upload, message, Row, Col, Typography } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import AdminLayout from '@/Layouts/AdminLayout';

const { Title } = Typography;

export default function Profile() {
    const { auth, flash } = usePage().props;

    const { data, setData, post, processing, errors, reset } = useForm({
        name: auth.user.name || '',
        email: auth.user.email || '',
        password: '',
        password_confirmation: '',
        phone: auth.user.phone || '',
        address: auth.user.address || '',
        region: auth.user.region || '',
        profile_image: null,
    });

    const [preview, setPreview] = useState(auth.user.profile_image ? `/storage/${auth.user.profile_image}` : null);

    const handleSubmit = () => {
        post(route('admin.profile.update'), {
            preserveScroll: true,
            onSuccess: () => reset('password', 'password_confirmation'),
        });
    };

    const uploadProps = {
        beforeUpload: file => {
            setData('profile_image', file);
            setPreview(URL.createObjectURL(file));
            return false;
        },
        showUploadList: false,
    };

    const inputStyle = { borderRadius: '8px',border: '1px solid #d9d9d9',backgroundColor: '#f1f1f1', marginRight: '8px' };

    return (
        <AdminLayout>
            <div style={{ maxWidth: 700, margin: '0 auto', padding: 24 }}>
                <Title level={3}>Update Profile</Title>

                {flash?.success && (
                    <div style={{ marginBottom: 16, color: 'green', fontWeight: 'bold' }}>
                        {flash.success}
                    </div>
                )}

                <Form layout="vertical" onFinish={handleSubmit}>
                    {/* Profile image upload */}
                    <Form.Item label="Profile Image">
                        <Upload {...uploadProps}>
                            <Button icon={<UploadOutlined />} style={inputStyle}>Upload or Change</Button>
                        </Upload>
                        <Button type="primary" danger onClick={() => {
                            setData('profile_image', null);
                            setPreview(null);
                        }}>
                            Remove
                        </Button>
                        {preview && (
                            <img
                                src={preview}
                                alt="Preview"
                                style={{ height: 80, borderRadius: '8px', marginTop: 10 }}
                            />
                        )}
                        {errors.profile_image && <div style={{ color: 'red' }}>{errors.profile_image}</div>}
                    </Form.Item>

                    {/* Form fields */}
                    <Form.Item label="Name">
                        <Input
                            style={inputStyle}
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                        />
                        {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                    </Form.Item>

                    <Form.Item label="Email">
                        <Input
                            style={inputStyle}
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                        />
                        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                    </Form.Item>

                    <Form.Item label="Phone">
                        <Input
                            style={inputStyle}
                            value={data.phone}
                            onChange={e => setData('phone', e.target.value)}
                        />
                        {errors.phone && <div style={{ color: 'red' }}>{errors.phone}</div>}
                    </Form.Item>

                    <Form.Item label="Address">
                        <Input
                            style={inputStyle}
                            value={data.address}
                            onChange={e => setData('address', e.target.value)}
                        />
                        {errors.address && <div style={{ color: 'red' }}>{errors.address}</div>}
                    </Form.Item>

                    <Form.Item label="Region">
                        <Input
                            style={inputStyle}
                            value={data.region}
                            onChange={e => setData('region', e.target.value)}
                        />
                        {errors.region && <div style={{ color: 'red' }}>{errors.region}</div>}
                    </Form.Item>

                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item label="New Password">
                                <Input.Password
                                    style={inputStyle}
                                    value={data.password}
                                    onChange={e => setData('password', e.target.value)}
                                />
                                {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label="Confirm Password">
                                <Input.Password
                                    style={inputStyle}
                                    value={data.password_confirmation}
                                    onChange={e => setData('password_confirmation', e.target.value)}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" loading={processing} style={{ borderRadius: '8px' }}>
                            {processing ? 'Updating...' : 'Update Profile'}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </AdminLayout>
    );
}
