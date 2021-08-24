let arr1 = [2,6,8,7,9,4,5,10,3];
arr1 = arr1.map((x) => {
	return x + 10
})
console.log(arr1);

//2
let arr2 = [10,6,15,20,12,13,11,5,4,7,8,9];
arr2 = arr2.filter((a) => a*10>100)
console.log(arr2)
//3
 let arr3 = ["Armenia","Georgian","Russia","USA"];
 arr3 = arr3.sort();
 console.log(arr3)
 //4
 let arr4 = ["abgd","abgdeze","abgdezeytj","abgddd","abg","ab"];
 arr4 =arr4.sort((a) => a.length < 7 ? 1 : -1);
 console.log(arr4)
 
 //7
 let arr7 = [7,10,20,30,40,50,2,6,8,4,9,60];
 arr7 = arr7.filter((a) =>  a % 10 == 0 )
 console.log(arr7)

//5
let arr5  = [1,2,3,4,5,6,-5,-8,-9,-7,-4,-2];
arr5 = arr5.filter((a) => a > 0)
console.log(arr5)
//6
let arr6 = ["congratulations"];
arr6 = arr6.filter((a) => a)