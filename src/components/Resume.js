import './allstyle.css';

export function Resume() {
    return (
        <div id='Resume' className="container px-5 my-5">
            <div className="text-center mt-5">
                <h1 className="display-5 fw-bolder mb-0"><span className="text-custom1">Resume</span></h1>
            </div>
            <div className="fw-bolder display-6 text-custom2 mx-4 mt-5">
                Education:
            </div>
            <div className="row row-cols-xl-3 row-cols-1 g-4 m-4">
                <div className="col z">
                    <div className="card text-center">
                        <div className="card-body">
                            <div className="text-start mb-0">
                                <div className="bg-light p-4 rounded-4">
                                    <div className="text-primary fw-bolder mb-2">2021 - Present</div>
                                    <div className="mb-2">
                                        <div className="fw-bolder">VIT-AP University</div>
                                        <div className="small text-muted">Amaravati, India</div>
                                    </div>
                                    <div className="fst-italic mb-2">
                                        <div className="small text-muted">B.Tech</div>
                                        <div className="small text-muted">CSE Core</div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="fw-bold">Current CGPA:</div>
                                        <div className="text-primary fw-bold">8.43</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col z">
                    <div className="card">
                        <div className="card-body">
                            <div className="text-start mb-0">
                                <div className="bg-light p-4 rounded-4">
                                    <div className="text-primary fw-bolder mb-2">2019 - 2021</div>
                                    <div className="mb-2">
                                        <div className="fw-bolder">FIITJEE</div>
                                        <div className="small text-muted">Hyderabad, India</div>
                                    </div>
                                    <div className="fst-italic mb-2">
                                        <div className="small text-muted">Intermediate</div>
                                        <div className="small text-muted">MPC</div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="fw-bold">CGPA for two years:</div>
                                        <div className="text-primary fw-bold">8.60</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col z">
                    <div className="card">
                        <div className="card-body">
                            <div className="text-start mb-0">
                                <div className="bg-light p-4 rounded-4">
                                    <div className="text-primary fw-bolder mb-2">2006 - 2019</div>
                                    <div className="mb-2">
                                        <div className="fw-bolder">Sarathi</div>
                                        <div className="small text-muted">Hyderabad, India</div>
                                    </div>
                                    <div className="fst-italic mb-2">
                                        <div className="small text-muted">School</div>
                                        <div className="small text-muted mb-4"></div>
                                    </div>
                                    <div className="mb-2">
                                        <div className="fw-bold">10th CGPA:</div>
                                        <div className="text-primary fw-bold">7.90</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pb-5"></div>
            <div className="fw-bolder display-6 text-custom2 mx-4 mt-5 my-4">
                Skills:
            </div>
            <div className="container bg-light p-5 mx-4 rounded-4">
            <div className="row row-cols-xl-2 row-cols-1 m-4">
                <div className="col">
                    <div className="align-items-center bg-black text-light rounded-4 p-3 mb-3 y">
                    <span className="fw-bold h4">Front-End Development:</span><br/><br/>
                        <ul>
                            <li>HTML:<br/>Proficiency in creating structured and semantic web pages.</li>
                            <li>CSS:<br/>Styling web content and understanding CSS frameworks (e.g., Bootstrap, Sass).</li>
                            <li>JavaScript:<br/>Strong skills in client-side scripting and familiarity with libraries and frameworks like React.</li>
                        </ul>
                    </div>
                </div>
                <div className="col mt-xl-0 mt-5">
                    <div className="align-items-center bg-black text-light rounded-4 p-3 mb-3 y">
                    <span className="fw-bold h4">Back-End Development:</span><br/><br/><br/>
                        <ul className="py-3">
                            <li>Server-Side Programming:<br/>Learning Node.js for the server side programming.</li>
                            <li>Database Management:<br/>Experience with MongoDB NoSQL database.</li>
                        </ul>
                    </div>
                </div>
                <div className="col mt-5">
                    <div className="align-items-center bg-black text-light rounded-4 p-3 mb-3 y">
                    <span className="fw-bold h4">Version Control:</span><br/><br/><br/>
                        <ul>
                            <li>Git:<br/>Have knowledge in uploading React files and HTML, CSS and Javascript files into GitHub and deploy the server.</li>
                            <li>Vercel:<br/>Website used for the deployment of the ReactJS codes.</li>
                        </ul>
                    </div>
                </div>
                <div className="col mt-5">
                    <div className="align-items-center bg-black text-light rounded-4 p-3 mb-3 y">
                    <span className="fw-bold h4">Core Java:</span><br/><br/><br/><br/>
                        <ul>
                            <li>Proficiency in the fundamentals of Java, including data types, operators, control structures, and loops.</li>
                            <li>Exception handling and error management.</li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
            <div className="pb-5"></div>
            <div className="fw-bolder display-6 text-custom2 mx-4 mt-5 my-4">
                Languages:
            </div>
            <div className="container bg-black p-5 mx-4 rounded">
            <div className="row row-cols-3">
                <div className="col a"><div className="d-flex align-items-center bg-light text-dark rounded-4 p-3 h-100 fw-bold">HTML</div></div>
                <div className="col a"><div className="d-flex align-items-center bg-light text-dark rounded-4 p-3 h-100 fw-bold">CSS</div></div>
                <div className="col a"><div className="d-flex align-items-center bg-light text-dark rounded-4 p-3 h-100 fw-bold">Javascript</div></div>
                <div className="col a"><div className="d-flex align-items-center bg-light text-dark rounded-4 p-3 h-100 fw-bold">Java</div></div>
                <div className="col a"><div className="d-flex align-items-center bg-light text-dark rounded-4 p-3 h-100 fw-bold">ReactJS</div></div>
                <div className="col a"><div className="d-flex align-items-center bg-light text-dark rounded-4 p-3 h-100 fw-bold">ExpressJS</div></div>
            </div>
            </div>
        </div>
    )
}