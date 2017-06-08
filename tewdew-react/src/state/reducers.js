import * as actions from './actions';

const state = (state = {}, action) => {
  switch (action.type) {
    case actions.SUCCESS_FETCHING_TODOS:
      return state = Object.assign({}, state, {
        todos: action.todos
      });
    default:
      return state;
  }
}

export default state;
