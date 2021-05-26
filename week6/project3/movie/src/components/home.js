import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return ( 
        <div>
            <div className="background">
                <Link to="/movies"><div className="select backBox">Movies</div></Link>
                <Link to="/tv"><div className="select backBox">TV Shows</div></Link>
            </div>
        </div> 
    );
}

export default Home;