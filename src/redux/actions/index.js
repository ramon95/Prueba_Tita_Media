import { SET_POST, TOGGLE_LOADER, SET_POST_ID } from './types'

export const setPosts = (payload) => ({
  type: SET_POST,
  payload,
})

export const toggleLoader = () => ({
  type: TOGGLE_LOADER,
})

export const setPostId = (payload) => ({
  type: SET_POST_ID,
  payload,
})
