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

export const getFavoriteCards = ({cards}) => cards.filter(card => card.isFavorite === true);

const reducer = (state, payload) => {
  switch (payload.type) {
    case 'ADD_LIST':
      return {...state, lists: [...state.lists, {...payload.newList, id: shortid()}]};
    case 'ADD_COLUMN':
      return {...state, columns: [...state.columns, {...payload.newColumn, id: shortid()}]};
    case 'ADD_CARD':
      return {...state, cards: [...state.cards, {...payload.newCard, id: shortid()}]};
    case 'REMOVE_CARD':
      return {...state, cards: [...state.cards.filter(card => card.id!==payload.cardId)]};
    case 'TOGGLE_CARD_FAVORITE':
      return { ...state, cards: state.cards.map(card => (card.id === payload.cardId) ? { ...card, isFavorite: !card.isFavorite } : card) };
    case 'SEARCH':
      return {...state, search: payload.searchText}
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;