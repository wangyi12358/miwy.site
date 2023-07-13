import React from 'react';
import Avatar from '@/components/ui/avatar';
import Posts from '@/components/blog/posts'
import { FEATURED_POSTS } from '@/common/posts'
import Contacts from '@/components/contacts'

function HomePage() {

  return (
    <>
      <div className="container-card animation-enter-from-bottom">
        <Avatar className="mt-8" src="https://mika-resource.oss-cn-hangzhou.aliyuncs.com/blog/avatar.jpg"/>
        <div className="text-center mt-2">Mika</div>
        <div className="mt-6 w-80 text-center">
          Full stack & Developer
        </div>
      </div>
      <div className="mt-12 title">精选博客</div>
      <Posts posts={FEATURED_POSTS} />
      <Contacts />
    </>
  );
}

export default HomePage;
