
// const filter_arr = (arr) => {
//     return arr.filter((e) => arr.indexOf(e) === arr.lastIndexOf(e))
// }

// console.log(filter_arr([1,2,4,4,6]));


// let arr = [2,5,"ddc","fvvv",null,]
// let num = []
// let st = []
// let obj = []
// num.push(typeof(2))
// st.push(typeof("string"))
// obj.push(typeof(null))
// console.log(num,st,obj)

const a = (arr) => {
    const obj = {
        strings:[],
        booleans:[],
        numbers:[],
        others:[],
    }
    arr.forEach(element => {
       if (typeof element === 'string') {
           obj.strings.push(element)
       }else if(typeof element === 'number'){
            obj.numbers.push(element)
       }else if(typeof element === 'boolean'){
           obj.booleans.push(element)
       }else{
           obj.others.push(element)
       }
    });
    return obj
}

console.log(a([false,true,{},{},'',1,2,3]));