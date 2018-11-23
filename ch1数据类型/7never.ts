function error(mes:string):never{
    throw new Error(mes);
}
//error("err");

let a : never;
/*a =(()=>{
    throw new Error("错误");
})()*/
