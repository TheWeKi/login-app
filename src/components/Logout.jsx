import {useNavigate} from "react-router-dom";

export function Logout() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/login')
    }

    return(
        <>
            <section className="vh-100" style={{background: "linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))"}}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                            <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
                                <div className="card-body p-5 text-center">
                                    <h2 className="fw-bold mb-5 text-uppercase">
                                        Thanks For Using Our Application
                                    </h2>
                                    <button className="btn btn-outline-light btn-lg px-5" type="button"
                                        onClick={handleClick}
                                    >
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
