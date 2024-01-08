import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./userCard.module.scss";

const UserCard = ({ userData = {}, userPosts = [] }) => {
  const navigate = useNavigate();

  const handleClickCard = () => {
    navigate(`/user-profile/${userData.id}`, {
      state: { userData, userPosts },
    });
  };

  return (
    <div className={styles.userCard} onClick={handleClickCard}>
      <div className={styles.name}>
        <span>Name:</span> {userData?.name}
      </div>
      <div className={styles.name}>
        <span>Posts:</span> {userPosts.length}
      </div>
    </div>
  );
};

export default UserCard;
