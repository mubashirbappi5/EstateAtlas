import LoginForm from '@/components/Auth/LoginForm';
import React from 'react';

const Login = () => {
    return (
        <div>
          
          <div className="flex relative overflow-hidden items-center justify-center h-screen">
              <LoginForm />

              <div
  className="absolute lg:flex hidden top-40 -right-40 w-[500px] h-[500px] rounded-full z-0 pointer-events-none blur-xl opacity-40"
  style={{
    background: "radial-gradient(circle at center, rgba(59, 161, 223, 0.5) 0%, rgba(59, 161, 223, 0.2) 60%, rgba(255, 255, 255, 0) 100%)",
  }}
></div>
              <div
  className="absolute lg:flex hidden -top-40 -left-40 w-[500px] h-[500px] rounded-full z-0 pointer-events-none blur-xl opacity-40"
  style={{
    background: "radial-gradient(circle at center, rgba(59, 161, 223, 0.5) 0%, rgba(59, 161, 223, 0.2) 60%, rgba(255, 255, 255, 0) 100%)",
  }}
></div>
        </div>
        </div>
    );
};

export default Login;