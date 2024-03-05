"use client"
import userSchema from "@/app/(auth)/register/userSchema";
import {z} from 'zod'
import Input from "@/app/ui/Input";
import {AtSymbolIcon} from "@heroicons/react/16/solid";
import axios from "axios";
import {SubmitHandler, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {LockClosedIcon, UserIcon} from "@heroicons/react/24/outline";
import {useRouter} from "next/navigation";
import clsx from "clsx";
import delay from "delay";

type FormValueTypes = z.infer<typeof userSchema>
const SignUp = () => {
    const {control, reset, handleSubmit, formState: {errors, isSubmitting}} = useForm({
        resolver: zodResolver(userSchema),
        defaultValues: {firstName: "", lastName: "", email: "", password: ""}
    });
    const router = useRouter();
    const handleSubmitForm: SubmitHandler<FormValueTypes> = async (data) => {
        await delay(2000);
        axios.post("http://localhost:3000/api/users", data).then(res => {
            reset();
            router.push("/login")
        }).catch(error => {
            console.log(error);
        });
    }
    return (
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <div className="form-group gap-y-4">
                <div className={'flex  gap-x-2'}>
                    <Input label={"First Name"} icon={<UserIcon className={"h-5 w-5"}/>} type={"text"} control={control}
                           name={"firstName"}
                           error={errors.firstName}/>
                    <Input label={"Last Name"} icon={<UserIcon className={"h-5 w-5"}/>} type={"text"} control={control}
                           name={"lastName"}
                           error={errors.lastName}/>
                </div>


                <Input label={"Email"} icon={<AtSymbolIcon className={"h-5 w-5"}/>} type={'email'} control={control}
                       name={"email"} error={errors.email}/>

                <Input label={"Password"} icon={<LockClosedIcon className={"h-5 w-5"}/>} type={'password'}
                       control={control} name={'password'}
                       error={errors.password}/>

                {/*<div className="form-field">*/}
                {/*    <div className="form-control justify-between">*/}
                {/*        <div>*/}
                {/*            <input type="checkbox" className="checkbox"/>*/}
                {/*            <a href="#"> I agree to the Company <Link className={"link link-primary link-underline"}*/}
                {/*                                                      href={""}>User Agreement</Link> and <Link*/}
                {/*                href={""} className={"link link-primary link-underline"}>Privacy Policy</Link></a>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

                <div className="form-field pt-5">
                    <div className="form-control justify-between">
                        <button type="submit" disabled={isSubmitting}
                                className={clsx("btn btn-primary w-full", isSubmitting && "btn-loading")}>Register
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SignUp;