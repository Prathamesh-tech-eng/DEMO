// src/pages/SignInPage.jsx
import React from 'react';
import { SignUp } from '@clerk/clerk-react';

function SignInPage() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
        <SignUp />
    </div>
  );
}

export default SignInPage;