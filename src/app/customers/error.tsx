'use client'
export default function CustomerError(props: {error: any}){
    return (
        <div className="alert alert-warning">
            SOmething went wrong. {props.error.message}
        </div>
    )
}