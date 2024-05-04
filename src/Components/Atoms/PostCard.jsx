import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removePost } from "../Store/postSlice";

const PostCard = ({ data,handlePostRemove }) => {
  const { body, userId, id, title } = data;
  const dispatch=useDispatch()
  
  return (
    <div className="rounded relative flex p-4 flex-col justify-between w-[250px] h-[250px] border">
      <button
        className="absolute top-4 right-4 bg-red-400 rounded-full p-1 text-[10px]"
        onClick={() => handlePostRemove(id)}
      >
        <AiOutlineClose />
      </button>
      <div>{id}</div>
      {/* <div>{userId}</div> */}
      <div className="line-clamp-2">{title}</div>
      <div className="line-clamp-3">{body}</div>
    </div>
  );
};

export default PostCard;
