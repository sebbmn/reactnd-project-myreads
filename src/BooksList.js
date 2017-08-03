import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BooksList extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
    }
    render() {
        const { books } = this.props
        return (
            <ol className="books-grid">
                {books && books.map((book) =>(
                        <li key={book.id}>
                            <Book book={book}/>
                        </li>
                    )
                )}
            </ol>
        )
    }
}
export default BooksList