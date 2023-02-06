import { useForm } from "react-hook-form";
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {registerApi} from "./api/restApi";
import {useNavigate} from "react-router-dom";

const schema = yup.object().shape({
    email: yup.string().email().required('Email is required'),
    username: yup.string().min(4).max(16).required('User Id is required'),
    password: yup.string().min(4).max(32).required('Password is required')
})

function SignUp() {

    const navigate = useNavigate()

    const { register, handleSubmit, formState: {errors}, reset} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmitHandler = (data) => {
        reset()
        registerApi(data)
            .then( r => {
                console.log(r)
                navigate('/login')
            } )
            .catch( e => console.log(e) )
    }

    return (
        <>
            <section className="vh-100"
                     style={{background: "linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))"}}
            >
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
                                <div className="card-body p-5 text-center">

                                    <div className="mb-md-5 mt-md-4">

                                        <h2 className="fw-bold mb-5 text-uppercase">Registration</h2>

                                        <form onSubmit={handleSubmit(onSubmitHandler)}>

                                            <div className="form-outline form-white mb-4">
                                                <label className="form-label" htmlFor="email">Email</label>
                                                <input type="email" name="email" placeholder="Email"
                                                       className="form-control form-control-lg"
                                                       {...register('email')} />
                                                <p className="text-warning"> {errors.email?.message} </p>
                                            </div>

                                            <div className="form-outline form-white mb-4">
                                                <label className="form-label" htmlFor="username">User ID</label>
                                                <input type="text" name="username" placeholder="User Id"
                                                       className="form-control form-control-lg"
                                                       {...register('username')} />
                                                <p className="text-warning"> {errors.username?.message} </p>
                                            </div>

                                            <div className="form-outline form-white mb-4">
                                                <label className="form-label" htmlFor="password">Password</label>
                                                <input type="password" name="password" placeholder="Password"
                                                       className="form-control form-control-lg"
                                                       {...register('password')} />
                                                <p className="text-warning"> {errors.password?.message} </p>
                                            </div>

                                            <button className="btn btn-outline-light mt-4 btn-lg px-5" type="submit">
                                                Sign Up
                                            </button>
                                        </form>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export { SignUp };
