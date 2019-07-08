import React, {Component} from 'react';
import {connect} from 'react-redux';



class TodoList extends Component{

    render() {

        const {inputValue,list,changeInputValue,handleClick,handleDelete} = this.props;

        return (
           <div>
              <div>
                <input type="text" value={inputValue} onChange={changeInputValue}/>
                <button onClick={handleClick}>提交</button>
              </div>
              <div>
                  <ul >
                      {
                          list.map((item, index) => {
                              return <li key={index} onClick={() =>{handleDelete(index)}}>{item}</li>
                          })
                      }
                  </ul>
              </div>
           </div>
        );
    }

}
    
    // 将 store 的数据和本组件中的 props 作映射
    const mapStateToProps = (state)=>{
        return {
            inputValue: state.inputValue,
            list: state.list
        }
    }
    // store.dispatch 挂载到 props 上
    const mapDispatchToProps = (dispatch)=>{
        return {
            changeInputValue(e){
                const action = {
                    type: 'change_input_value',
                    value: e.target.value
                };
                dispatch(action);
            },
            handleClick() {
                const action = {
                    type: 'add_item'
                }
                dispatch(action);
                
            },
            handleDelete(index) {
                const action = {
                    type: 'delete_item',
                    index
                }
                dispatch(action);
            }
        }
    }
// connect 前2个参数表示的连接规则（关联 state，关联 dispatch），后一个参数表示连接的组件对象
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);