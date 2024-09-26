import { useContext } from "react";
import { AppContext } from "../Context/appContext";

export const Blogs = () => {
  const { posts, loading } = useContext(AppContext);
  return (
    <div className="flex flex-col justify-center gap-5">
      {loading ? 
      (
        <spinner />
      ) : posts.length === 0 ? 
      
      (
        <div>
          <p>bhutni ke phutt yaha se</p>
        </div>
      ) : 
      (posts.map((posts) => (
        <div key={posts.id}>
            <p className="font-bold underline">{posts.title}</p>
            <p>
              By<span className="font-bold">{posts.author}</span> on <span className="font-bold">{posts.category}</span>
            </p>
            <p>Posted on <span className="font-semibold">{posts.date}</span></p>
            <p>{posts.content}</p>
            <div className="font-semibold text-blue-400">
              {posts.tags.map( (tag, index) => {
                return <span key={index}>{`#${tag}`}</span>;
              })}
            </div>
        </div>
        ))
      )}
    </div>
  );
};
