import React from 'react';
import { Link, usePage, useForm } from '@inertiajs/react';
import {
    Button,
    Layout,
    theme,
    Dropdown,
    Space,
    Image,
    Popconfirm,
    Menu
} from "antd";
import {
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    DownOutlined,
    SettingOutlined,
    LockOutlined,
    AppstoreOutlined,
    BgColorsOutlined,
    FormatPainterOutlined,
    AppstoreAddOutlined
} from "@ant-design/icons";
import '@/Pages/Home/Home.css';
import Sidebar from  "@/Layouts/Sidebar";

export default function AdminLayout({ children }) {
    const user = usePage().props.auth.user;
    const setting = usePage().props.setting;
    const { url } = usePage();
    const { auth } = usePage().props;
    // CSS //
    const avatarImage = user.profile ? user.profile : "/images/avatar.png";
    const avatarimageStyle = {
        height: "25px",
        width: "25px",
        position: "relative",
        top: "7px",
        borderRadius: "50%",
    };
    // const logoImage = setting.logo;
    const imageStyle = {
        height: "65px",
        marginLeft: "1em",
        width: "80px",
        // display: "block",
        objectFit: "contain",
        // background: "white"
    };
    const { post, put } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });
    const isActive = (routeName) => url.startsWith(route(routeName));
    const handleLogout = () => {
        post(route("admin.logout"), {
            onError: (errors) => {
                console.log("errors", errors);
            },
            onSuccess: (values) => {
                // console.log("vaaaa", values);
            },
        });
    };

    const { SubMenu } = Menu;
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
                    <h1 className="text-xl font-semibold">Textile</h1>
                    <div className="flex items-center space-x-4 relative">
                        {auth?.user?.profile_image ? (
                            <img
                                src={`/storage/${auth.user.profile_image}`}
                                alt="User profile"
                                className="w-8 h-8 rounded-full object-cover"
                            />
                        ) : (
                            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                                <span className="text-xs text-gray-600">
                                    {auth?.user?.name?.charAt(0).toUpperCase() || 'A'}
                                </span>
                            </div>
                        )}
                        <span className="text-sm text-gray-700"> {auth?.user?.name || 'Admin'}</span>
                        {/* Dropdown */}
                        <div className="relative group">
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
                                                    // okType="primary"
                                                    okText="Yes"
                                                    cancelText="No"
                                                    cancelButtonProps={{
                                                        shape: "round",
                                                        type: "primary",
                                                        danger: true,
                                                    }}
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
                                        float: "right",
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
                                            alt="Logo"
                                        />

                                        {/* {user.name} */}
                                        <DownOutlined />
                                    </Space>
                                </a>
                            </Dropdown>
                        </div>
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
