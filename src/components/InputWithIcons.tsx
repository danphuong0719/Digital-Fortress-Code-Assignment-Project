import React, { ReactElement } from "react";
import { IconType } from "react-icons";
import { MdOutlineMail } from "react-icons/md";

type Props = {
    inputProps: React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    >;
    labelProps: React.DetailedHTMLProps<
        React.LabelHTMLAttributes<HTMLLabelElement>,
        HTMLLabelElement
    >;
    LeftIcon: IconType;
    labelText: string;
};

const InputWithIcons = ({
    inputProps: { className, ...restInputProps },
    LeftIcon,
    labelProps,
    labelText,
}: Props) => {
    return (
        <div className="relative">
            <LeftIcon
                className="absolute top-[42px] left-4 text-xl text-white"
                color="white"
            />
            <label {...labelProps}>{labelText}</label>
            <input {...restInputProps} className={`${className} pl-11`} />
        </div>
    );
};

export default InputWithIcons;
