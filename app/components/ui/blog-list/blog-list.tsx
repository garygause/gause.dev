import React from 'react';

import BlogListItem from '@ui/blog-list-item';
import { Post } from '@/app/lib/definitions';

function BlogList({ posts }: { posts: Post[] }) {
  let imageLeft = true;

  return (
    <section>
      <div className="max-w-screen-xl  py-4 mx-auto flex">
        <div className="mr-auto place-self-center lg:col-span-7 ">
          <div className="w-full space-y-10 flex flex-col">
            <div className="flex flex-row flex-wrap container mx-auto space-x-10">
              {posts &&
                posts.map((post) => {
                  imageLeft = !imageLeft;
                  return (
                    <div className="w-1/2" key={post._id}>
                      <BlogListItem
                        post={post}
                        imageLeft={true}
                        variant="medium"
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogList;
