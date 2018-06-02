export default function addUserReducer (state=[],action) {
    switch (action.type) {
        case "ADD_USER":
            return [...state, action.user]
            break;
        case "EDIT_USER":
            Object.assign(state[state.findIndex(u => u.userId === action.user.userId)], action.user);
            return state;
            break;
        case "DELETE_USER":
            state.splice(state.findIndex(u => u.userId === action.id),1);        
            return [...state];
            break; 
        case "GET_USERS":
            //state.splice(state.findIndex(u => u.UserId === action.user.UserId),1);        
            return action.users;
            break;     
        default:
        return state;
            break;
    }
}




