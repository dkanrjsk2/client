import { useParams, Link } from "react-router-dom";

const data = ["1", "2", "3", "4"];

//useEffect를 통해 categoryName을 query로 보내면
// 일치하는 것들의 record를 가져온다.

function PostList() {
  const { categoryName } = useParams();
  return (
    <div>
      {categoryName} 게시판 입니다.
      <div>
        {data.map((id) => (
          <div key={id}>
            <Link to={`/${categoryName}/${id}`}>
              <h3>
                {categoryName}의 {id} 게시물 클릭하기
              </h3>
            </Link>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostList;
