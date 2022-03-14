import React from 'react'
import Image from 'next/image'

export default function Article({ blog }) {
  return (
    <div>
        {/* <Image
            src={blog.image.url}
            width={60}
            height={60}
        /> */}
        <img src={blog.image.url} width={60} />
        <p>{blog.title}</p>
        <p>{blog.createdAt}</p>
        <p>{blog.body}</p>
        <p>{blog.category}</p>
        <p>{blog.tags}</p>
    </div>
  )
}
