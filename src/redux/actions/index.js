import { SET_POST, TOGGLE_LOADER, SET_POST_ID, SET_USER_ID } from './types'

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

export const setUserId = (payload) => ({
  type: SET_USER_ID,
  payload,
})
