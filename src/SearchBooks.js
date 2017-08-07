import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BooksList from './BooksList'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SearchBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateQuery: PropTypes.func.isRequired,
        changeShelf: PropTypes.func.isRequired
    }
    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
        this.props.onUpdateQuery(query.trim())
    }

    clearQuery = () => {
        this.setState({ query: '' })
    }
    render() {
        const { books, changeShelf } = this.props
        const { query } = this.state

        let displayedBooks = []
        if(books && query) {
            const match = new RegExp(escapeRegExp(query), 'i')
            displayedBooks = books.filter((book) => match.test(book.title))
        }
        displayedBooks.sort(sortBy('title'))
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={query} onChange={(event) => this.updateQuery(event.target.value)}/>                  
                    </div>
                </div>
                <div className="search-books-results">
                    <BooksList 
                        books={displayedBooks}
                        changeShelf={changeShelf}
                    />
                </div>
            </div>
        )
    }
}

export default SearchBooks