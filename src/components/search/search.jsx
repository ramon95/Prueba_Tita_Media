/* eslint-disable no-console */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getTags from '../../api/get/tags'
import { setPosts, setTags, toggleLoader } from '../../redux/actions'
import { getPostsByTag } from '../../api/get/posts'
import '../../assets/styles/search.scss'

const Search = () => {
  const dispatch = useDispatch()
  const tags = useSelector((state) => state.tags)
  useEffect(() => {
    getTags()
      .then((response) => {
        dispatch(setTags(response.data))
      })
      .catch((error) => {
        console.log(error)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = (e) => {
    const { value } = e.target
    dispatch(toggleLoader())
    getPostsByTag(value.replace(/ /g, ''))
      .then((response) => {
        dispatch(setPosts(response))
        dispatch(toggleLoader())
      })
      .catch((error) => console.log(error))
  }

  return (
    <div className="search_container">
      <select name="Tags" onChange={handleChange}>
        {tags.length > 0 &&
          tags.map((tag, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <option key={index} value={tag}>
              {tag}
            </option>
          ))}
      </select>
    </div>
  )
}

export default Search
