/* eslint-disable import/prefer-default-export */
import { SET_POST } from './types'

export const setPosts = (payload) => ({
  type: SET_POST,
  payload,
})
