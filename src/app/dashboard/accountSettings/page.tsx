import SecurityForm from '@/components/dashboard/Account/login-security-form';
import ProfileSettings from '@/components/dashboard/Account/ProfileSettings';
import React from 'react';

const accountSettings = () => {
    return (
        <div>
            <ProfileSettings/>
            <SecurityForm/>

            
            
        </div>
    );
};

export default accountSettings;