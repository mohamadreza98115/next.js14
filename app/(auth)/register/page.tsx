import SignUp from "@/app/(auth)/register/SignUp";
import Link from "next/link";

const RegisterPage = () => {
    return (
        <article className={"w-full flex justify-center flex-col items-center p-4"}>
            <div className="flex flex-col gap-2 py-4">
                <h2 className="text-center text-2xl font-semibold">Sign Up</h2>
                <p className="mx-auto max-w-xs text-sm text-content2">Create an Account.</p>
            </div>
            <SignUp/>
            <div className="divider"></div>
            <div className="items-center justify-center text-xs dark:text-gray-5 sm:px-6 flex gap-2">
                <span className={"text-gray-700 dark:text-gray-300"}>Already have an account?</span>
                <Link rel="noopener noreferrer" href="/login" className="link link-primary link-underline text-xs">Log
                    in</Link>
            </div>
        </article>
    );
};

export default RegisterPage;