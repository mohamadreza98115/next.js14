'use client'
import Input from "@/app/ui/Input";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod"
import loginSchema from "@/app/(auth)/login/schema";
import {AtSymbolIcon, UserIcon} from "@heroicons/react/24/outline";
import clsx from "clsx";

type FormValueTypes = z.infer<typeof loginSchema>

interface Props {
    callbackUrl?: string | undefined;
}

const Login = ({callbackUrl}: Props) => {
    const {control, handleSubmit, formState: {errors, isSubmitting}} = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {email: "", password: "", error: ""}
    });


    const handleLogin: SubmitHandler<FormValueTypes> = async (values) => {
        console.log(values)
    }

    return (
        <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-group">
                <Input label={"Email"} icon={<AtSymbolIcon className={"h-5 w-5"}/>} type={"email"} control={control}
                       name={"email"} error={errors.email}/>


                <Input label={"Password"} icon={<UserIcon className={"h-5 w-5"}/>} type={"password"} control={control}
                       name={"password"} error={errors.password}/>

                <div className="form-field">
                    <div className="form-control justify-between">
                        <div>
                            <input type="checkbox" className="checkbox mr-1"/>
                            <a href="#">Remember me</a>
                        </div>
                        <label className="form-label">
                            <a className="link link-underline-hover link-primary text-sm">Forgot your
                                password?</a>
                        </label>
                    </div>
                </div>

                <div className="form-field pt-5">
                    <div className="form-control justify-between">
                        <button type="submit"
                                className={clsx("btn btn-primary w-full", isSubmitting && "btn-loading")}>Sign in
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Login;