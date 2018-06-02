import React from 'react';
import {BrowserRouter as Router,
    Route,Link} from 'react-router-dom';
import Home from './Home';
import User from '../containers/User';

const Root = ()=>{
    return (
        <Router>
             <div>
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <il className="nav-item"><Link className="nav-link" to="/">Home</Link></il>
                        <il className="nav-item"><Link className="nav-link" to="/user">User</Link></il>
                        <il className="nav-item"><Link className="nav-link" to="/interest">Interest</Link></il>
                    </ul>
                </div>
                </div>
            </nav>
                        
             <Route exact path="/" component={Home}/>
             <Route path="/user" component={User}/>
             {/* <Route path="/interest" component={Topics}/> */}
             </div>
     </Router>
    )
}


export default Root;