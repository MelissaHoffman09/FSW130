import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return ( 
        <div>
            <h1 className="title1">Weekly Organizer</h1>
            <div className="background">
                <Link to="/foods"><div className="select backBox">Grocercy List</div></Link>
                <Link to="/todos"><div className="select backBox">To-do List</div></Link>
            </div>
        </div> 
    );
}

export default Home;