import React from 'react';
import { connect } from 'react-redux';
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './style'
import {CSSTransition} from 'react-transition-group';
import {actionCreators} from './store';

const Header = (props) => {
    return (
        <HeaderWrapper>
             <Logo href='/'/>
             <Nav>
                 <NavItem className='left active'>首页</NavItem>
                 <NavItem className='left'>下载</NavItem>
                 <NavItem className='right'>登录</NavItem>
                 <NavItem className='right'>
                     <span className="iconfont">&#xe636;</span>
                 </NavItem>
                 <SearchWrapper>
                     <CSSTransition
                        timeout={200}
                        in={props.focused}
                        classNames="slide"
                     >
                        <NavSearch
                            className={props.focused ? 'focused': ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        ></NavSearch>
                        </CSSTransition>
                        <span className={props.focused ? 'focused iconfont': 'iconfont'}>&#xe617;</span>
                 </SearchWrapper> 
             </Nav>
             <Addition>
                 <Button className='writting'><span className="iconfont">&#xe602;</span>写文章</Button>
                 <Button className='reg'>注册</Button>
             </Addition>
            </HeaderWrapper>
    )
}



const mapStateToProps = (state)=> {
    return {
        focused: state.header.get('focused')
    }
}
const mapDispatchToProps = (dispatch)=> {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);