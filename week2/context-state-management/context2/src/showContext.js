import React from "react";

const {Provider, Consumer} = React.createContext();

class ShowContextProvider extends React.Component {
    state ={
        shows: [
            "Crash Landing on you",
            "Mr. Queen",
            "The King: Eternal Monarch",
            "100 Days my Prince",
            "Guardian: The Lonley & Great God",
            "Hotel Del Luna",
            "Boy over Flowers",
            "Mr. Sunshine"
        ],
        newShow: ""
    }

    handleChange = (e) => {
        e.preventDefault();

        this.setState({
            newShow: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();

        this.setState({
            shows: this.state.shows.concat(this.state.newShow)
        }, () => this.setState({newShow: ""})
        )
    }

    render() {
        return(
            <Provider value={{shows: this.state.shows, newShow: this.state.newShow, handleClick: this.handleClick, handleChange: this.handleChange}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {ShowContextProvider, Consumer as ShowContextConsumer};