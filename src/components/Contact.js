import './allstyle.css';

export function Contact(){
    return(
        <div id="Contact">
            <section className="py-5">
                <div className="container px-5">
                    <div className="rounded-4 py-5 px-4 px-md-5">
                        <div className="text-center mb-5">
                            <h1 className="fw-bolder text-light">Get in touch</h1>
                            <p className="small text-secondary mb-0">(Working on it)</p>
                        </div>
                        <div className="row gx-5 justify-content-center">
                            <div className="col-lg-8 col-xl-6">
                                <form id="contactForm">
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="name" type="text"/>
                                        <label for="name">Full name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="email" type="email"/>
                                        <label for="email">Email address</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input className="form-control" id="phone" type="tel"/>
                                        <label for="phone">Phone number</label>
                                        <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <textarea className="form-control" id="message" type="text"></textarea>
                                        <label for="message" >Message</label>
                                    </div>
                                    <div className="d-grid"><button className="btn btn-primary btn-lg" type="submit">Submit</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}