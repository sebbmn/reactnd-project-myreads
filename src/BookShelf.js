import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BooksList from './BooksList'

class BookShelf extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        changeShelf: PropTypes.func.isRequired
    }
    render() {
        const { title, books, changeShelf } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <BooksList 
                        books={books}
                        changeShelf={changeShelf}
                    />
                </div>
            </div>
        )
    }
}

export default BookShelf