import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { RxArrowLeft } from "react-icons/rx";
const goBack = () => {
  window.history.back();
};

function Detail() {
  const { categoryName, postId } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [authorName, setAuthorName] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/posts/${postId}`);
      const data = await response.json();
      setTitle(data.title);
      setContent(data.content);
      setAuthorName(data.authorName);
    };
    fetchData();
  }, [postId]);

  return (
    <div>
      <div style={{ width: '800px', height: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <button style={{ border: 'none', backgroundColor: '#fdfdfd', color: '', fontSize: 20 }} onClick={goBack}>
          <RxArrowLeft />
        </button>
        {sessionStorage.getItem('username') === authorName && (
          <h4
            style={{
              marginLeft: '640px',
              fontSize: 15,
              color: '#555555',
              border: '2px solid gray',
              borderRadius: 5,
              width: '40px',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={async () => {
              const response = await fetch(`/posts/${postId}`, {
                method: 'DELETE',
              });
              const data = await response.text();
              alert(data);
              if (response.ok) {
                window.history.back();
                // handle successful deletion
              } else {
                // handle unsuccessful deletion
              }
            }}
          >
            삭제
          </h4>
        )}
      </div>
      <div style={{ marginLeft: '80px', marginTop: '30px', width: '640px', height: '40px', display: 'flex', flexDirection: 'row', alignItems: 'center', border: '2px solid #1188bb', borderRadius: 10, }}>
        <div style={{ width: '560px', height: '40px', marginLeft: '20px', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <h4>
          {authorName} : {title}
          </h4>
        </div>
      </div>
      <div style={{ padding: '10px', marginLeft: '70px', marginTop: '30px', width: '660px', height: '520px', display: 'flex', flexDirection: 'row', border: '2px solid #bb8811', borderRadius: 5 }}>
        {content}
      </div>
    </div>
  );
}

export default Detail;
