import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

class BooksList extends Component {
    render() {
        return (
            <ol className="books-grid">
                <li>
                    <Book/>
                </li>
                <li>
                    <Book/>
                </li>
            </ol>
        )
    }
}
export default BooksList