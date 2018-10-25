import React from 'react'
import propTypes from 'prop-types'
import { bindActionCreators } from './my-redux';

export class Provider extends React.Component{
    static childContextTypes={
        store:propTypes.object
    }
    constructor(props,context){
        super(props,context)
        this.store=props.store
    }
    getChildContext(){
        return {store:this.store}
    }
    render(){
        return this.props.children
    }
} 

export const connect=(mapStateToProps=state=>state,mapDispatchToProps)=>(WrapComponent)=>{
    return class Connect extends React.Component{
        static contextTypes={
                store:propTypes.object
        }
        constructor(props,context){
            super(props,context)
            this.state={
                props:{}
            }
        }
        componentDidMount(){
            const {store}=this.context
            // 每次dispacth都跟新一次
        }
        // 把state和dispatch的方法添加到state里
        update(){
            const {store}=this.context
            const stateProps=mapStateToProps(store.getState())
            // mapDispatchToProps传入的是对象或者方法，要把他们都dispatch包一层
            const dispachProps=bindActionCreators(mapDispatchToProps,store.dispacth)
            this.setState({
                props:{
                    ...this.state.props,
                    ...stateProps,
                    ...dispachProps
                }
            })
        }
        render(){
            // 把所有props属性都映射出去
            return <WrapComponent {...this.state.props}></WrapComponent>
        }
    }
}