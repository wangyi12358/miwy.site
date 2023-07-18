import Post from './schemas/post'
import { clientFetch } from '@/sanity/lib/client'
import { groq } from 'next-sanity'


const getPostsQuery = () => groq`
  *[_type == "post"] {
    _id,
    title,
    "slug": slug.current,
    "categories": categories[]->title,
    description,
    publishedAt,
    readingTime,
    mood,
    body[] {
      ...,
      _type == "image" => {
        "url": asset->url,
        "lqip": asset->metadata.lqip,
        "dimensions": asset->metadata.dimensions,
        ...
      }
    },
    "headings": body[length(style) == 2 && string::startsWith(style, "h")],
   }
  `

export const getPosts = () => clientFetch<{ result: typeof Post[] }>(getPostsQuery())
