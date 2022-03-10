import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BoxPost from '../components/box_post/box_post'
import Layout from '../components/layout/layout'
import getPosts from '../api/get/posts'
import { setPosts } from '../redux/actions'
import '../assets/styles/home.scss'

const Home = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts)
  console.log('🚀 ~ file: home.jsx ~ line 12 ~ Home ~ posts', posts)

  useEffect(() => {
    getPosts()
      .then((response) => {
        dispatch(setPosts(response))
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <Layout>
      <div className="box_container">
        {posts !== null &&
          posts.data.map((post) => <BoxPost key={post.id} post={post} />)}
      </div>
    </Layout>
  )
}

export default Home
