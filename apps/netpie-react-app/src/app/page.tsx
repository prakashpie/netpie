'use client';

import React, { useEffect } from 'react';
import Dashboard from '@/components/dashboard/Dashboard';

const isDevelopment = process.env.NODE_ENV === 'development' || true;

const HomePage: React.FC = () => {
    useEffect(() => {
        async function initMocks() {
            if (isDevelopment) {
                const { worker } = await import('@/mocks/browser');
                await worker.start();
            }
        }
        initMocks()
    }, []);

    return (
        <Dashboard />
    );
};

export default HomePage;
