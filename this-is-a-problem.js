function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = first + ' ' + last;
    // return { name: this.firstName + ' ' + this.lastName };
}

let n = new NameMe('John', 'Doe');
n.firstName //Expected: John
n.lastName //Expected: Doe
n.name //Expected: John Doe
console.log(n.firstName)
console.log(n.lastName)
console.log(n.name)