import uuid from 'uuid/v1'
const BookReducer = (state , action) => {
    switch (action.type) {
        case 'ADD' :
            return [...state , {linkName : action.card.linkName,
                                linkHref : action.card.linkHref,
                                id: uuid()}]
        case 'REMOVE' :
            return state.filter(book => book.id !== action.id)
        default : return state

    }
}

export default BookReducer;