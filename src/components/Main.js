export function Main(){
    return(
        <div>
            <br/>
            <br/>
            <br/>
            <header className="py-5 mt-5">
                <div className="container px-5 pb-5">
                    <div className="row">
                        <div className="col-xl-6 col-12">
                            <div className="text-center">
                                <div className="badge text-white mb-4"><div className="text-uppercase">Design &middot; Development</div></div><br/>
                                <h1 className="display-3 fw-bolder mb-3"><span className="text-white">Welcome to my Portfolio</span></h1>
                                <div className="fs-3 fw-light text-white mb-5">Crafting Engaging Web Experiences with<br/> ReactJS and Bootstrap</div>
                                <div className="mb-5"><br/><br/>
                                    <a className="btn btn-primary btn-lg ms-5 mt-4 mt-xl-0 px-5 py-3 fs-6 fw-bolder" href="#Project">Projects</a>
                                    <a className="btn btn-primary btn-lg ms-5 mt-4 mt-xl-0 px-5 py-3 fs-6 fw-bolder" href="#Resume">Resume</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-12">
                            <img id="image2" src= {require("./Mainimg/main.png")} alt=""/>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}