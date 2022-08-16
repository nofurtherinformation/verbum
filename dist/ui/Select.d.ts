/// <reference types="react" />
declare const Select: ({ onChange, className, options, value, }: {
    className: string;
    onChange: (event: {
        target: {
            value: string;
        };
    }) => void;
    options: [string, string][];
    value: string;
}) => JSX.Element;
export default Select;
