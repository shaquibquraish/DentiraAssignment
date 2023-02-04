import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'
import './InputField.scss'

interface InputFieldProps {
    name: string,
    register: UseFormRegister<FieldValues>,
    label?: string
    type?: string
    placeholder?: string,
    isDisabled?: boolean,
    error?: any,
    maxLength?: number,
    accept?: string,
    min?: string
}

const InputField = ({
    label,
    type = "text",
    placeholder,
    isDisabled,
    error,
    maxLength = 24,
    name,
    register,
    accept,
    min
}: InputFieldProps) => {
    return (
        <div >
            {label ? <label className="form-label">{label}</label>: null}
                <input
                    type={type}
                    className={error ? 'form-control form-error' : 'form-control'}
                    placeholder={placeholder}
                    disabled={isDisabled}
                    maxLength={maxLength}
                    accept={accept}
                    min={min}
                    {...register(name)}
                />
                {error ? <span className="error text-danger label">{error}</span> : null}
        </div>
    )
}

export default InputField