import {createStore, combineReducers, applyMiddleware} from "redux";

const mathReducer = (state,action)=>{
switch (action.type){
    case "ADD":
        state = state + action.payload;
        break;
    case "SUBSTRACT":
    state = state - action.payload;
        break;    
}
return state;

}

const userReducer = (state,action)=>{
    switch (action.type){
        case "SET_NAME":
            state = state + action.payload;
            break;
        case "SET_AGE":
        state = state - action.payload;
            break;    
    }
    return state;
    
    }

const combined =  combineReducers(mathReducer,userReducer)  ; 
const store = createStore(combined,{},applyMiddleware());


store.dispatch({
    type:"ADD"
    ,payload:8
});

store.dispatch({
    type:"SUBSTRACT"
    ,payload:2
});

store.dispatch({
    type:"SET_NAME"
    ,payload:"Magdy"
});

store.dispatch({
    type:"SET_AGE"
    ,payload:27
});


