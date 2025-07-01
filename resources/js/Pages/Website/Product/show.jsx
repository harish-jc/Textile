import React, { useState } from 'react';
import { useForm, router, usePage } from '@inertiajs/react';
import FrontLayout from '@/Layouts/FrontLayout';
import '@/Pages/Home/Home.css';
import BuyerRfqForm from '../RFQ/buyerrfqform';
import { Drawer, Form, Input, Button, message, Upload } from 'antd';
import { PaperClipOutlined } from '@ant-design/icons';

const products = [
    {
        id: 40,
        name: 'Cotton Poplin (Premium)',
        price: '550',
        imgSrc: '/storage/img/products/f-product-1-1.png',
        offer: "35% off",
        rating: 5,
        reviews: 25,
        title: "Premium Cotton Poplin Fabric",
        originalPrice: "850",
        discountedPrice: "550",
        specifications: {
            width: '44 inches',
            weight: '120 GSM',
            composition: '100% Cotton',
            color: 'White'
        }
    },
    {
        id: 41,
        name: 'Silk Chiffon (Printed Floral)',
        price: '1,350',
        imgSrc: '/storage/img/products/f-product-1-5.png',
        offer: "25% off",
        rating: 4,
        reviews: 18,
        title: "Luxury Silk Chiffon Fabric",
        originalPrice: "1,800",
        discountedPrice: "1,350",
        specifications: {
            width: '54 inches',
            weight: '60 GSM',
            composition: '100% Silk',
            color: 'Floral Print'
        }
    },
    {
        id: 42,
        name: 'Linen-Cotton Blend (Natural)',
        price: '850',
        imgSrc: '/storage/img/products/f-product-1-3.png',
        offer: "15% off",
        rating: 4.5,
        reviews: 32,
        title: "Breathable Linen-Cotton Mix",
        originalPrice: "1,000",
        discountedPrice: "850",
        specifications: {
            width: '58 inches',
            weight: '180 GSM',
            composition: '55% Linen, 45% Cotton',
            color: 'Natural Beige'
        }
    },
    {
        id: 43,
        name: 'Wool Tweed (Charcoal)',
        price: '1,500',
        imgSrc: '/storage/img/products/f-product-1-4.png',
        offer: "20% off",
        rating: 4.8,
        reviews: 14,
        title: "Premium Wool Tweed Fabric",
        originalPrice: "1,875",
        discountedPrice: "1,500",
        specifications: {
            width: '60 inches',
            weight: '320 GSM',
            composition: '100% Wool',
            color: 'Charcoal Grey'
        }
    },
];
message.config({
    duration: 2,
    maxCount: 3,
});
const Show = ({ product }) => {
    // for send inquiry
    const [inquiryOpen, setInquiryOpen] = useState(false);

    const [activeTab, setActiveTab] = useState('Description');
    const { post } = useForm();
    const [showQuickView, setShowQuickView] = useState(false);
    const [quantity, setQuantity] = useState(1);

    // show notification wishlist and cart if user not logged in
    const { auth } = usePage().props;
    const user = auth?.user;
    const handleAddToCart = () => {
        if (!user) {
            message.info('Please login to add to cart');
            return;
        }
        // Save to localStorage
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const alreadyInCart = cart.find(item => item.id === product.id);

        if (!alreadyInCart) {
            cart.push({ ...product, quantity });
            localStorage.setItem('cart', JSON.stringify(cart));
            message.success('Added to Cart!');
        } else {
            message.warning('Already in Cart');
        }
    };
    const handleAddToWishlist = () => {
        if (!user) {
            message.info('Please login to add to wishlist');
            return;
        }
        const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const alreadyInWishlist = wishlist.find(item => item.id === product.id);

        if (!alreadyInWishlist) {
            wishlist.push(product);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            message.success('Added to Wishlist!');
        } else {
            message.warning('Already in Wishlist');
        }
    };

    const handleRelatedQuickView = (product) => {
        setShowQuickView(true);
        setQuickViewProduct(product); // Create this state below
    };

    const [quickViewProduct, setQuickViewProduct] = useState(null);

    const basePrice = parseFloat(product.price || product.originalPrice || 0);

    // Bulk pricing discount tiers (based on base price)
    const bulkPricing = [
        { min: 1, max: 4.99, discount: 0 },      // no discount
        { min: 5, max: 19.99, discount: 0.1 },   // 10% off
        { min: 20, max: 49.99, discount: 0.15 }, // 15% off
        { min: 50, max: Infinity, discount: 0.25 } // 25% off
    ];

    // Get per meter price based on quantity
    const getPricePerMeter = (qty) => {
        for (const tier of bulkPricing) {
            if (qty >= tier.min && qty <= tier.max) {
                return (basePrice * (1 - tier.discount)).toFixed(2);
            }
        }
        return basePrice.toFixed(2);
    };

    const pricePerMeter = getPricePerMeter(quantity);
    const totalPrice = (pricePerMeter * quantity).toFixed(2);

    return (
        <>
            <section className="mt-12 mb-0 bg-gray-50 container">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-10 items-center">
                        <img
                            src={product.imgSrc}
                            alt={product.title}
                            className="w-full md:w-1/2 h-96 object-cover rounded-lg shadow-md"
                        />
                        <div className="md:w-1/2">
                            <h1 className="text-2xl font-bold mb-3 lycoris-color">{product.title}</h1>

                            {/* Rating */}
                            <div className="flex items-center mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                        key={star}
                                        className={`w-5 h-5 ${star <= Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                                <span className="ml-2 text-gray-600">{product.rating.toFixed(1)}/5.0</span>
                            </div>

                            <p className="text-lg font-semibold text-green-600 mb-4">&#8377;{product.price || product.originalPrice} / meter</p>
                            <p className="text-black mb-4">{product.description}</p>

                            {/* Quantity + Total  */}
                            <div className="mb-6">
                                <label className="block mb-1 font-medium text-black">
                                    Quantity (in meters)
                                </label>
                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded text-xl"
                                        onClick={() => setQuantity(prev => Math.max(0.25, (prev - 0.25)))}
                                    >
                                        −
                                    </button>
                                    <span className="px-3 py-1 border rounded bg-white w-20 text-center">{quantity}</span>
                                    <button
                                        type="button"
                                        className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded text-xl"
                                        onClick={() => setQuantity(prev => parseFloat((prev + 0.25).toFixed(2)))}
                                    >
                                        +
                                    </button>
                                </div>
                                <p className="mt-2 text-black">
                                    <strong>Total Price : </strong>
                                    &#8377;{totalPrice}
                                </p>
                            </div>


                            {/* Buttons */}
                            <div className="mt-6 flex flex-wrap sm:flex-nowrap items-center gap-3">
                                <button
                                    onClick={handleAddToCart}
                                    className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    {/* <i className="fas fa-shopping-cart"></i> */}
                                    Add to Cart
                                </button>
                                <button
                                    type="button"
                                    className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                                    onClick={handleAddToWishlist}
                                >
                                    <i className="fas fa-heart"></i>
                                </button>


                                {/* <button
                                    type="button"
                                    className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-black"
                                    onClick={() => setShowQuickView(true)}
                                    aria-label="Quick view"
                                >
                                    <i className="fas fa-eye"></i>
                                </button> */}
                                <BuyerRfqForm />
                                <button
                                    type="button"
                                    className="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                                    onClick={() => setInquiryOpen(true)}
                                >
                                    Inquiry
                                </button>
                            </div>

                            {/* Inquiry Modal */}
                            <Drawer
                                title="Send Inquiry"
                                placement="right"
                                width={560}
                                onClose={() => setInquiryOpen(false)}
                                open={inquiryOpen}
                            >
                                <Form
                                    layout="vertical"
                                    onFinish={(values) => {
                                        console.log("Inquiry values:", values);
                                        message.success("Inquiry submitted!");
                                        setInquiryOpen(false);
                                    }}
                                    initialValues={{
                                        To: "Textile Vendor"
                                    }}
                                >
                                    <Form.Item label="To" name="To">
                                        <Input disabled />
                                    </Form.Item>

                                    <Form.Item label="Your Name" name="name" >
                                        <Input placeholder="Enter your name" />
                                    </Form.Item>

                                    {/* <Form.Item label="Email" name="email" rules={[{ type: 'email' }]}>
                                        <Input placeholder="Enter your email" />
                                    </Form.Item> */}
                                    <Form.Item label="Phone Number" name="phone" rules={[{ required: true, message: 'Please enter your phone number' }]}>
                                        <Input placeholder="Enter your phone number" />
                                    </Form.Item>
                                    <Form.Item name="attachment" valuePropName="fileList" getValueFromEvent={e => e.fileList}>
                                        <Upload
                                            name="file"
                                            beforeUpload={() => false}
                                            showUploadList={true}
                                            multiple
                                        >
                                            <Button
                                                type="link"
                                                icon={<PaperClipOutlined />}
                                                className="text-black text-sm p-0"
                                            >
                                                Add attachment
                                            </Button>
                                        </Upload>
                                    </Form.Item>


                                    <Form.Item label="Message" name="message" rules={[{}]}>
                                        <Input.TextArea rows={4} placeholder='Please share more details.' />
                                    </Form.Item>

                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Drawer>


                        </div>
                    </div>

                    {/* Bulk Pricing Table */}
                    <div className="m-4 border-gray-200 p-3">
                        <h3 className="font-semibold text-gray-800 mb-2 text-xl">Bulk Pricing (Per Meter)</h3>
                        <table className=" w-full">
                            <thead>
                                <tr className="border-b text-left">
                                    <th className="py-1 text-black">Quantity (Meters)</th>
                                    <th className="py-1 text-black">Price</th>
                                </tr>
                            </thead>
                            <tbody className="text-black p-12">
                                {bulkPricing.map((tier, i) => {
                                    const discounted = (basePrice * (1 - tier.discount)).toFixed(2);
                                    return (
                                        <tr key={i} className="border-b">
                                            <td className="py-1">
                                                {tier.max === Infinity
                                                    ? `${tier.min}+`
                                                    : `${tier.min} - ${tier.max}`}
                                            </td>
                                            <td className="py-1 text-green-700 font-medium">₹{discounted}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <section className="mt-0 mb-4 bg-gray-50 container">
                <div className="mt-10 container mx-auto px-4">
                    <div className="border-b border-gray-200 mb-4">
                        <nav className="flex space-x-8" aria-label="Tabs">
                            {['Description', 'Additional Info',].map((tab) => (
                                <button
                                    key={tab}
                                    className={`py-2 px-1 border-b-2 text-xl ${activeTab === tab
                                        ? 'border-blue-600 text-blue-600'
                                        : 'border-transparent text-black hover:text-gray-700 hover:border-gray-300'
                                        }`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Tab Contents */}
                    <div className="text-left text-gray-900 leading-relaxed space-y-4">
                        {activeTab === 'Description' && (
                            <>
                                <p><strong className='text-black'>Count :</strong> 60s</p>
                                <p><strong className='text-black'>Origin :</strong> Gujarat</p>
                                <p><strong className='text-black'>Width of material :</strong> 150cm</p>
                                <hr className='text-gray-400 m-2' />
                                <p className='text-black'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, quo excepturi, consequuntur blanditiis libero qui quod rerum quae odio commodi dicta expedita reiciendis corrupti dolore nulla aliquam iste ratione, incidunt consequatur sapiente placeat? Consequuntur similique, possimus vero dolor praesentium, dicta aspernatur odio expedita, beatae eum non nisi. Id quis dolores animi atque nihil beatae commodi dolore expedita necessitatibus, velit ex rem eius voluptatem molestiae, cupiditate sunt autem temporibus consectetur. Ut, nihil nobis, eligendi tenetur ab ipsa eveniet repudiandae dolorem corrupti eius quaerat eum! Alias quia sapiente illum et totam tenetur. Facilis, tempora. Pariatur illum distinctio voluptatum nisi adipisci esse corrupti?</p>
                            </>
                        )}
                        {activeTab === 'Additional Info' && (
                            <>
                                <p><strong className='text-black'>Category :</strong> Fashion</p>
                                <p><strong className='text-black'>Material :</strong> Cotton</p>
                                <p><strong className='text-black'>Color :</strong> Blue</p>
                                <p><strong className='text-black'>Size :</strong> M, L, XL</p>
                            </>
                        )}
                        {/* {activeTab === 'Reviews' && (
                            <>
                                <p>No reviews yet.</p>
                                <button
                                    className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                    onClick={() => alert('Open review modal')}
                                >
                                    Write a Review
                                </button>
                            </>
                        )} */}
                    </div>
                </div>
            </section>
            <section className='container'>

                <div className="xc-product-eight pb-20">
                    <div className="container">
                        <div className="xc-sec-heading xc-sec-heading-three text-left">
                            <h4 className="lycoris-color">Related Products</h4>
                        </div>
                        <div className="row gutter-y-30 ">
                            {products.map((product) => (
                                <div key={product.id} className="col-lg-3 col-md-6">
                                    <div className="xc-product-eight__item">
                                        <div className="xc-product-eight__img">
                                            <img src={product.imgSrc} alt="fas" />
                                            <span className="xc-product-eight__offer">{product.offer}</span>
                                            <div className="xc-product-eight__icons">
                                                <button className="xc-product-eight__action"
                                                    onClick={() => handleAddToWishlist(product)}>
                                                    <i className="fas fa-heart"></i>
                                                    <span className="xc-product-eight__tooltip">Add To Wishlist</span>
                                                </button>
                                                <button className="xc-product-eight__action"
                                                    onClick={() => handleRelatedQuickView(product)}>
                                                    <i className="fas fa-eye"></i>
                                                    <span className="xc-product-eight__tooltip">Quick View</span>
                                                </button>
                                                <button className="xc-product-eight__action"
                                                    onClick={() => handleAddToCart(product)} >
                                                    <i className="fas fa-shopping-bag"></i>
                                                    <span className="xc-product-eight__tooltip">Add To Cart</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="xc-product-eight__content">
                                            {/* <div className="xc-product-eight__ratting">
                                                {renderRating(product.rating)}
                                                ({product.reviews} Reviews)
                                            </div> */}
                                            {/* <h5 className="xc-product-eight__price"><del className='pr-2'>{product.originalPrice}</del> {product.discountedPrice}</h5> */}
                                            <h3 className="xc-product-eight__title"><a href="#">{product.title}</a></h3>
                                            <div className="mt-0">
                                                {product.originalPrice && (
                                                    <span className="text-gray-400 text-sm line-through ml-0 pr-2">&#8377;{product.originalPrice}</span>
                                                )}
                                                <span className="text-gray-900 text-xl font-bold">&#8377;{product.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </section>
            {showQuickView && quickViewProduct && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9999,
                        padding: '16px',
                        boxSizing: 'border-box',
                    }}
                >
                    <div
                        style={{
                            backgroundColor: '#fff',
                            borderRadius: '12px',
                            width: '100%',
                            maxWidth: '800px',
                            maxHeight: '90%',
                            overflowY: 'auto',
                            position: 'relative',
                            padding: '20px',
                            display: 'flex',
                            flexDirection: window.innerWidth < 640 ? 'column' : 'row',
                            gap: '20px',
                        }}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => {
                                setShowQuickView(false);
                                setQuickViewProduct(null);
                            }}
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                fontSize: '24px',
                                border: 'none',
                                background: 'transparent',
                                cursor: 'pointer',
                            }}
                        >
                            &times;
                        </button>

                        {/* Image */}
                        <div
                            style={{
                                flex: '1',
                                minWidth: '220px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <img
                                src={quickViewProduct.imgSrc || quickViewProduct.image}
                                alt={quickViewProduct.title}
                                style={{
                                    width: '100%',
                                    maxWidth: '300px',
                                    height: 'auto',
                                    borderRadius: '8px',
                                    objectFit: 'cover',
                                }}
                            />
                        </div>

                        {/* Info */}
                        <div style={{ flex: '2', textAlign: window.innerWidth < 640 ? 'center' : 'left' }}>
                            <h2 style={{ marginBottom: '10px', fontSize: '20px' }}>{quickViewProduct.title}</h2>
                            <p style={{ marginBottom: '6px', fontSize: '16px' }}>
                                <strong>Price:</strong> ₹{quickViewProduct.price}
                            </p>
                            <p style={{ color: '#888', fontSize: '14px' }}>
                                ⭐ {quickViewProduct.rating?.toFixed(1)} / 5.0
                            </p>

                            {/* Buttons */}
                            <div
                                style={{
                                    marginTop: '20px',
                                    display: 'flex',
                                    flexDirection: window.innerWidth < 640 ? 'column' : 'row',
                                    gap: '10px',
                                    alignItems: 'center',
                                    justifyContent: window.innerWidth < 640 ? 'center' : 'flex-start',
                                }}
                            >
                                <button
                                    onClick={() => handleAddToCart(quickViewProduct)}
                                    style={{
                                        backgroundColor: '#3182ce',
                                        color: '#fff',
                                        padding: '10px 20px',
                                        border: 'none',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        width: window.innerWidth < 640 ? '100%' : 'auto',
                                    }}
                                >
                                    Add to Cart
                                </button>
                                <button
                                    onClick={() => handleAddToWishlist(quickViewProduct)}
                                    style={{
                                        backgroundColor: '#e53e3e',
                                        color: '#fff',
                                        padding: '10px 20px',
                                        border: 'none',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        width: window.innerWidth < 640 ? '100%' : 'auto',
                                    }}
                                >
                                    Add to Wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}



        </>
    );
};

Show.layout = (page) => <FrontLayout>{page}</FrontLayout>;

export default Show;
