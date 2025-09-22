'use client';

import React, { useEffect } from 'react';
import Dashboard from '@/components/dashboard/Dashboard';
import { worker } from '@/mocks/browser'

const HomePage: React.FC = () => {
    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            worker.start();
        }
    }, []);

    return (
        <Dashboard />
    );
};

export default HomePage;
