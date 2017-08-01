import React from 'react'
// eslint-disable-next-line
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book'
import SearchBooks from './SearchBooks'
import BookShelf from './BookShelf'

class BooksApp extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        showSearchPage: false
    }
    render() {
        return (
            <div className="app">
                {this.state.showSearchPage ? (
                    <SearchBooks />
                ) : (
                    <div className="list-books">
						<div className="list-books-title">
							<h1>MyReads</h1>
						</div>
						<div className="list-books-content">
							<div>
								<BookShelf title="Currently reading" />
								<BookShelf title="Want to Read" />
								<BookShelf title="Read" />
							</div>
						</div>
						<div className="open-search">
							<a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
						</div>
                    </div>
                )}
            </div>
        )
    }
}

export default BooksApp
