class Library {
    #books = [];
    constructor(books) {
        books.forEach((newBook) => {
            if (!this.hasBook(newBook)) {
                this.addBook(newBook);
            }
        });
    }

    hasBook(title) {
        return this.#books.includes(title);
    }

    addBook(title) {
        this.#books.push(title);
    }

    get allBooks() {
        return [...this.#books];
    }

    addBook(title) {
        if (this.hasBook(title)) {
            throw new Error(`The book "${title}" is already in the library.`);
        }
        this.#books.push(title);
    }

    removeBook(title) {
        if (!this.hasBook(title)) {
            throw new Error(`The book "${title}" is not in the library.`);
        }
        this.#books = this.#books.filter((book) => book !== title);
    }
}

const library = new Library(["Book 1", "Book 2", "Book 3"]);

console.log(library.allBooks);
console.log("Has book 1 " + library.hasBook("Book 1"));
library.addBook("Book 4");
console.log("after add 4" + library.allBooks);
library.removeBook("Book 3");
console.log("after remove 3" + library.allBooks);
