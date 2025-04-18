import { createStore } from 'redux';
import shortid from 'shortid';
import initialState from './initialState';
import { compareStrings } from '../utils/strContains'

export const getFilteredCards = ({cards, search}, columnId) => {
  const searchedText = search.searchText ? search.searchText : '';
  return cards.filter(card => card.columnId === columnId && compareStrings(card, searchedText));
}

export const getAllColumns = ({ columns }) => columns;

export const addColumn = payload => ({ type: 'ADD_COLUMN', newColumn: payload });

export const addCard = payload => ({ type: 'ADD_CARD', newCard: payload});

export const searchString = payload => ({ type: 'SEARCH', searchText: payload });

const reducer = (state, payload) => {
  switch(payload.type) {
    case 'ADD_COLUMN':
      return { ...state, columns: [...state.columns, { ...payload.newColumn, id: shortid() }]};
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { ...payload.newCard, id: shortid() }]};
    case 'SEARCH':
      return { ...state, search: payload.searchText}
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