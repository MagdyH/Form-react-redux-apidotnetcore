export interface User {
    id:number;
    Name:string;
    Email:string;
    Birthday:Date;
}

export interface Grid {
    pageSize:number;
    pageIndex:number;
    count:number;
    listofIndex:number[];
}