// eslint-disable-next-line unicorn/filename-case
import React from "react";
export const BreakSessionContainer = ({children, ...props}) => (
    <div className={"flex flex-col items-center"} {...props}>
        {children}
    </div>
);
// eslint-disable-next-line react/no-multi-comp
export const BreakSessionLabel = ({children, ...props}) => (
    <p className={"text-lg text-red-50"} {...props}>
        {children}
    </p>
);
// eslint-disable-next-line react/no-multi-comp
export const BreakSessionTime = ({children, ...props}) => (
    <p className={"text-4xl font-bold text-white"} {...props}>
        {children}
    </p>
);
// eslint-disable-next-line react/no-multi-comp
export const PlusMinusButtonContainer = ({children, ...props}) => (
    <div className={"grid grid-flow-col gap-2 rounded"} {...props}>
        {children}
    </div>
);
// eslint-disable-next-line react/no-multi-comp
export const PlusMinusButton = ({children, ...props}) => (
    <button
        type={"button"}
        className={"mt-2 text-lg text-gray-800 px-4 py-2 bg-red-200 rounded"}
        {...props}>
        {children}
    </button>
);
