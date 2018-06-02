
export const AddUser = function (user){
return {type:"ADD_USER",user}
};

export const EditUser = function (user){
    return {type:"EDIT_USER",user}
    };

export const DeleteUser = function (id){
        return {type:"DELETE_USER",id}
        };

export const GetIndex = function (index,size,count){
    return {type:"GET_INDEX",index,size,count}
    };
        
export const applyChange=(index,size,count)=>{
    return {type:"APPLY_CHANGE",index,size,count}
}


export const getUsers = function (users){
    return {type:"GET_USERS",users}
}



