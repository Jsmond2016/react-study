// import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import logoPic from '../../statics/logo.png'



export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 58px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    padding-right: 70px;
    box-sizing: border-box;
    height: 100%;
    margin: 0 auto;
`;

export const NavItem = styled.div`
   line-height: 56px;
   padding: 0 15px;
   color: #333;
   font-size: 17px;
   &.left{
       float: left;
   }
   &.right{
       float: right;
       color: #969696;
   }
   $.active{
       color: #ea6f5a;
   }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    width: 160px;
    height: 38px;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
        padding: 0 40px 0 20px;
    }
    &.slide-enter{
        width: 160px;
        transition: all .2s ease-out;
    }
    &.slide-enter-active{
        width: 240px;
    }
    &.slide-exit{
        transition: all .2s ease-out;
    }
    &.slide-exit-active{
        width: 160px;
    }
`;

export const Addition = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    line-height: 38px;
    padding: 0 20px;
    border-radius: 19px;  
    border: 1px solid #ec6149;
    margin-right: 20px;
    margin-top: 9px;
    font-size: 14px;
    &.reg{
        background: #ec6149;
    }
    &.writting{
        color: #fff;
        background: #ec6149;
    }
`;

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .iconfont {
        position: absolute;
        right: 5px;
        bottom: 4px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused {
            background: #777;
            color: #fff;
        }
    }
`