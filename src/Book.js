import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Books extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        changeShelf: PropTypes.func.isRequired
    }
    render() {
        const { book, changeShelf } = this.props

        return (
            <div>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                        <div className="book-shelf-changer">
                            <select onChange={event => changeShelf(book, event.target.value)} value={book.shelf}>
                                <option value="" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    {book.authors && book.authors.map((author) =>(
                            <div className="book-authors" key={author}>{author}</div>
                        )
                    )}
                </div>
            </div>
        )
    }
}

export default Books