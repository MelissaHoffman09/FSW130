import React from "react";
import {ShowContextConsumer} from "./showContext";

function Main(props) {
    
    return(
        <ShowContextConsumer>
            {context => (
               
                <div id="main">
                    <h1>Top Korean Dramas of ALL Time</h1>
                    <form id="showInput">
                        <input id="showName" 
                            className="formInput" 
                            type="text" 
                            name="newShow" 
                            value={context.newShow}
                            onChange={context.handleChange}
                            placeholder="Add a drama">
                        </input>.
                        <button onClick={context.handleClick} className="formInput">Add</button>
                    </form>
                    <ul id="movieList">
                        {  
                            context.shows.map(show => (
                            <li className="showName" key={show}>{show}</li>
                            )
                        )}
                    </ul>
                </div>
            )}
        </ShowContextConsumer>
    )
}

export default Main;