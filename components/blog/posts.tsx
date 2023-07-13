import React from 'react';
import { Post } from '@/common/posts'
import Link from 'next/link';
import ChevronRight from '@/components/icons/chevron-right';
import classnames from 'classnames';
import { formatDate } from '@/utils/date';
import Image from '@/components/ui/image'

type Props = {
  posts: Post[]
  className?: string
};

/**
 * @Author: wangyi
 * @Date: 2023-05-27
 */
const Posts: React.FC<Props> = ({ posts, className }) => {

  return (
    <div
      className={classnames(
        'grid-container',
        className,
      )}>
      {posts.map((post, index) => {
        const href = `/blog/${post.filename}`

        return (
          <div
            className="grid-item hover:grid-item"
            key={`post_${index}`}
          >
            <div className="h-full w-full">
              <Image className="w-full" src={`/_posts/${post.img ?? 'empty.jpg'}`} />
              <div className="font-medium text-lg mt-2">{post.title}</div>
              <div className="second-color text-sm">{post.desc}</div>
              <div className="mt-2 flex justify-between text-sm">
                <span>{formatDate(post.date)}</span>
                <span>{post.readTime}分钟阅读</span>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default Posts;
