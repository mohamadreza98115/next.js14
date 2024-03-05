import {Control, Controller, FieldError, FieldErrorsImpl, FieldValue, Merge} from "react-hook-form";
import React, {HTMLInputTypeAttribute} from "react";
import ErrorMessage from "@/app/ui/ErrorMessage";
import clsx from 'clsx'

interface FormFieldProps {
    label: string;
    type: HTMLInputTypeAttribute;
    icon?: React.ReactNode;
    control: Control<FieldValue<any>>;
    name: string;
    error: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}

const FormField: React.FC<FormFieldProps> = ({name, control, label, type, icon, error}) => {
    return (
        <Controller control={control} name={name} render={({field}) => {
            return <div className={clsx("form-field")}>
                <label className="form-label">{label}</label>
                <div className={'form-control relative w-full'}>
                    <input placeholder="Type here" type={type} {...field}
                           className={clsx("input input-lg max-w-full",icon && "pl-10", error?.message && "input-error")}/>
                    {icon && <span className="absolute inset-y-0 left-3 inline-flex items-center dark:text-gray-300">
                    {icon}
                </span>}
                </div>
                <ErrorMessage>
                    {error?.message as string}
                </ErrorMessage>
            </div>;
        }}
        />
    );
};

export default FormField;

