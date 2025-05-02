import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./common/Navbar";
import Home from "./components/Home";
import { useState, useEffect } from "react";
import UserList from "./components/UserList";
import UserDetails from "./components/UserDetails";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchApi();
  }, []);

  if (loading) return <div style={{ fontSize: "50px" }}>Loading.....</div>;

  if (error) return <div style={{ fontSize: "50px" }}>{error}</div>;

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/userList"
          element={<UserList users={users} loading={loading} error={error} />}
        />
        <Route path="/userDetails/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
