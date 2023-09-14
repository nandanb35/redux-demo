import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchPosts } from "../slices/postsSlice";

import { Audio } from "react-loader-spinner";

type Props = {};

const Posts = (props: Props) => {
  const { loading, posts } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (loading) {
    <div className="flex flex-col gap-2 items-center justify-center mt-4">
      <Audio
        height="80"
        width="80"
        color="green"
        ariaLabel="three-dots-loading"
      />
    </div>;
  }

  return (
    <div className="flex flex-col gap-2 items-center justify-center mt-4">
      {posts.map((post) => (
        <div className="p-2 bg-slate-500 rounded-lg text-white" key={post.id}>
          {post.title}
        </div>
      ))}
    </div>
  );
};

export default Posts;
