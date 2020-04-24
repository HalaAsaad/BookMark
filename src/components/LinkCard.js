import React, { Fragment, createContext, useState, useEffect} from 'react';

export const IndexContext = createContext();
const LinkCard = ({deleteHandler,src, cards, children }) => {
    var index = 0;
    const [id,setId]=useState(index)
    const mappedData = cards.map((card, i) => {
        return(
            <Fragment>
            <div key={i} className="linkCard">
                <div className="linkCardImage"><img src={src} className="App-logo" alt="logo"/></div>
                <div className="linkCardLink"><h2><a href={card.linkHref}>{card.linkName}</a></h2></div>
                <button onClick={deleteHandler}>Delete</button>
                <span>{i}</span>
            </div>
            </Fragment>
        );
    })
    return (
        <IndexContext.Provider value={id}>
            {mappedData}
            {children}
        </IndexContext.Provider>
    )
}

export default LinkCard ;