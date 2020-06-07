import React from 'react'
import { NextPage, NextPageContext } from 'next'
import useReqeust from '../lib/utils/useRequest'

interface Props {
  id: string
}

const page: NextPage<Props> = ({ id }) => {
  const { data, error } = useReqeust({
    url: `/api/user/${id}`,
    method: 'GET'
  })

  if (error) {
    return <div>Error...</div>
  }

  if (!data) {
    return <div>Loading</div>
  }
  return (
    <div>
      {id}-{data}
    </div>
  )
}

interface Context extends NextPageContext {
  query: { id: string }
}

page.getInitialProps = async ({ query: { id } }: Context) => {
  return { id }
}

export default page
