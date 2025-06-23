import React, { useState } from 'react';
import { Modal } from 'antd';

const BuyerRfqForm = () => {
    const [open, setOpen] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate submission
        setSubmitted(true);

        // Reset form and modal after a short delay
        setTimeout(() => {
            setOpen(false);
            setSubmitted(false);
        }, 2000);
    };

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
            >
                RFQ
            </button>

            <Modal
                title="Request for Quotation (RFQ)"
                open={open}
                onCancel={() => {
                    setOpen(false);
                    setSubmitted(false);
                }}
                footer={null}
                centered
            >
                {submitted ? (
                    <div className="text-green-600 text-center font-semibold py-6">
                        ✅ Your RFQ has been submitted successfully!
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="block font-medium text-sm">Product Name</label>
                            <input
                                type="text"
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                                placeholder="Enter product name"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="block font-medium text-sm">Quantity</label>
                            <input
                                type="number"
                                className="w-full px-3 py-2 border border-gray-300 rounded"
                                placeholder="Enter quantity"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block font-medium text-sm">Description</label>
                            <textarea
                                rows="3"
                                className="w-full px-3 py-2 h-24 border border-gray-300 rounded"
                                placeholder="Describe your requirements"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
                        >
                            Submit RFQ
                        </button>
                    </form>
                )}
            </Modal>
        </>
    );
};

export default BuyerRfqForm;
