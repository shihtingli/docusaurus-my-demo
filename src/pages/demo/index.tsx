import React, { useState, useEffect } from 'react'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'

export default function Demo() {
  type PostList = { id: number; title: String }[]

  const getPostList = async () => {
    const postData = [
      { id: 1, title: 'data1' },
      {
        id: 2,
        title: 'data2',
      },
    ]
    return postData
  }
  const [allPostsData, setAllPostsData] = useState<PostList>([])

  useEffect(() => {
    initalize()
  }, [])

  const initalize = async () => {
    setAllPostsData(await getPostList())
    console.log(allPostsData)
  }

  return (
    <>
      <Layout>
        {/* <head> */}
        <title>demo page</title>
        {/* </head> */}
        <section>
          <p>This is React Demo App</p>
        </section>
        {/* Add this <section> tag below the existing <section> tag */}
        <section>
          <h2>Blog</h2>
          <ul>
            {allPostsData.map(({ id, title }) => (
              <li key={id}>
                <a>
                  {id}. {title}
                </a>
                {/* <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small> */}
              </li>
            ))}
          </ul>
          <p>
            go to <Link to="/docs/intro">Docs</Link>!
          </p>
          <p>
            go to <Link to="/">Home Page</Link>!
          </p>
        </section>
      </Layout>
    </>
  )
}
