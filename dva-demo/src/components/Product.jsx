import React from 'react';
import {Link, withRouter, routerRedux} from 'dva/router';
import * as api from '../services/example'
import {productUpdateList,productUpdateListAsync,productUpdateListHttp} from '../actions/index'
 

class Product extends React.Component{

    componentDidMount() {
        // api.getProduct().then(res => {
        //     console.log(res.data);
        // })
        api.posts().then((res) => {
            console.log(res.data.users)
        })
    }

    clickProductList = (event) =>  {

        const currentProduct = {
            name: '玉米1'
        }

        // this.props.dispatch({
        //     type: "product/updateList", // 这里是 namespace 的名字和 reducer 的名字
        //     payload: currentProduct
        // })
        //console.log(productUpdateList)
       this.props.dispatch(productUpdateList(currentProduct))
    }

    clickProductListAsync = () => {
        const currentProduct = {
            name: '玉米-async'
        }

        // this.props.dispatch({
        //     type: "product/updateListAsync", // 这里是 namespace 的名字和 reducer 的名字
        //     payload: currentProduct
        // })
        this.props.dispatch(productUpdateListAsync(currentProduct))
    }

    handleGotoIndex = () => {
        this.props.history.push("/")
    }
   
    handleRudexRouterToIndex = () => {
        this.props.dispatch(routerRedux.push("/"))
    }
    
    clickHttpList = (e) => {
        const id = 1001;
        // this.props.dispatch({
        //     type: "product/updateListHttp",
        //     payload: {
        //         id: 1001 //随机，可以不传
        //     }
        // })
        this.props.dispatch(productUpdateListHttp(id))
    }
    render() {
        
        const {productList} = this.props.productList;

        return(
            <div>
                product商品： {this.props.titls}
                <ul>
                    {
                        productList.map((ele, index) => {
                            return <li key={index}>{ele.name}</li>
                        })
                    }
                </ul>
                <div>
                    <h2>数据获取</h2>
                    <button onClick={this.clickProductList}>获取商品列表</button>
                    <button onClick={this.clickProductListAsync}>异步获取商品列表</button>
                    <button onClick={this.clickHttpList}>使用 HTTP 获取商品信息</button>
                </div>
                <div>
                    <h2>路由跳转</h2>
                    <Link to="/">去首页</Link>
                    <button onClick={this.handleGotoIndex}>去首页</button>
                    <button onClick={this.handleRudexRouterToIndex}>redux-router去首页</button>
                </div>
            </div>
        )
    }
}

export default withRouter(Product);