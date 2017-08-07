import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BooksList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired
    }
    render() {
        const { books, changeShelf } = this.props
        return (
            <ol className="books-grid">
                {books && books.map((book) =>(
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