'use client'
type ErrorProps = {
    error: Error,
    reset: () => void
}

function ErrorComponent(props: ErrorProps){

    function retry(){
        props.reset();
    }

    return (
        <div>
            <h4>Something went wrong in about module</h4>
            <p>Message: {props.error.message}</p>

            <button onClick={retry}>Retry</button>
        </div>
    )
}

export default ErrorComponent;