import { useState } from "react";
import useAPI from "../Hooks/UseApi";
import Pagination from "../Pagination/Pagination";
import PostCard from "../Atoms/PostCard";
import { useDispatch, useSelector } from "react-redux";
import { removePost } from "../Store/postSlice";

const PageSection = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 6;

  const apiData = useAPI("https://jsonplaceholder.typicode.com/posts");
  const { data, loading, error } = apiData;
  const post=useSelector(state=>state);
  console.log("post",post);

  //pagination Logic
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = data.slice(indexOfFirstPost, indexOfLastPost);
  console.log("currentPost", currentPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-3 gap-3">
        {currentPost.map((item) => {
          return (
            <div key={item.id}>
              <PostCard  data={item}  />
            </div>
          );
        })}
      </div>
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
