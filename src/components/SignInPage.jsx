import { SignUp } from "@clerk/clerk-react";

export const SignInPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="p-8 bg-white shadow-lg rounded-2xl">
                <SignUp />
            </div>
        </div>
    );
};
