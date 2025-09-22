import React from 'react';
import { Metadata } from 'next';
import Dashboard from '@/components/dashboard/Dashboard';

const pageTitle = 'Moda - Moda';
export const metadata: Metadata = {
    title: pageTitle,
    openGraph: {
        title: pageTitle,
    },
    twitter: {
        title: pageTitle,
    },
};

const HomePage: React.FC = async () => {
    return (
        <Dashboard />
    );
};

export default HomePage;
