import { useEffect, useState } from "react";
import axios from "axios";
import User from "../components/User.jsx";
import { Link } from "react-router-dom";

function Home() {
  const [users, setUsers] = useState([]);

  async function fetchData() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
  
    setUsers(data);
  }

  useEffect(() => {
    setTimeout(()=>{
      fetchData();
    }, 1000)
    
  }, []);

  return (
    // Indicating loading wles fetching data
    // <div>
    //  {
    //   users.length>0
    //  ?<h1>{users[0]?.username}</h1>
    //  :<h1>Loading...</h1>
    //  }
    // </div>
    <div>
      {users.length>0? users.map((user) => (
        <Link key={user.id} to={`/users/${user.id}`}>
          <User
            id={user.id}
            name={user.name}
            username={user.username}
          />
        </Link>
      )):<h1>Loading...</h1>}
    </div>
  );
}

export default Home;
