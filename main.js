const arr = [];
const name = prompt('Name: ');
const name2 = name.trim();

if (name2.includes(' ')){
    alert('Access denied')
} else if(name.length >7){
    const age = prompt('Age:')
    if (age >= 18) {
        arr.push({
            name: name,
            age: age
        })
    } else (alert('access denied'))
} else (alert('access denied'))

