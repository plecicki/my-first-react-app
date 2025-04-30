import {createStore} from 'redux';
import shortid from 'shortid';
import initialState from './initialState';
import {compareStrings} from '../utils/strContains'

export const getFilteredCards = ({cards, search}, columnId) => {
  const searchedText = search.searchText ? search.searchText : '';
  return cards.filter(card => card.columnId === columnId && compareStrings(card, searchedText));
}

export const getAllColumns = ({columns}) => columns;

export const getColumnsByList = ({columns}, listId) => {
  return columns.filter(column => column.listId === listId);
}

export const addList = payload => ({type: 'ADD_LIST', newList: payload});

export const addColumn = payload => ({type: 'ADD_COLUMN', newColumn: payload});

export const addCard = payload => ({type: 'ADD_CARD', newCard: payload});

export const removeCard = payload => ({type: 'REMOVE_CARD', cardId: payload})

export const searchString = payload => ({type: 'SEARCH', searchText: payload});

export const getSearch = ({search}) => search;

export const getAllLists = ({lists}) => lists;

export const getListById = ({lists}, listId) => lists.find(list => list.id === listId);

export const toggleCardFavoriteStatus = payload => ({type:'TOGGLE_CARD_FAVORITE', cardId: payload})

export const getCardById = ({cards}, cardId) => cards.find(card => card.id === cardId);

export const selectIsFavoriteById = (state, cardId) => getCardById(state, cardId)?.isFavorite;

export const getFavoriteCards = ({cards}) => cards.filter(card => card.isFavorite === true);

const listsReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'ADD_LIST':
      return [...statePart, {...action.newList, id: shortid()}];
    default:
      return statePart;
  }
}

const columnsReducer = (statePart = [], action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return [...statePart, {...action.newColumn, id: shortid()}];
    default:
      return statePart;
  }
}

const cardsReducer = (statePart = [], action) => {
  console.log('statePart', statePart);
  switch(action.type) {
    case 'ADD_CARD':
      return [...statePart, {...action.newCard, id: shortid()}];
    case 'REMOVE_CARD':
      return [...statePart.filter(card => card.id!==action.cardId)];
    case 'TOGGLE_CARD_FAVORITE':
      return statePart.map(card => (card.id === action.cardId) ? { ...card, isFavorite: !card.isFavorite } : card);
    default:
      return statePart;
  }
}

const searchStringReducer = (statePart = '', action) => {
  switch(action.type) {
    case 'SEARCH':
      return action.searchText;
    default:
      return statePart;
  }
}

const reducer = (state, action) => {
  const newState = {
    lists: listsReducer(state.lists, action),
    columns: columnsReducer(state.columns, action),
    cards: cardsReducer(state.cards, action),
    search: searchStringReducer(state.search, action)
  };

  return newState;
}

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;