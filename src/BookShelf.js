import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BooksList from './BooksList'

class BookShelf extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired
    }
    render() {
        const { title } = this.props
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <BooksList/>
                </div>
            </div>
        )
    }
}

export default BookShelf