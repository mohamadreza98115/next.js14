import Login from "@/app/(auth)/login/Login";
import Link from "next/link";
import {GithubIcon, GoogleIcon, TwitterIcon} from "@/app/ui/icons";

interface Props {
    callbackUrl?: string | undefined;
}

const LoginPage = ({callbackUrl}: Props) => {
    return (
        <article className={"flex flex-col w-full gap-y-4 pt-10 justify-center items-center "}>
            <div className="flex flex-col gap-2">
                <h2 className="text-center text-2xl font-semibold">Sign In</h2>
                <p className="mx-auto max-w-xs text-sm text-content2">Sign in to your account to continue.</p>
            </div>
            <Login callbackUrl={callbackUrl}/>
            <div className="divider text-sm">Login with social accounts</div>
            <div className="flex justify-center space-x-4">
                <button type="button" aria-label="Log in with Google" className="rounded-sm p-3">
                    <GoogleIcon/>
                </button>
                <button type="button" aria-label="Log in with Twitter" className="rounded-sm p-3">
                    <TwitterIcon/>
                </button>
                <button type="button" aria-label="Log in with GitHub" className="rounded-sm p-3">
                    <GithubIcon/>
                </button>
            </div>

            <div className="items-center justify-center text-xs dark:text-gray-5 sm:px-6 flex gap-2">
                <span className={"text-gray-700 dark:text-gray-300"}>Don&apos;t have an account?</span>
                <Link rel="noopener noreferrer" href="/register" className="link link-primary link-underline text-xs">Sign
                    up</Link>
            </div>

        </article>
    );
};

export default LoginPage;