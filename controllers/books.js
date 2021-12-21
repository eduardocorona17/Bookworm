
const Book = require('../models/book');

module.exports = {
    index,
    new: newBook,
    create,
    show

}; 

function index(req, res) {
    Book.find({}, function(err, books) {
        res.render('books/index', { books }); // this is our csllback function 
    })

}

function newBook(req, res) {
    res.render("books/new", {title: "Add Book" });
}

function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === "") delete req.body[key];
    }
    const book = new Book(req.body);
    book.save(function (err) {
        if (err) {
            console.log(err);
            return res.redirect('/books/new');
        }
        console.log(book);
        res.redirect(`/books/${book._id}`);
    })
}

function show(req, res) {
    Book.findById(req.params.id, function(err, book) {
        res.render('books/show', { book })
    }) 
        
    
}