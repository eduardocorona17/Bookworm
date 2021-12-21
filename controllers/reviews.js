const { db } = require('../models/book');
const Book = require('../models/book');
const router = require('../routes');

module.exports = {
    create,
    delete: deleteReview,
    update
};

function create(req, res) {
    Book.findById(req.params.id, function(err, book){
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        book.reviews.push(req.body);
        book.save(function(err) {
            if (err) console.log(err);
            console.log(book);
            res.redirect(`/books/${book._id}`);
        });
    });
};

function deleteReview(req, res, next) {
  Book.findOne({ 'reviews._id': req.params.id }).then(function (book) {
      const review = book.reviews.id(req.params.id);
      if (!review.user.equals(req.user._id)) return res.redirect(`/books/${movie._id}`);
      review.remove();
      book.save()
      .then(function () {
          res.redirect(`/books/${book._id}`);
      })
      .catch(function (err) {
          return next(err);
      });
  });
};

function update(req, res) {
    Book.findOne({'reviews._id': req.params.id}, function(err, book) {
        console.log(req.user);
        const reviewSubdoc = book.reviews.id(req.params.id);
        console.log(book)
        if (!reviewSubdoc.user.equals(req.user._id)) return res.redirect(`/books/${book._id}`);
        reviewSubdoc.content = req.body.text;
        book.save(function(err) {
            res.redirect(`/books/${book._id}`);
        });
    });
}