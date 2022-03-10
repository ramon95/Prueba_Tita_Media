import { SET_POST } from '../actions/types'

const initialState = {
  posts: null,
  error: '',
  loading: false,
}

// eslint-disable-next-line default-param-last
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST:
      return { ...state, posts: action.payload }
    default:
      return { ...state }
  }
}

export default Reducer
