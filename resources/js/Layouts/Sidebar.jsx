import { Link, usePage } from "@inertiajs/react";
import { Layout, Menu } from "antd";
import {
    AppstoreOutlined,
    AppstoreAddOutlined,
    FormatPainterOutlined,
    BgColorsOutlined,
    DashboardOutlined,
    ShopOutlined,
    TagsOutlined,
    ShoppingCartOutlined,
    CreditCardOutlined,
    PictureOutlined,
    TeamOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const { Sider } = Layout;

export default function Sidebar() {
    const { url } = usePage();
    const [collapsed, setCollapsed] = useState(false);

    const getActiveKey = () => {
        if (url.startsWith(route("admin.dashboard"))) return "dashboard";
        if (url.startsWith("/admin/colors")) return "colors";
        if (url.startsWith("/admin/patterns")) return "patterns";
        if (url.startsWith("/admin/materials")) return "materials";
        if (url.startsWith(route("admin.products.index"))) return "products";
        if (url.startsWith(route("admin.categories.index"))) return "categories";
        return "";
    };

    return (
        <Sider
            collapsible
            collapsed={collapsed}
            trigger={null}
            width={240}
            style={{ background: "#001529", minHeight: "100vh" }}
        >
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
                <div className={`text-white text-xl font-bold ${collapsed ? "hidden" : ""}`}>
                    Admin Panel
                </div>
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="text-white"
                >
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </button>
            </div>

            <Menu
                mode="inline"
                theme="dark"
                selectedKeys={[getActiveKey()]}
                defaultOpenKeys={[""]}
                style={{ borderRight: 0 }}
            >
                <Menu.Item key="dashboard" icon={<DashboardOutlined />}>
                    <Link href={route("admin.dashboard")}>Dashboard</Link>
                </Menu.Item>

                <Menu.SubMenu
                    key="master"
                    icon={<AppstoreOutlined />}
                    title="Master Entry"
                >
                    <Menu.Item key="categories" icon={<TagsOutlined />}>
                        <Link href={route("admin.categories.index")}>Categories</Link>
                    </Menu.Item>
                    <Menu.Item key="colors" icon={<BgColorsOutlined />}>
                        <Link href="/admin/colors">Colors</Link>
                    </Menu.Item>
                    <Menu.Item key="patterns" icon={<FormatPainterOutlined />}>
                        <Link href="/admin/patterns">Patterns</Link>
                    </Menu.Item>
                    <Menu.Item key="materials" icon={<AppstoreAddOutlined />}>
                        <Link href="/admin/materials">Materials</Link>
                    </Menu.Item>
                </Menu.SubMenu>

                <Menu.Item key="vendors" icon={<TeamOutlined />}>
                    <Link href={route('admin.vendors')}>Vendors</Link>
                </Menu.Item>

                <Menu.Item key="products" icon={<ShopOutlined />}>
                    <Link href={route("admin.products.index")}>Products</Link>
                </Menu.Item>



                <Menu.Item key="orders" icon={<ShoppingCartOutlined />}>
                    <Link href={route('admin.orders')}>Orders</Link>
                </Menu.Item>

                <Menu.Item key="payments" icon={<CreditCardOutlined />}>
                    <Link href={route('admin.payments')}>Payments</Link>
                </Menu.Item>

                {/* <Menu.Item key="banners" icon={<PictureOutlined />}>
                    <Link href="#">Banners</Link>
                </Menu.Item> */}
            </Menu>

            <style>{`
                .ant-menu-dark .ant-menu-item,
                .ant-menu-dark .ant-menu-submenu-title {
                    font-size: 16px !important;
                }
                .ant-menu-dark .ant-menu-item a,
                .ant-menu-dark .ant-menu-submenu-title a {
                    color: white !important;
                    font-size: 16px !important;
                }
            `}</style>
        </Sider>
    );
}
