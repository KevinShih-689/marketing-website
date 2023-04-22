import React from "react"
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

type Props = {
    message: string;
};

const ErrorBoundary: React.FC<Props> = () => {

    const error: unknown = useRouteError();

    return(
        <div className="error-boundary">
            {
                isRouteErrorResponse(error)?
                (
                    error.error?.message || error.statusText
                ):
                <p>Unknown word</p>
            }
            <p>Something went wrong.</p>
        </div>
    )
}

export default ErrorBoundary