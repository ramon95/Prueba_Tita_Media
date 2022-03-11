import { SET_POST, TOGGLE_LOADER, SET_POST_ID } from '../actions/types'

const initialState = {
  posts: null,
  postId: '',
  loading: false,
}

// eslint-disable-next-line default-param-last
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST:
      return { ...state, posts: action.payload }
    case SET_POST_ID:
      return { ...state, postId: action.payload }
    case TOGGLE_LOADER:
      return { ...state, loading: !state.loading }
    default:
      return { ...state }
  }
}

export default Reducer
