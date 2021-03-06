const getComments = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_PUBLIC_API}/post/${id}/comment`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'app-id': process.env.REACT_APP_DUMMYAAPI_KEY,
      },
    }
  )
  return response.json()
}

export default getComments
