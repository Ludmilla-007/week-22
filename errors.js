
let a =10;
let b=2; 
let result=0; 
try{
   

if (b==0)
throw new Error ("Нельзя делить на ноль");
let result = a/b;
console.log(result);
}
catch(error){
    console.log("Ваш ввод данных некорректен.Подробности:"+error.stack );
}
finally{
     console.log(result);
}
console.log('test'); 