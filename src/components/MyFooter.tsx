import "bootstrap-icons/font/bootstrap-icons.css"

const MyFooter = () => {
    return (
        <footer className="bg-body-tertiary text-center">
            <div className="container p-4">
                
                <section className="mb-4">
                
                <a  className="btn btn-outline btn-floating m-1" href="#!" role="button"
                    ><i className="bi bi-facebook"></i></a>

            
                <a  className="btn btn-outline btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-twitter"></i></a>

            
                <a  className="btn btn-outline btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-google"></i></a>

            
                <a  className="btn btn-outline btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-instagram"></i></a>

            
                <a className="btn btn-outline btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-linkedin-in"></i></a>

            
                <a  className="btn btn-outline btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-github"></i></a>
                </section>
            
                <section>
                <form>
                    <div className="row d-flex justify-content-center">
                        <div className="col-auto">
                            <p className="pt-2">
                            <strong>Sign up for our newsletter</strong>
                            </p>
                        </div>
                        <div className="col-md-5 col-12">
                        
                            <div className="form-outline mb-4">
                            <input type="email"  className="form-control" />
                            <label className="form-label">Email address</label>
                            </div>
                        </div>
                        <div className="col-auto">
                        
                            <button type="submit" className="btn btn-outline mb-4 bg-warning">
                            Subscribe
                            </button>
                        </div>
                    </div>
                </form>
                </section>
            
                <section className="mb-4">
                    <p>
                        Craft narratives that ignite inspiration,knowledge and enetertainment.
                    </p>
                </section>
    
                <section className="">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Products</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                            <a className="text-body" href="#!">Overview</a>
                            </li>
                            <li>
                            <a className="text-body" href="#!">Features</a>
                            </li>
                            <li>
                            <a className="text-body" href="#!">Solution</a>
                            </li>
                            <li>
                            <a className="text-body" href="#!">Releases</a>
                            </li>
                        </ul>
                        </div>
                    

                    
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Company</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                            <a className="text-body" href="#!">About Us</a>
                            </li>
                            <li>
                            <a className="text-body" href="#!">Careers</a>
                            </li>
                            <li>
                            <a className="text-body" href="#!">Media</a>
                            </li>
                            <li>
                            <a className="text-body" href="#!">Contact</a>
                            </li>
                        </ul>
                        </div>
                    

                    
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Resources</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                            <a className="text-body" href="#!">Blog</a>
                            </li>
                            <li>
                            <a className="text-body" href="#!">Newsletter</a>
                            </li>
                            <li>
                            <a className="text-body" href="#!">Events</a>
                            </li>
                            <li>
                            <a className="text-body" href="#!">Help Center</a>
                            </li>
                        </ul>
                        </div>
                    

                        
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Social</h5>

                        <ul className="list-unstyled mb-0">
                            <li>
                            <a className="text-body" href="#!">Twitter</a>
                            </li>
                            <li>
                            <a className="text-body" href="#!">LinkedIn</a>
                            </li>
                            <li>
                            <a className="text-body" href="#!">Facebook</a>
                            </li>
                            <li>
                            <a className="text-body" href="#!">Github</a>
                            </li>
                        </ul>
                        </div>
                    
                    </div>
                </section>
            </div>
            <div className="text-center p-3">
                © 2020 Copyright:
                <a className="text-reset fw-bold" href="www.newshub.email.com">NewsHub</a>
            </div>
        </footer>
    );
};

export default MyFooter;