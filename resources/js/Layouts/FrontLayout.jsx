import React from 'react';
import Header from '@/Components/Header';// ✅ Import the Header component
import Footer from '@/Components/Footer';

export default function FrontLayout({ children }) {
  
    return (
        <>
       
            {/* Header Section */}
            <Header /> 

            {/* Main Content */}
            <main>{children}</main>

            {/* Footer Section */}
            <Footer />

       

        </>
    );
}
