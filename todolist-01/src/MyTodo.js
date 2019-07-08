import React, { Component } from 'react';
import 'antd/dist/antd.css';
import store from './store/index';
import {getInitList, getInputChangeAction, getAddItemAction, getDeleteItemAction} from './store/actionCreators';
import TodoListUI from './TodoListUI';
//import axios from 'axios';


class MyTodo extends Component{

    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
        store.subscribe(this.handleStateChange);
    }

    render() {
        return (
            <TodoListUI
                inputValue={this.state.inputValue}
                list={this.state.list}
                handleInputChange={this.handleInputChange}
                handleStateChange={this.handleStateChange}
                handleBtnClick={this.handleBtnClick}
                handleDeleteItem={this.handleDeleteItem}

            />
        );
    }

    componentDidMount() {
        
        const action = getInitList();
        store.dispatch(action);
        // axios.get('api/todolist.json').then((res) => {
        //     const data = res.data;
        //     const action = initListAction(data);
        //     console.log(action);
        //     store.dispatch(action);
        // });
    }

    handleInputChange(e) {
        const action =getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleStateChange() {
        this.setState(store.getState());
    }

    handleBtnClick() {
        const action = getAddItemAction();
        store.dispatch(action);
    }
    handleDeleteItem (index) {
        console.log(index);
        const action = getDeleteItemAction(index);
        store.dispatch(action);
    }
}

export default MyTodo;