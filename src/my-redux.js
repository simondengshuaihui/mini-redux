export function createStore(reducer,enhancer){
    if(enhancer){
        
    }
    let currentStore={num:0}
    let currentListeners=[]

    function getState(){
        return currentStore
    }
    function subscribe(listener){
        currentListeners.push(listener)
    }
    function dispatch(action){
        
        currentStore=reducer(currentStore,action)
        currentListeners.forEach(v=>v())
        console.log(currentStore)
    }
    // 初始化数据
    dispatch({type:'@@immoc'})
    return {getState,subscribe,dispatch}
}
// 把creator用dispatch包一层
export function bindActionCreators(creators,dispatch){
    let bound={}
    Object.keys(creators).map(v=>{
        let creator=creators[v]
        bound[v]=bindActionCreator(creator,dispatch)
    })
    return bound
} 
// addgun(参数) ---->dispatch(addgun(参数))
function bindActionCreator(creator,dispatch){
    return (...args)=>dispatch(creator(...args))
}

export function applyMiddleware(...middlewares){
    return createStore=>(...args)=>{
        const store=createStore(...args)
        let dispatch=store.dispatch

        const midApi={
            getState:store.getState,
            dispatch:(...args)=>dispatch(...args)
        }
        const middlewareChain=middlewares.map(middleware=>middleware(midApi))
        dispatch=compose(...middlewareChain)(store.dispatch)
        return {
            ...store,
            dispatch
        }
    }
}

export function compose(...funcs){
    if(funcs.length===0){
        return arg=>arg
    }
    if(funcs.length===1){
        return funcs[0]
    }
    return funcs.reduce((ret,item)=>(...args)=>ret(item(...args)))
}