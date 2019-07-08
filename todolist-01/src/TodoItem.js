import React, {Component} from 'react'


class TodoItem extends Component{

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.content !== this.props.content) {
            return true;
        } else {
            return false;
        }
    }
    componentWillMount() {
        console.log('componentWillMount');
    }
    componentDidMount() {
        console.log('componentDidMount');
    }

    render() {
        console.log('render');
        const {content} = this.props;
        return (
            <div onClick={this.handleClick}>{content}</div>
        )
    }

    handleClick() {
        const {deleteItem, index} = this.props;
        deleteItem(index);
    }

}

export default TodoItem;