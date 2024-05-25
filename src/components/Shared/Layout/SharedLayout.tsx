// components/SharedLayout.tsx
import React from 'react';

const SharedLayout: React.FC = ({ children }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8 ">
            {children}
        </div>
    );
};

export default SharedLayout;
