import { useParams } from "react-router-dom";

function Detail() {
  const { categoryName, postId } = useParams();
  return (
    <div>
      {categoryName} 게시판의 {postId}번째 글입니다.
    </div>
  );
}

export default Detail;
