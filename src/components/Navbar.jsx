import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">

                    {/*<a className="navbar-brand" href="https://www.gmail.com">Navbar</a>*/}


                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>


                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.gmail.com">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.gmail.com">Category</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.gmail.com">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;