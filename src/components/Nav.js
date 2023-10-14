import './allstyle.css';
import { Main } from "./Main";

export function Nav() {
    return (
        <div className="main">
                <div className="container px-5 py-3" id="home">
                        <ul className="nav justify-content-center mb-2 fw-bolder">
                            <li className="nav-item"><a className="nav-link text-light p-3 mx-5 x" href="#home">Home</a></li>
                            <li className="nav-item"><a className="nav-link text-light p-3 mx-5 x" href="#About">About</a></li>
                            <li className="nav-item"><a className="nav-link text-light p-3 mx-5 x" href="#Resume">Resume</a></li>
                            <li className="nav-item"><a className="nav-link text-light p-3 mx-5 x" href="#Project">Projects</a></li>
                            <li className="nav-item"><a className="nav-link text-light p-3 mx-5 x" href="#Contact">Contact</a></li>
                        </ul>
                </div>
            <Main />
        </div >
    )
}