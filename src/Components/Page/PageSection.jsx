import { useEffect, useState } from "react";
import useAPI from "../Hooks/UseApi";
import Pagination from "../Pagination/Pagination";
import PostCard from "../Atoms/PostCard";
import { useDispatch, useSelector } from "react-redux";

const PageSection = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [post, setPost] = useState([]);
  const postPerPage = 6;

  const apiData = useAPI("https://jsonplaceholder.typicode.com/posts");
  const { data, loading, error } = apiData;

  const postData = useSelector((state) => state.post.data) || [];
  console.log("postdata", postData);

  useEffect(() => {
    if (data) {
      setPost(data);
    }
  }, [data]);

  // Pagination Logic...
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = post.slice(indexOfFirstPost, indexOfLastPost);
  console.log("currentPost", currentPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePostRemove = (id) => {
    const updtatePosts = post.filter((post) => post.id !== id);
    setPost(updtatePosts);
  };

  return (
    <div className="flex flex-col gap-5">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-3 gap-3">
          {currentPost.map((item) => {
            return (
              <div key={item.id}>
                <PostCard data={item} handlePostRemove={handlePostRemove} />
              </div>
            );
          })}
        </div>
      )}
      <div>
        <Pagination
          postPerPage={postPerPage}
          totalPost={data.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default PageSection;
