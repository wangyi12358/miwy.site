import React from 'react';
import Avatar from '@/components/ui/avatar';
import Posts from '@/components/blog/posts'
import { FEATURED_POSTS } from '@/common/posts'
import Contacts from '@/components/contacts'



function PersonalInfo() {

  return (
    <div className="container-card animation-enter-from-bottom">
      <Avatar className="mt-8" src="https://mika-resource.oss-cn-hangzhou.aliyuncs.com/blog/avatar.jpg"/>
      <div className="animation-enter-from-bottom text-center mt-2">Mika</div>
      <div className="mt-6 w-80 text-center animation-enter-from-bottom">
        Full stack & Developer
      </div>
      <Contacts />
    </div>
  )
}

function Blogs() {

  return (
    <div className="container-card animation-enter-from-bottom">
      <div className="layout-background absolute" />
      <div className="w-full">
        <h3 className="primary-color subtitle">博客</h3>
        <Posts posts={FEATURED_POSTS} />
      </div>
    </div>
  )
}

function Projects() {
  return (
    <div className="flex items-center justify-center mt-6 relative layout-container rounded-sm p-8">
      <div className="layout-background absolute" />
      <div>
        This is my projects
      </div>
    </div>
  )
}

function HomePage() {

  return (
    <>
      <PersonalInfo />
      {/*<Blogs />*/}
    </>
  );
}

export default HomePage;
