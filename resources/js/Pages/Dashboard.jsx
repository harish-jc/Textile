import React, { useState, useEffect } from "react";
import { Form, Input, Button, message } from 'antd';
import { EyeOutlined } from "@ant-design/icons";
import FrontLayout from "@/Layouts/FrontLayout";
import { Head, usePage, useForm, router } from "@inertiajs/react";
import '@/Pages/Home/Home.css';

function Dashboard() {
    const { auth, url } = usePage().props;
    const user = auth.user;

    // Redirect if not logged in
    useEffect(() => {
        if (!auth.user) {
            router.visit(route('signin'));
        }
    }, []);

    // Extract tab from query string
    const queryTab = new URLSearchParams(window.location.search).get('tab');
    const [activeTab, setActiveTab] = useState(queryTab || 'profile');

    // Profile form
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

    // wishlist
    const [wishlist, setWishlist] = useState([]);
    useEffect(() => {
        if (activeTab === 'wishlist') {
            const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            setWishlist(storedWishlist);
        }
    }, [activeTab]);

    const removeFromWishlist = (id) => {
        const updated = wishlist.filter(item => item.id !== id);
        setWishlist(updated);
        localStorage.setItem("wishlist", JSON.stringify(updated));
    };

    const handleAddToCart = (productId) => {
        router.post(route('cart.add', productId), {
            id: productId,
            quantity: 1,
        }, {
            onSuccess: () => router.visit(route('cart.index')),
        });
    };

    const orders = [
        { id: 1, status: 'Delivered', total: '4000', date: '15 June 2025' },
        { id: 2, status: 'Delivered', total: '2000', date: '18 June 2025' },
    ];

    return (
        <FrontLayout>
            <Head title="My Account" />
            <section className="py-12 bg-gray-50 w-full">
                <div className="max-w-7xl mx-auto px-4">
                    <section className="account-page">
                        <div className="w-full">
                            <div className="flex flex-col lg:flex-row gap-6">

                                {/* Sidebar */}
                                <div className="w-full lg:w-1/4">
                                    <div className="card shadow-sm rounded-lg">
                                        <div className="card-body text-center">
                                            <h5 className="text-black text-xl md:text-2xl">Hi, <strong>{user.name}</strong></h5>
                                        </div>
                                        <div className="list-group list-group-flush">
                                            <a className={`list-group-item ${activeTab === 'orders' ? 'active' : ''}`} onClick={() => setActiveTab('orders')}><i className="fa fa-shopping-cart mr-2"></i>My Orders</a>
                                            <a className={`list-group-item ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}><i className="fa fa-user mr-2"></i>My Profile</a>
                                            <a className={`list-group-item ${activeTab === 'wishlist' ? 'active' : ''}`} onClick={() => setActiveTab('wishlist')}><i className="fas fa-heart mr-2"></i>My Wishlist</a>
                                            <a className={`list-group-item ${activeTab === 'password' ? 'active' : ''}`} onClick={() => setActiveTab('password')}><i className="fa-solid fa-unlock mr-2"></i>Change Password</a>
                                            <a className="list-group-item text-danger" href={route('signout')} method="get" as="button"><i className="fas fa-sign-out-alt mr-2"></i>Logout</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="w-full lg:w-3/4">
                                    <div className="tab-content">

                                        {/* Profile Tab */}
                                        {activeTab === 'profile' && (
                                            <div className="card shadow-sm rounded-lg p-4">
                                                <h5 className="mb-4 text-size">My Profile</h5>
                                                <Form layout="vertical" onFinish={handleProfileUpdate}>
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
                                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                                    {wishlist.map((product) => (
                                                        <div key={product.id} className="group relative transition-transform duration-300 ease-out hover:scale-[1.03] rounded shadow-sm p-2">
                                                            <div className="bg-gray-100 overflow-hidden relative pb-[120%] rounded-tl-[12px] rounded-br-[12px]">
                                                                <img src={product.imgSrc} alt={product.title} className="absolute w-full h-full object-cover" />
                                                            </div>
                                                            <div className="mt-2 flex justify-between items-center">
                                                                <div>
                                                                    <p className="font-medium text-gray-900">{product.title}</p>
                                                                    <div className="text-base font-bold text-gray-900">&#8377;{product.originalPrice || product.price}</div>
                                                                </div>
                                                                <div className="flex gap-2">
                                                                    <button onClick={() => handleAddToCart(product.id)} className="px-3 py-1.5 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition">
                                                                        <i className="fas fa-shopping-bag"></i>
                                                                    </button>
                                                                    <button
                                                                        onClick={() => removeFromWishlist(product.id)}
                                                                        className="text-red-600 hover:text-red-800"
                                                                        title="Remove"
                                                                    >
                                                                        <i className="fas fa-trash"></i>
                                                                    </button>
                                                                </div>
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
                                                    <Form.Item label="Current Password" name="current_password" rules={[{ required: true }]}> <Input.Password value={passwordData.current_password} onChange={(e) => setPasswordData('current_password', e.target.value)} /> </Form.Item>
                                                    <Form.Item label="New Password" name="new_password" rules={[{ required: true, min: 6 }]}> <Input.Password value={passwordData.new_password} onChange={(e) => setPasswordData('new_password', e.target.value)} /> </Form.Item>
                                                    <Form.Item label="Confirm New Password" name="confirm_password" rules={[{ required: true }]}> <Input.Password value={passwordData.confirm_password} onChange={(e) => setPasswordData('confirm_password', e.target.value)} /> </Form.Item>
                                                    <Button type="primary" htmlType="submit" loading={passwordProcessing}>Update Password</Button>
                                                </Form>
                                            </div>
                                        )}

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
