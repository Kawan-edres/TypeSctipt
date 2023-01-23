type status={
    status:'loading' | 'sucess' | 'error'
}
const Status = (props:status) => {
    return (
        <div>
            <h2>{props.status}</h2>
        </div>
    );
}

export default Status;