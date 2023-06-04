import { useEffect, useState } from "react";

const url = "https://jsonplaceholder.typicode.com/posts";

const FetchData = () => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();

      setstate(data);
    };
    fetchData();
  }, []);

  return (
    <div className="outer">
      {state.map((item) => {
        const { userId, id, title, body } = item;
        return (
          <div key={id} className="container">
            <img src="https://picsum.photos/200?random=${post.id}" alt="" />
            <h4>User ID: {userId}</h4>
            <h3>Title: {title}</h3>
            <p>Body: {body}</p>
          </div>
        );
      })}
    </div>
  );
};
export default FetchData;
