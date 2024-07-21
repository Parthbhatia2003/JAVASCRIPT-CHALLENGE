const { splitVendorChunkPlugin } = require("vite");

//ACTIVITY 1
const obj = {
    title: "King",
    author: "Virat Kohli",
    year: "18-18-18"
}
console.log(obj);

console.log(obj.title);
console.log(obj.author);

//ACTIVITY 2

let oldbook = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,

    printall: function () {
        console.log(oldbook);
    }
}

oldbook.printall()
let book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,

    // Add a method to update the year
    updateYear: function (newYear) {
        this.year = newYear;
        console.log(this);
    }
};

book.updateYear(2003)

//ACTIVITY 3
let library = {
    name: "sky",
    books: [
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925,
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925,
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925,
        }
    ]
}

console.log(library);

console.log(library.name);
let array=library.books
for (const iterator of array) {
    console.log(iterator.title);
}

//ACTIVITY 4
let booky = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,

    // Add a method to update the year
    print:function(){
        console.log(`${this.title} , ${this.author} , ${this.year}`);
    }
};

booky.print()

//ACTIVITY 5

for (const key in obj) {
    // console.log(key);
    console.log(key,obj[key]);
}

console.log(Object.keys(obj),Object.values(obj));
