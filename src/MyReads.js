import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class MyReads extends Component {
  render() {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    <BookShelf title="Currently reading" books={[]}/>
                    <BookShelf title="Want to Read" books={[]}/>
                    <BookShelf title="Read" books={[]}/>
                </div>
            </div>
            <div className="open-search">
                <Link to="/SearchBooks">Add a book</Link>
            </div>
        </div>
    )
  }
}

export default MyReads