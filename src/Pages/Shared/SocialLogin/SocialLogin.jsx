import { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../ProviderContext/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)

    //private route
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser)
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email, photo: loggedUser.photoURL }
                fetch('https://foreign-language-server-pi.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                }) // fetch close )
                    .then(res => res.json())
                    .then((data) => console.log(data))
                // navigate to target location after login successfully
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }

    return (
        <div className="text-center">
            <div className="divider">or</div>
            <div className="flex justify-evenly">
                <button onClick={handleGoogleSignIn} className="btn btn-circle text-2xl">
                    <FaGoogle></FaGoogle>
                </button>
                <button className="btn btn-circle text-2xl">
                    <FaGithub></FaGithub>
                </button>
                <button className="btn btn-circle text-2xl">
                    <FaFacebook></FaFacebook>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;