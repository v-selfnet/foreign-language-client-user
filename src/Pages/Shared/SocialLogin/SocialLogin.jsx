import { useContext } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../ProviderContext/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            // server: 7 store user info to DB [id, pass]
            const saveUser = { name: loggedUser.displayName, email: loggedUser.email, photo:loggedUser.photoURL}
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            }) // fetch close )
                .then(res => res.json())
                .then((data) => {
                    console.log(data)
                    // navigate to target location after login successfully
                    // navigate(from, { replace: true })
                })
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