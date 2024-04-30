const arr = []

const name = prompt('Name: ');

if (name.length > 7 || name.endsWith(' ') ) {
    const age = +prompt('Age: ');

    if (age > 18) {
        arr.push({
            name: name,
            age: age
        })
    }
} else {
    alert('Access denied');
}
else {
    alert('Access denied')git 
}
// let str = 'my name is ozodbek';
