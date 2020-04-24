import React, {Fragment, useState, useEffect, useContext} from 'react';
import uuid from 'uuid/v1';
import logo from './logo.svg';
import './App.css';
import LinkCard, { IndexContext } from './components/LinkCard';

function App() {
const id = useContext(IndexContext);

  const localData =  localStorage.getItem('books');
  const lo =  localData ? JSON.parse(localData) : [];
    
  const [ cardData, setCardData] =useState([{
    linkName: 'my Link',
    linkHref: 'https://github.com',
    id: 1 }]);

  const [ newCard, setNewcard] = useState({
    linkName: '',
    linkHref: '',
    id: uuid()
  });

  useEffect (() => {
    localStorage.setItem('books', JSON.stringify(cardData));
  },[cardData,id]);

  const dispatchCardSet = (payload) => {
    let oldArray = cardData ;
    let newArray = [...oldArray, payload];
    setCardData(newArray);
    setNewcard({
      linkName: '',
      linkHref: '',
      id: uuid()
    });
    
  
  }
  const deleteHandler = (index) => {
    const copyCards = cardData.slice();
     copyCards.splice (index ,1);
    //copyCards.filter(book => book.id !== index)
    setCardData(copyCards);
}
const mappedData = cardData.map((card, i) => {
  return(
      <Fragment>
      <div key={i} className="linkCard">
          <div className="linkCardImage"><img src={logo} className="App-logo" alt="logo"/></div>
          <div className="linkCardLink"><h2><a href={card.linkHref}>{card.linkName}</a></h2></div>
          <button onClick={() => deleteHandler(i)}>Delete</button>
      </div>
      </Fragment>
  );
})
  return (
      <Fragment>
        {console.log(id)}
            <nav className="navigation">
              <a><img height="40px" src={logo} className="App-logo" alt="logo" /></a>
              <ul>
                <li>Home</li>
              </ul>
            </nav>
            <main>
                <div className="leftContent">
                  <img src={logo} className="App-logo" alt="logo" />
                  <form onSubmit={e => e.preventDefault()}>
                    <h2 className="formTitle">Add a bookmark</h2>
                    <div>
                      <label htmlFor="linkTitle" className="formLabel">Enter a bookmark name</label>
                      <input 
                          value={newCard.linkName}
                          type="text"
                          name="linkTitle"
                          minLength="1"
                          maxLength="25"
                          placeholder="25 characters max"
                          onChange={e => setNewcard({...newCard, linkName:e.target.value})} />
                    </div>
                    <div>
                      <label htmlFor="linkHref" className="formLabel">Enter a bookmark name</label>
                        <input
                            value={newCard.linkHref} 
                            type="text"
                            name="linkHref"
                            minLength="7" // http://
                            placeholder="https://example.com/"
                            onChange={e => setNewcard({...newCard, linkHref:e.target.value})} />
                      </div>
                    <button onClick={() => dispatchCardSet(newCard)}>Add</button>
                  </form>
                </div>
                <div className="rightContent">
  {/* <LinkCard deleteHandler={() => deleteHandler(id)} src={logo} cards={cardData} /> */}
                    {mappedData}
                </div>
            </main>
      </Fragment>
  );
}

export default App;
