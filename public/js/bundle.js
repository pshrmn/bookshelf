/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(2);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _Bookshelf = __webpack_require__(3);

	var _Bookshelf2 = _interopRequireDefault(_Bookshelf);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(_Bookshelf2.default, null), document.getElementById("content"));

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactDOM;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _Book = __webpack_require__(4);

	var _Book2 = _interopRequireDefault(_Book);

	var _BookForm = __webpack_require__(5);

	var _BookForm2 = _interopRequireDefault(_BookForm);

	var _bookLoader = __webpack_require__(7);

	var _bookLoader2 = _interopRequireDefault(_bookLoader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: "Bookshelf",

	  getInitialState: function getInitialState() {
	    return {
	      books: [],
	      show: 5,
	      more: false,
	      adding: false
	    };
	  },
	  showMore: function showMore(event) {
	    event.preventDefault();
	    var newShow = this.state.show + 5;
	    this.setState({
	      show: newShow,
	      more: newShow < this.state.books.length
	    });
	  },
	  showAddBook: function showAddBook(event) {
	    this.setState({
	      adding: true
	    });
	  },
	  cancelBook: function cancelBook() {
	    this.setState({
	      adding: false
	    });
	  },
	  saveBook: function saveBook(book) {
	    this.setState({
	      // add the book to the beginning
	      books: [book].concat(this.state.books),
	      show: this.state.show + 1,
	      adding: false
	    });
	  },
	  render: function render() {
	    var books = this.state.books.slice(0, this.state.show).map(function (b, i) {
	      return _react2.default.createElement(_Book2.default, _extends({ key: i }, b));
	    });
	    var more = this.state.more ? _react2.default.createElement(
	      "a",
	      { href: "#", onClick: this.showMore },
	      "Show More"
	    ) : null;
	    var addABook = _react2.default.createElement(
	      "div",
	      { className: "book add", onClick: this.showAddBook },
	      "Add A Book"
	    );
	    var form = this.state.adding ? _react2.default.createElement(_BookForm2.default, { save: this.saveBook, cancel: this.cancelBook }) : null;
	    return _react2.default.createElement(
	      "div",
	      { className: "bookshelf" },
	      _react2.default.createElement(
	        "div",
	        { className: "books" },
	        books,
	        addABook
	      ),
	      more,
	      form
	    );
	  },
	  componentDidMount: function componentDidMount() {
	    var _this = this;

	    (0, _bookLoader2.default)("data/books.json").then(function (resp) {
	      _this.setState({
	        books: resp.books,
	        show: 5,
	        more: resp.books.length > 5
	      });
	    });
	  }
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: "Book",

	  render: function render() {
	    var _props = this.props;
	    var title = _props.title;
	    var author = _props.author;
	    var genre = _props.genre;

	    return _react2.default.createElement(
	      "div",
	      { className: "book" },
	      _react2.default.createElement(
	        "div",
	        { className: "title" },
	        title
	      ),
	      _react2.default.createElement(
	        "div",
	        { className: "author" },
	        author
	      )
	    );
	  }
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _genres = __webpack_require__(6);

	var _genres2 = _interopRequireDefault(_genres);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
	  displayName: "BookForm",

	  getInitialState: function getInitialState() {
	    return {
	      title: "",
	      author: "",
	      genre: -1
	    };
	  },
	  validate: function validate() {
	    return this.state.title !== "" && this.state.author !== "" && this.state.genre !== -1;
	  },
	  save: function save(event) {
	    event.preventDefault();
	    if (this.validate()) {
	      this.props.save({
	        title: this.state.title,
	        author: this.state.author
	      });
	    }
	  },
	  cancel: function cancel(event) {
	    event.preventDefault();
	    this.props.cancel();
	  },
	  changeTitle: function changeTitle(event) {
	    this.setState({
	      title: event.target.value
	    });
	  },
	  changeAuthor: function changeAuthor(event) {
	    this.setState({
	      author: event.target.value
	    });
	  },
	  changeGenre: function changeGenre(event) {
	    this.setState({
	      genre: event.target.value
	    });
	  },
	  render: function render() {
	    var _this = this;

	    var genreOptions = _genres2.default.map(function (g, i) {
	      return _react2.default.createElement(
	        "label",
	        { key: i },
	        _react2.default.createElement("input", { type: "radio",
	          value: i,
	          name: "genre",
	          onChange: _this.changeGenre }),
	        g
	      );
	    });
	    return _react2.default.createElement(
	      "form",
	      { onSubmit: this.save },
	      _react2.default.createElement(
	        "label",
	        null,
	        "Title: ",
	        _react2.default.createElement("input", { type: "text",
	          value: this.state.title,
	          onChange: this.changeTitle })
	      ),
	      _react2.default.createElement(
	        "label",
	        null,
	        "Author(s): ",
	        _react2.default.createElement("input", { type: "text",
	          value: this.state.author,
	          onChange: this.changeAuthor })
	      ),
	      _react2.default.createElement(
	        "div",
	        null,
	        "Genre: ",
	        genreOptions
	      ),
	      _react2.default.createElement(
	        "button",
	        null,
	        "Save"
	      ),
	      _react2.default.createElement(
	        "button",
	        { onClick: this.cancel },
	        "Cancel"
	      )
	    );
	  }
	});

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = ["adventure", "biography", "children's", "fantasy", "historical", "mystery", "poetry", "science fiction", "thriller", "war", "western"];

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = bookLoader;
	function bookLoader(url) {
	  return new Promise(function (resolve, reject) {
	    var req = new XMLHttpRequest();
	    req.open("GET", url);
	    req.responseType = "json";
	    req.onload = function () {
	      if (req.status === 200) {
	        resolve(req.response);
	      } else {
	        reject(Error("Failed to load books from url " + url));
	      }
	    };

	    req.onerror = function () {
	      reject(Error("Network error loading " + url));
	    };
	    req.send();
	  });
	}

/***/ }
/******/ ]);