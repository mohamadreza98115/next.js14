import React, {ReactNode} from 'react';

type Props = {
    children: ReactNode;
}
const ErrorMessage = ({children}: Props) => {
    if (!children) {
        return null;
    }
    return (
        <label className="form-label">
            <span className="form-label-alt text-error">{children}</span>
        </label>
    );
};

export default ErrorMessage;