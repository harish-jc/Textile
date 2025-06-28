import { Link, usePage } from '@inertiajs/react';
import { Menu } from 'antd';
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
} from '@ant-design/icons';

const { SubMenu } = Menu;

export default function Sidebar() {
    const { url, location } = usePage();
    const isActive = (routeName) => url.startsWith(route(routeName));

    return (
        <aside className="w-64 bg-gray-900 text-white h-screen overflow-y-auto">
            <div className="p-4 text-2xl font-bold border-b border-gray-700">
                Admin Panel
            </div>

            <nav className="mt-6 px-4">
                <ul className="space-y-3">

                    <li>
                        <Link
                            href={route("admin.dashboard")}
                            className={`flex items-center gap-2 px-3 py-2 rounded text-base font-medium ${isActive("admin.dashboard")
                                ? "bg-gray-700"
                                : "hover:bg-gray-700"
                                }`}
                        >
                            <DashboardOutlined />
                            Dashboard
                        </Link>
                    </li>

                    <li>
                        <Menu
                            mode="inline"
                            theme="dark"
                            defaultOpenKeys={["master"]}
                            selectedKeys={[window.location.pathname]}
                            style={{
                                backgroundColor: "transparent",
                                borderRight: "none",
                            }}
                            inlineIndent={16}
                        >
                            <SubMenu
                                key="master"
                                icon={<AppstoreOutlined />}
                                title={
                                    <span className="flex items-center gap-2 py-2 text-base font-medium">
                                        Master Entry
                                    </span>
                                }
                            >
                                <Menu.Item key="/admin/colors" icon={<BgColorsOutlined />}>
                                    <Link href="/admin/colors">Colors</Link>
                                </Menu.Item>
                                <Menu.Item key="/admin/patterns" icon={<FormatPainterOutlined />}>
                                    <Link href="/admin/patterns">Patterns</Link>
                                </Menu.Item>
                                <Menu.Item key="/admin/materials" icon={<AppstoreAddOutlined />}>
                                    <Link href="/admin/materials">Materials</Link>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </li>

                    <li>
                        <Link
                            href="#"
                            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-700 text-base font-medium"
                        >
                            <TeamOutlined />
                            Vendors
                        </Link>
                    </li>

                    <li>
                        <Link
                            href={route("admin.products.index")}
                            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-700 text-base font-medium"
                        >
                            <ShopOutlined />
                            Products
                        </Link>
                    </li>

                    <li>
                        <Link
                            href={route('admin.categories.index')}
                            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-700 text-base font-medium"
                        >
                            <TagsOutlined />
                            Categories
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="#"
                            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-700 text-base font-medium"
                        >
                            <ShoppingCartOutlined />
                            Orders
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="#"
                            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-700 text-base font-medium"
                        >
                            <CreditCardOutlined />
                            Payments
                        </Link>
                    </li>

                    <li>
                        <Link
                            href="#"
                            className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-700 text-base font-medium"
                        >
                            <PictureOutlined />
                            Banners
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}
