import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import keyIndex from 'react-key-index'

class BooksList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired
    }
    render() {
        const { books, changeShelf } = this.props
        let indexedBooks = keyIndex(books, 1)
        return (
            <ol className="books-grid">
                {books && indexedBooks.map((book) =>(
                        <li key={book.id}>
                            <Book 
                                book={book}
                                changeShelf={changeShelf}
                            />
                        </li>
                    )
                )}
            </ol>
        )
    }
}
export default BooksList