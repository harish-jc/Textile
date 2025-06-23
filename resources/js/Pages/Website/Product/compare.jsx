import React, { useState, useEffect } from "react";
import FrontLayout from "@/Layouts/FrontLayout";
import '@/Pages/Home/Home.css';

const Compare = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem("compareList");
        if (stored) {
            setProducts(JSON.parse(stored));
        }
    }, []);

    if (products.length === 0) {
        return (
            <FrontLayout>
                <div className="py-24 px-4 sm:px-10 text-center">
                    <h2 className="text-xl font-bold text-black">No products to compare!</h2>
                </div>
            </FrontLayout>
        );
    }

    return (
        <FrontLayout>
            <div className="py-10 px-4 sm:px-10">
                <h2 className="text-2xl font-bold mb-6">Compare Products</h2>

                {/* Comparison table */}
                <div className="overflow-x-auto rounded  ">
                    <table className="min-w-[600px] w-full text-left">
                        <tbody>
                            {/* Image */}
                            <tr className="border-t">
                                <td className="p-4 font-medium text-black">Product Information</td>
                                {products.map((p) => (
                                    <td key={p.id} className="p-4 text-center bg-white">
                                        <img src={p.image} alt={p.name} className="h-28 mb-2 mx-auto object-contain rounded" />
                                        <p className=" font-semibold mb-2 text-black">{p.name}</p>
                                    </td>
                                ))}
                            </tr>

                            {/* Price */}
                            <tr className="border-t">
                                <td className="p-4 font-medium text-black">Price</td>
                                {products.map((p) => (
                                    <td key={p.id} className="p-4 text-center bg-white">
                                        <div className="text-base font-bold text-black">&#8377;{p.price}</div>
                                        <div className="text-black">Min. order: 1 pair</div>
                                    </td>
                                ))}
                            </tr>

                            {/* Shipping (static for now) */}
                            <tr className="border-t">
                                <td className="p-4 font-medium text-black">Shipping</td>
                                {products.map((p, i) => (
                                    <td key={i} className="p-4 text-center text-black bg-white">&#8377;{19 + i * 5}.00 for 1 pair</td>
                                ))}
                            </tr>

                            {/* Remove button */}
                            <tr className="border-t">
                                <td className="p-4 font-medium text-black">Action</td>
                                {products.map((p) => (
                                    <td key={p.id} className="p-4 text-center bg-white">
                                        <button
                                            className="text-red-600 hover:underline"
                                            onClick={() => {
                                                const updated = products.filter((prod) => prod.id !== p.id);
                                                setProducts(updated);
                                                localStorage.setItem("compareList", JSON.stringify(updated));
                                            }}
                                        >
                                            Remove
                                        </button>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </FrontLayout>
    );
};

export default Compare;
