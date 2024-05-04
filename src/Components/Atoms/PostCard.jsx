import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removePost } from "../Store/postSlice";

const PostCard = ({ data,handlePostRemove }) => {
  const { body, userId, id, title } = data;
  const dispatch=useDispatch()
  
  return (
    <div className="relative flex p-4 flex-col justify-between w-[250px] h-[250px] border">
      <button
        className="absolute top-2 right-2"
        onClick={() => handlePostRemove(id)}
      >
        <AiOutlineClose />
      </button>
      <div>{id}</div>
      {/* <div>{userId}</div> */}
      <div>{title}</div>
      <div className="truncate">{body}</div>
    </div>
  );
};

export default PostCard;
