import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['item']
        };
        this.addItem = this.addItem.bind(this);
    }
    render() {
        return (
                <Fragment>
                    <TransitionGroup>
                        {
                            this.state.list.map( (item, index) => {
                                return (
                                    <CSSTransition
                                        timeout={1000}
                                        classNames="fade"
                                        unmountOnExit
                                        onEntered={(el) => {el.style.color='blue'}}
                                        key={index}
                                        appear={true}
                                    >
                                        <div>{item}</div>
                                    </CSSTransition>
                                )
                            })
                        }
                        <button onClick={this.addItem}>toggle</button>
                    </TransitionGroup>
                </Fragment>
        )
    }
    addItem() {
        this.setState((prevState) => {
            return {
                list: [...prevState.list, 'item']
            }
        })
        console.log(this.state.list);
    }
}

export default App;