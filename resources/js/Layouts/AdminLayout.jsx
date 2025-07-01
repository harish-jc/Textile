import React from 'react';
import { Link, usePage, useForm } from '@inertiajs/react';
import {
    Button,
    Layout,
    Dropdown,
    Space,
    Image,
    Popconfirm,
    Menu
} from "antd";
import {
    LogoutOutlined,
    DownOutlined,
    SettingOutlined,
    LockOutlined
} from "@ant-design/icons";
import Sidebar from "@/Layouts/Sidebar";
import '@/Pages/Home/Home.css';
    
export default function AdminLayout({ children }) {
    const { auth } = usePage().props;
    const user = auth.user;

    // Use profile_image correctly
    const avatarImage = user?.profile_image ? `/storage/${user.profile_image}` : "/images/avatar.png";

    const avatarimageStyle = {
        height: "25px",
        width: "25px",
        borderRadius: "50%",
        objectFit: "cover",
    };

    const { post } = useForm();

    const handleLogout = () => {
        post(route("admin.logout"));
    };

    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
                    <h1 className="text-xl font-semibold">Textile</h1>
                    <div className="flex items-center space-x-4 relative">
                        {/* {user?.profile_image ? (
                            <img
                                src={`/storage/${user.profile_image}`}
                                alt="User profile"
                                className="w-8 h-8 rounded-full object-cover"
                            />
                        ) : (
                            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                                <span className="text-xs text-gray-600">
                                    {user?.name?.charAt(0).toUpperCase() || 'A'}
                                </span>
                            </div>
                        )} */}
                        <span className="text-sm text-gray-700">{user?.name || 'Admin'}</span>

                        {/* Dropdown */}
                        <Dropdown
                            menu={{
                                items: [
                                    {
                                        label: (
                                            <Link href={route("admin.profile.update")}>
                                                <SettingOutlined /> Account Settings
                                            </Link>
                                        ),
                                        key: "0",
                                    },
                                    {
                                        label: (
                                            <Link href={route("password.edit")}>
                                                <LockOutlined /> Change Password
                                            </Link>
                                        ),
                                        key: "2",
                                    },
                                    {
                                        label: (
                                            <Popconfirm
                                                title="Logout"
                                                description="Are you sure to logout the page?"
                                                onConfirm={handleLogout}
                                                okButtonProps={{ shape: "round", type: "primary", className: "okbtn" }}
                                                okText="Yes"
                                                cancelText="No"
                                                cancelButtonProps={{ shape: "round", type: "primary", danger: true }}
                                            >
                                                <Button
                                                    type="link"
                                                    style={{ color: "red" }}
                                                    icon={<LogoutOutlined />}
                                                >
                                                    LogOut
                                                </Button>
                                            </Popconfirm>
                                        ),
                                        key: "3",
                                    },
                                ],
                            }}
                        >
                            <a
                                onClick={(e) => e.preventDefault()}
                                style={{
                                    marginTop: "7px",
                                    marginRight: "35px",
                                    padding: "0px",
                                    color: "white",
                                }}
                            >
                                <Space>
                                    <Image
                                        style={avatarimageStyle}
                                        src={avatarImage}
                                        preview={false}
                                        alt="User Avatar"
                                    />
                                    <DownOutlined />
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                </header>

                {/* Page Content */}
                <main className="p-6">
                    {children}
                </main>
            </div>
        </div>
    );
}
