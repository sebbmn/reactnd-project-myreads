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
            BooksAPI.search(query, 20).then((searchResult) => {
                if (!searchResult.error){
                    // Check if some books are already on the shelves
                    searchResult.map(book => {
                        book.shelf = ''
                        this.state.books.forEach(function(element) {
                            if(element.id.match(book.id)) {
                                if(!book.shelf.match('none')) {
                                    book.shelf = element.shelf
                                }
                            } 
                        }, this);
                        return book
                    })
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
