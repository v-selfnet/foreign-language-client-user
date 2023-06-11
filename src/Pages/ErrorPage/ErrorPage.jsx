import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center">
            <Helmet><title>Language Camp | 404</title></Helmet>
            <div className="pl-10">
                <h3 className="text-3xl">Page not found</h3>
                <p>This site can’t be reached server IP address.<br />Try: <br /> <li>Checking the connection</li> <li>Checking the proxy, firewall, and DNS configuration</li> </p>
            </div>
            <img src="./404.gif" alt="" />
        </div>
    );
};

export default ErrorPage;