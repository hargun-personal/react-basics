import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);

    return (
        <div className="error">
            <h1>Oops!!</h1>
            <p>Something went wrong!!</p>
            <h2>{error?.data}</h2>
        </div>
    )
}

export default Error;