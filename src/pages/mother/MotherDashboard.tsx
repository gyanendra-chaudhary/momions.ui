import React from 'react';

const MotherDashboard = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold">Mother's Dashboard</h1>
            <p>Welcome to the Mother's Dashboard. Here you can manage your profile, view notifications, and access various features.</p>
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Profile</h2>
                <p>Manage your personal information and settings.</p>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Notifications</h2>
                <p>View your recent notifications and updates.</p>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Features</h2>
                <p>Explore the various features available to you as a mother.</p>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Support</h2>
                <p>If you need help, please contact our support team.</p>
            </div>
        </div>
    );
};

export default MotherDashboard;
