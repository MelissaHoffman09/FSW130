import React, {Component} from "react";
const {Provider, Consumer} = React.createContext();

class UglyContextProvider extends Component {
    state = {
        data: [ 
        {
            title: "Armadillo Worm",
            description: "Looks like an Armadillo and Cockroach..yikes!",
            link: "https://images.pexels.com/photos/35804/armadillo-worm-bug-insect.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        },
        {
            title: "Wolf Spider",
            description: "Agile hunters with excellent eyesight...eekk!",
            link: "https://images.pexels.com/photos/40860/spider-macro-insect-arachnid-40860.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        },
        {
            title: "Snake",
            description: "You never know with these critters...creepy!",
            link: "https://images.pexels.com/photos/3280908/pexels-photo-3280908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        }
    ]}
    
    getIndexOfUgly = (title) => {
        let id;
        this.state.data.forEach(item => {
            if (item.title === title) {
                id = this.state.data.indexOf(item)
            }
        });
        return(id);
    }

    updateUgly = (title, update) => {
        this.setState(prevState => (
            prevState.data[this.getIndexOfUgly(title)] = update
        ))
    }

    removeUgly = (title) => {
        this.getIndexOfUgly(title) &&  this.setState(prevState => (
            prevState.data.splice(this.getIndexOfUgly(title), 1)
        ));
    }

    addUgly = (title, description, link) => {
        this.setState(prevState => {
            return prevState.data.push({title: title, description: description, link: link});
        })
    }
    
    render() {
        const state = this.state;
        const addUgly = this.addUgly;
        const removeUgly = this.removeUgly;
        const updateUgly = this.updateUgly;
        return (
            <Provider value={{state, addUgly, removeUgly, updateUgly}}>
                {this.props.children}
            </Provider>
        )
    }
}


export {UglyContextProvider, Consumer as UglyContextConsumer}