import Ellipse from '../InfoStudent/Img/Ellipse 7.png';
import error from '../InfoStudent/Img/error.png';
import '../InfoStudent/InfoStudent.css';
import CircularProgressWithLabel from '../CircularProgress/CircularProgressWithLabel';
import React from 'react';
import Participated from './Participated/Participated';
import Carousel_InfoStudent from './Carousel_InfoStudent/Carousel_InfoStudent';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import TimelineActivity from './TimelineActivity/TimelineActivity';


// const criterias = [
//     {id : 1},
//     {id : 2},
//     {id : 3}
// ];


const InfoStudent = () => {
    // console.log(props.match);
    return (
        <Router className="container InfoStudent">
            <div className="PROFITE_SV5TOT">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">Navbar</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                                <a class="nav-link" href="#">Features</a>
                                <a class="nav-link" href="#">Pricing</a>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="row mt-5">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 Profile">
                        <div className="row mt-4">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                                <div className="img_Profile">
                                    <img src={Ellipse} className="img-responsive" alt="Image8" />
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-4">
                                <div className="Title_Profile">
                                    <h1>Họ tên SV</h1>
                                    <p>Thêm châm ngôn sống</p>
                                    <button type="button" className="btn btn-outline-danger">Thông Tin Cá Nhân</button>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-3    ">
                            <div className="Title_Edit">
                                <ul className="Title_Edit_inline">
                                    <li><img src={error} alt="" /></li>
                                    <li><p>Cập nhật thông tin cá nhân</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 margin-mobile">
                        <NavLink to="/InfoStudent/1"><CircularProgressWithLabel value="90" /></NavLink>
                        <CircularProgressWithLabel value="90" />
                        <CircularProgressWithLabel value="90" />
                        <CircularProgressWithLabel value="90" />
                        <CircularProgressWithLabel value="90" />
                    </div>
                </div>
            </div>

            <Route exact path="/InfoStudent/1" component={TimelineActivity} />

            <Carousel_InfoStudent />
            <Participated />
            {/* <!-- ------------------------------------------------------------------------------------------------------> */}
            {/* <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <TimelineActivity />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                    <TimelineActivity />
                </div>
            </div> */}
        </Router>
    );
}
export default InfoStudent;