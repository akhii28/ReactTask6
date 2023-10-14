import './allstyle.css';

export function Projects() {
    return (
        <div className="bg-white" id="Project">
            <div className="text-center text-black p-5">
                <span className=" fw-bold display-5 ">My Projects:</span>
                <p>(Click on the image to go to the deployed link of the project.)</p>
            </div>
            <div className="row gx-5 justify-content-center">
                <div className="col-xl-5 col-11 b">
                    <div className="card overflow-hidden bg-black shadow rounded-4 border-0 mb-5">
                        <div className="card-body p-0 c">
                            <div className="align-items-center">
                                <div className="p-5">
                                    <a href="https://react-task1-livid.vercel.app/">
                                        <img className="img-fluid rounded-3 f mb-2" src={require('./projectimgs/task1.png')} alt='' />
                                    </a>
                                    <br/><br/><br/>
                                    <h2 className="fw-bolder text-light">Responsive Paragraph Word Counter</h2>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 col-11 b">
                    <div className="card overflow-hidden bg-black shadow rounded-4 border-0 mb-5">
                        <div className="card-body p-0 c">
                            <div className="align-items-center">
                                <div className="p-5">
                                    <a href="https://react-task2-one.vercel.app/">
                                        <img className="img-fluid rounded-3 f mb-2" src={require('./projectimgs/task2.png')} alt='' />
                                    </a><br/><br/><br/>
                                    <h2 className="fw-bolder text-light">Calculator</h2>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 col-11 b">
                    <div className="card overflow-hidden bg-black shadow rounded-4 border-0 mb-5">
                        <div className="card-body p-0 c">
                            <div className="align-items-center">
                                <div className="p-5">
                                    <a href="https://react-task3-sand.vercel.app/">
                                        <img className="img-fluid rounded-3 f mb-2" src={require('./projectimgs/task3.png')} alt='' />
                                    </a><br/><br/><br/>
                                    <h2 className="fw-bolder text-light">Color Picker</h2>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 col-11 b">
                    <div className="card overflow-hidden bg-black shadow rounded-4 border-0 mb-5">
                        <div className="card-body p-0 c">
                            <div className="align-items-center">
                                <div className="p-5">
                                    <a href="https://react-task4-cyan.vercel.app/">
                                        <img className="img-fluid rounded-3 f mb-2" src={require('./projectimgs/task4.png')} alt='' />
                                    </a><br/><br/><br/>
                                    <h2 className="fw-bolder text-light">JSON file display</h2>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 col-11 b">
                    <div className="card overflow-hidden bg-black shadow rounded-4 border-0 mb-5">
                        <div className="card-body p-0 c">
                            <div className="align-items-center">
                                <div className="p-5">
                                    <a href="https://react-task5-jet.vercel.app/">
                                        <img className="img-fluid rounded-3 f mb-2" src={require('./projectimgs/task5.png')} alt='' />
                                    </a><br/><br/><br/>
                                    <h2 className="fw-bolder text-light">Age Calculator</h2>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}