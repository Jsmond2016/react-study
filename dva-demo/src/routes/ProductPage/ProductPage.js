import React from 'react';
import Product from '../../components/Product';
import {connect} from "dva";

class IndexPage extends React.Component{
    render() {
        const {productList, dispatch} = this.props;
        
        return (
            <div>
                <Product title="商品类型" dispatch={dispatch} productList={productList} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        productList: state.product
    }
}

export default connect(mapStateToProps)(IndexPage)
