import React, { useState, useEffect } from "react";
import { Form, Input, Button, message } from 'antd';
import { EyeOutlined } from "@ant-design/icons";
import FrontLayout from "@/Layouts/FrontLayout";
import { Head, usePage, useForm } from "@inertiajs/react";
import '@/Pages/Home/Home.css';
import useFormItemStatus from "antd/es/form/hooks/useFormItemStatus";

function Dashboard() {
    const { auth } = usePage().props;
    const user = auth.user;
    //if user not logged in it redirects to signin
    useEffect(() => {
        if (!auth.user) {
            router.visit(route('signin'));
        }
    }, []);

    const handleInputChange = (field, value) => {
        setData(field, value);
    };
    const [activeTab, setActiveTab] = useState('profile');
    // Profile update form
    const {
        data: profile,
        setData: setProfile,
        post: updateProfile,
        errors: profileErrors,
        processing: profileProcessing,
    } = useForm({
        username: user?.username || '',
        name: user?.name || '',
        email: user?.email || '',
        phone: user?.phone || '',
        address: user?.address || '',
    });

    const handleProfileUpdate = () => {
        updateProfile(route('profile.userUpdate'));
    };

    // Change password form
    const {
        data: passwordData,
        setData: setPasswordData,
        post: changePassword,
        errors: passwordErrors,
        processing: passwordProcessing,
    } = useForm({
        current_password: '',
        new_password: '',
        confirm_password: '',
    });

    const handlePasswordChange = () => {
        changePassword(route('change-password.submit'));
    };

    // for wishlist
    const wishlist = [
        {
            id: 1,
            name: 'Elegant Cotton',
            price: 1499,
            image: '/storage/img/products/product-1-7.png',
        },
        {
            id: 2,
            name: 'Silk Kurti Set',
            price: 2299,
            image: '/storage/img/products/product-1-8.png',
        },
        {
            id: 3,
            name: 'Printed Fabric',
            price: 699,
            image: '/storage/img/products/product-1-6.png',
        },
        {
            id: 4,
            name: 'Khadi Cotton',
            price: 499,
            image: '/storage/img/products/product-1-5.png',
        },
    ];

    const handleAddToCart = (productId) => {
        post(route('cart.add', productId), {
            data: {
                id: productId,
                quantity: 1,
            },
            onSuccess: () => {
                router.visit(route('cart.index'));
            },
        });
    };
    const orders = [
        {
            id: 1,
            status: 'Delivered',
            total: '4000',
            date: '15 June 2025'
        },
        {
            id: 2,
            status: 'Delivered',
            total: '2000',
            date: '18 June 2025'
        }
    ]
    return (
        <FrontLayout>
            <Head title="My Account" />
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <section className="account-page section-padding">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 mx-auto">
                                    <div className="row no-gutters">
                                        <div className="col-md-3">
                                            <div className="card shadow-sm rounded-lg">
                                                <div className="card-body text-center">
                                                    <h5 className="text-warningv1" style={{ fontSize: "24px" }}>
                                                        Hi, <strong>{user.name}</strong>
                                                    </h5>
                                                </div>
                                                <div className="list-group list-group-flush">
                                                    <a className={`list-group-item ${activeTab === 'orders' ? 'active' : ''}`} onClick={() => setActiveTab('orders')}>
                                                        <i className="fa fa-shopping-cart mr-2"></i>My Orders
                                                    </a>
                                                    <a className={`list-group-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>
                                                        <i className="fa fa-user mr-2"></i>My Profile
                                                    </a>
                                                    <a className={`list-group-item ${activeTab === 'wishlist' ? 'active' : ''}`} onClick={() => setActiveTab('wishlist')}>
                                                        <i className="fas fa-heart mr-2"></i>My Wishlist
                                                    </a>
                                                    <a className={`list-group-item ${activeTab === 'password' ? 'active' : ''}`} onClick={() => setActiveTab('password')}>
                                                        <i className="fa-solid fa-unlock mr-2"></i>Change Password
                                                    </a>
                                                    <a className="list-group-item text-danger" href={route('signout')} method="get" as="button">
                                                        <i className="fas fa-sign-out-alt mr-2"></i>Logout
                                                    </a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-9">
                                            <div className="tab-content">

                                                {/* Profile Tab */}
                                                {activeTab === 'profile' && (
                                                    <div className="card shadow-sm rounded-lg p-4">
                                                        <h5 className="mb-4 text-size">My Profile</h5>
                                                        <Form layout="vertical" onFinish={handleProfileUpdate}>
                                                            <Form.Item label="User Name">
                                                                <Input value={profile.username} onChange={(e) => setProfile('username', e.target.value)} />
                                                            </Form.Item>
                                                            <Form.Item label="Full Name">
                                                                <Input value={profile.name} onChange={(e) => setProfile('name', e.target.value)} />
                                                            </Form.Item>
                                                            <Form.Item label="Email Address">
                                                                <Input value={profile.email} onChange={(e) => setProfile('email', e.target.value)} />
                                                            </Form.Item>
                                                            <Form.Item label="Phone Number">
                                                                <Input addonBefore="+91" value={profile.phone} onChange={(e) => setProfile('phone', e.target.value)} />
                                                            </Form.Item>
                                                            <Form.Item label="Address">
                                                                <Input.TextArea rows={4} value={profile.address} onChange={(e) => setProfile('address', e.target.value)} />
                                                            </Form.Item>
                                                            <div className="text-right">
                                                                <Button type="primary" htmlType="submit" loading={profileProcessing}>Save Changes</Button>
                                                            </div>
                                                        </Form>
                                                    </div>
                                                )}

                                                {/* Orders Tab */}
                                                {activeTab === 'orders' && (
                                                    <div className="card p-4 shadow-sm rounded-lg">
                                                        <h5 className="mb-4 text-size">My Orders</h5>
                                                        <div className="border-b py-3">
                                                            {orders.map((order) => (
                                                                <div key={order.id} className="mb-4 pb-4 border-b last:border-b-0">
                                                                    <p><strong className="text-black">Order ID :</strong> #{order.id}</p>
                                                                    <p><strong className="text-black">Status :</strong> {order.status}</p>
                                                                    <p><strong className="text-black">Total :</strong> &#8377; {order.total}</p>
                                                                    <p><strong className="text-black">Date :</strong> {order.date}</p>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Wishlist Tab */}
                                                {activeTab === 'wishlist' && (
                                                    <div className="card p-4 shadow-sm rounded-lg">
                                                        <h5 className="mb-4 text-size">My Wishlist</h5>
                                                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                                            {wishlist.map((product) => (
                                                                <div
                                                                    key={product.id}
                                                                    className="group relative transition-transform duration-300 ease-out hover:scale-[1.03] rounded shadow-sm p-2"
                                                                >
                                                                    {/* Image */}
                                                                    <div className="bg-gray-100 overflow-hidden relative pb-[120%] rounded-tl-[12px] rounded-br-[12px]">
                                                                        <img
                                                                            src={product.image}
                                                                            alt={product.name}
                                                                            className="absolute w-full h-full object-cover"
                                                                        />
                                                                    </div>

                                                                    {/* Product Info Row */}
                                                                    <div className="mt-2 flex justify-between items-center">
                                                                        <div>
                                                                            <p className="font-medium text-gray-900">{product.name}</p>
                                                                            <div className="text-base font-bold text-gray-900">
                                                                                &#8377;{product.price}
                                                                            </div>
                                                                        </div>

                                                                        <button
                                                                            onClick={() => handleAddToCart(product.id)}
                                                                            className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition"
                                                                        >
                                                                            <i className="fas fa-shopping-bag"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Change Password Tab */}
                                                {activeTab === 'password' && (
                                                    <div className="card p-4 shadow-sm rounded-lg">
                                                        <h5 className="mb-4 text-size">Change Password</h5>
                                                        <Form layout="vertical" onFinish={handlePasswordChange}>
                                                            <Form.Item label="Current Password" name="current_password" rules={[{ required: true }]}>
                                                                <Input.Password value={passwordData.current_password} onChange={(e) => setPasswordData('current_password', e.target.value)} />
                                                            </Form.Item>
                                                            <Form.Item label="New Password" name="new_password" rules={[{ required: true, min: 6 }]}>
                                                                <Input.Password value={passwordData.new_password} onChange={(e) => setPasswordData('new_password', e.target.value)} />
                                                            </Form.Item>
                                                            <Form.Item label="Confirm New Password" name="confirm_password" rules={[{ required: true }]}>
                                                                <Input.Password value={passwordData.confirm_password} onChange={(e) => setPasswordData('confirm_password', e.target.value)} />
                                                            </Form.Item>
                                                            <Button type="primary" htmlType="submit" loading={passwordProcessing}>Update Password</Button>
                                                        </Form>
                                                    </div>
                                                )}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </FrontLayout>
    );
}

export default Dashboard;
