import React, { createContext, useReducer} from 'react';
import BookReducer from './BookReducer'

export const BookContext = createContext();
export const BookdispatchContext = createContext();
const initialState = {}
const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer( BookReducer,initialState);
    return (
        <BookContext.Provider value={books}>
            <BookdispatchContext.Provider value={dispatch}>
                {props.children}
            </BookdispatchContext.Provider>
        </BookContext.Provider>
    )
}
export default BookContextProvider;