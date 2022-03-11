/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BoxPost from '../components/box_post/box_post'
import Layout from '../components/layout/layout'
import { getPosts } from '../api/get/posts'
import { setPosts, toggleLoader } from '../redux/actions'
import Modal from '../components/modal/modal'
import getComments from '../api/get/comments'
import ListComments from '../components/list_comments/list_comments'
import getUser from '../api/get/users'
import UserInfo from '../components/user_info/user_info'
import Search from '../components/search/search'
import '../assets/styles/home.scss'

const Home = () => {
  const dispatch = useDispatch()
  const [modalComments, setModalComments] = useState(false)
  const [modalUser, setModalUser] = useState(false)
  const [comments, setComments] = useState([])
  const [user, setUser] = useState({})
  const posts = useSelector((state) => state.posts)
  const postId = useSelector((state) => state.postId)
  const userId = useSelector((state) => state.userId)

  useEffect(() => {
    dispatch(toggleLoader())
    getPosts()
      .then((response) => {
        dispatch(setPosts(response))
        dispatch(toggleLoader())
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    if (postId !== '') {
      getComments(postId)
        .then((response) => {
          setComments(response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [postId])

  useEffect(() => {
    if (userId !== '') {
      getUser(userId)
        .then((response) => {
          setUser(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [userId])

  return (
    <Layout>
      <div className="home_container">
        {modalComments && (
          <Modal
            title="Comments"
            hideModal={() => setModalComments(!modalComments)}
          >
            <ListComments comments={comments} />
          </Modal>
        )}
        {modalUser && (
          <Modal title="User Data" hideModal={() => setModalUser(!modalUser)}>
            <UserInfo user={user} />
          </Modal>
        )}
        <Search />
        <div className="box_container">
          {posts !== null &&
            posts.data.map((post) => (
              <BoxPost
                key={post.id}
                post={post}
                hideModalComments={() => setModalComments(!modalComments)}
                hideModalUser={() => setModalUser(!modalUser)}
              />
            ))}
        </div>
      </div>
    </Layout>
  )
}

export default Home
