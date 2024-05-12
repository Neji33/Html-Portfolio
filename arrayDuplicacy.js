let a= [1,2,3,4,4,1,2,1,34,332,31,3];
let b= [];
let len = a.length;
for (let i = 0; i < len;i++){
	if(b.indexOf(a[i])=== -1){
		b.push(a[i]);
	}
}
console.log(b);