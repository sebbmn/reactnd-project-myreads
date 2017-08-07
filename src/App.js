import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import './App.css'
import MyReads from './MyReads'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
    state = {
        searchResult: [],
        books: []
    }
    bookSearch(query) {
        if(query !== ''){
            BooksAPI.search(query, 10).then((searchResult) => {
                if (!searchResult.error){
                    this.setState({searchResult})
                }
            })
        } else {
            this.setState({searchResult: []})
        }  
    }
    changeShelf = (book, shelf) => {
        book.shelf = shelf
        BooksAPI.update(book, shelf).then(
            this.setState((state) => ({
                books: state.books.filter((b) => b.id !== book.id).concat([book])
        })))
    }
    componentDidMount() {
        // console.log('did mount')
        BooksAPI.getAll().then((books) => {
            if(!books.error) {
                this.setState({books})
            }
        })  
    }

    render() {
        const { books } = this.state
        let shelves = {
            currentlyReading: [],
            wantToRead: [],
            read: [],
        }
        if(books) {
            shelves.currentlyReading = books.filter((book) => book.shelf.match('currentlyReading'))
            shelves.wantToRead = books.filter((book) => book.shelf.match('wantToRead'))
            shelves.read = books.filter((book) => book.shelf.match('read'))
        }
        return (
            <div className="app">
                <Route exact path='/SearchBooks' render={() => (
                    <SearchBooks 
                        onUpdateQuery={(query) => this.bookSearch(query)}
                        books={this.state.searchResult}
                        changeShelf={this.changeShelf}
                    />
                )}/>
                <Route exact path='/' render={() => (
                    <MyReads 
                        shelves={shelves}
                        changeShelf={this.changeShelf}
                    />
                )}/>
            </div>
        )
    }
}

export default BooksApp
