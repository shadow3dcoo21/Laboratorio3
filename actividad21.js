const autos=['BMW','Mercedes Benx','Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);

for(let i=0;i<autos.length;i++){
    console.log(i+' : '+autos[i])
}

autos[1]='MercedesBenz';
console.log(autos);

autos.push('Audi')
console.log(autos);