import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../ProviderContext/AuthProvider";

const Signin = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);

    //private route
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const onSubmit = data => {
        // signin
        signIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                reset();
                // private route
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))

    }

    return (
        <>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row gap-40 mt-10">
                    <div className="text-center lg:text-left w-1/2 space-y-10">
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-4xl font-bold text-center my-6">Signin</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email")} name="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$&*])/
                                    })} placeholder="password" className="input input-bordered" />

                                    {/* password error handel */}
                                    {
                                        errors.password?.type === 'required' && <p className='text-red-600'>Password is required</p>
                                    }
                                    {
                                        errors.password?.type === 'minLength' && <p className='text-red-600'>Password must be six characters</p>
                                    }
                                    {
                                        errors.password?.type === 'maxLength' && <p className='text-red-600'>Password must be less than twenty characters</p>
                                    }
                                    {
                                        errors.password?.type === 'pattern' && <p className='text-red-600'>Password must be [one upper], [one lower], [one digit] & [one special] characters</p>
                                    }
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Signin" className="btn btn-primary" />
                                </div>
                            </form>
                            <SocialLogin></SocialLogin>
                            <p className='text-xs mt-3'>Do not have an Account? <Link to='/register' className='text-orange-600'>Please Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signin;