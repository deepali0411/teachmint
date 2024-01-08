import React, { useEffect, useMemo, useState } from "react";

import { getPostsFromApi, getUsersFromApi } from "../actions/actions";
import UserCard from "../components/userCard/UserCard";

import styles from "./dashboard.module.scss";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  const getUsers = async () => {
    const data = await getUsersFromApi();
    setUsers(data);
  };
  const getPosts = async () => {
    const data = await getPostsFromApi();
    setPosts(data);
  };
  useEffect(() => {
    getUsers();
    getPosts();
  }, []);

  const renderUserCards = useMemo(() =>
      users.map((user) => {
        const userPosts = posts.filter((post) => post.userId === user.id);
        return <UserCard userData={user} userPosts={userPosts} />;
      }),
    [users, posts]
  );

  return <div className={styles.dashboard}>{renderUserCards}</div>;
};

export default Dashboard;
