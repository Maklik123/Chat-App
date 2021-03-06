import { SELECT_CURRENT_CHAT, NEW_CHAT_CREATED, CHAT_SELECTED } from '../../constants';
import { CREATE_NEW_CHAT, SET_FAVORITE } from '../../constants/actionsTypes';

const selectChat = payload => ({
  type: SELECT_CURRENT_CHAT,
  payload
});

const createNewDirectChat = payload => ({
  type: CREATE_NEW_CHAT,
  payload
});

const chatCreated = payload => ({
  type: NEW_CHAT_CREATED,
  payload
});

const chatSelected = payload => ({
  type: CHAT_SELECTED,
  payload
});

const setFavorite = payload => ({
  type: SET_FAVORITE,
  payload
});

export { selectChat, chatSelected, createNewDirectChat, chatCreated, setFavorite };
