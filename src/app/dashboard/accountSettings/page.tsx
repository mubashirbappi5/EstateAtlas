
import SecurityForm from '@/components/dashboard/Account/login-security-form';
import Notification from '@/components/dashboard/Account/notification-preferences';
import ProfileSettings from '@/components/dashboard/Account/ProfileSettings';

import React from 'react';

const accountSettings = () => {
    return (
        <div className='space-y-4 md:space-y-0'>
            <ProfileSettings/>
            <SecurityForm/>
            <Notification/>

            
            
        </div>
    );
};

export default  accountSettings;