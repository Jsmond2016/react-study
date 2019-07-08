import React, { Component, Fragment} from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
import './style.css'


class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            list: ['学习英文', '学习 React']
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleItemDelete = this.handleItemDelete.bind(this);
    }

    render(){
        return (
            <Fragment>
                <div>
                    <label htmlFor="insertArea">请输入内容</label>
                    <input id="insertArea" type="text" className='input'
                           value={this.state.inputValue}
                           onChange={this.handleInputChange}
                           ref={(input) => {this.input = input}}
                    />
                    <button onClick={this.handleBtnClick}>提交</button>
                </div>
                <ul ref={(ul) => {this.ul = ul}}>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
    componentDidMount() {
        axios.get('/api/todolist').then((res) =>{
            console.log(res);
            this.setState(() => {
               return{
                    list: res.data
                }
            })
        }).catch(() => {alert('error')});
    }

    getTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                    <TodoItem
                        key={item}
                        content={item}
                        index={index}
                        deleteItem={this.handleItemDelete}
                    />
            )
        })
    }
    handleInputChange(e) {
        const value = this.input.value;
        this.setState(() => ({inputValue: value}));
    }
    handleBtnClick() {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }), () => {console.log(this.ul.querySelectorAll('div').length);});
    }
    handleItemDelete(index) {
        console.log(index);
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}
        });

        // this.state.list.splice(index,1); 不可以这样使用，修改数据必须使用 setState方法
        // 引入一个概念： immutable ，即 state 不允许我们做任何改变，否则会影响性能优化
    }
}

export default TodoList;