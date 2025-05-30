import { ErrorBoundary } from "react-error-boundary";
import ErrorRetryThrow from "./ErrorRetryThrow";
import ErrorFallback from "./ErrorFallback.jsx";

export default function ErrorRetryRoot() {
    const handleFallback = ({ error, resetErrorBoundary }) => {
        const handleClick = () => resetErrorBoundary();
        return (
            <div>
                <h4>다음 오류가 발생했다.</h4>
                <p>{error.message}</p>
                <button type="button" onClick={handleClick}>
                    Retry
                </button>
            </div>
        );
    };

    const handleReset = () => console.log('Retry!!');

    return (
        <div>
            <h3>Error Boundary의 기본</h3>
            <ErrorBoundary
                onReset={handleReset}
                fallbackRender={handleFallback}
                FallbackComponent={ErrorFallback}
                >
                <ErrorRetryThrow />
            </ErrorBoundary>
        </div>
    );
}