import React, { useMemo, useState } from "react";
import Modal from "../modal/Modal";

import styles from "./postCard.module.scss";

const PostCard = ({ postData }) => {
    
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlClickCard = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const renderPost = useMemo(
    () => (
      <>
        <div className={styles.title}>{postData?.title}</div>
        <div className={styles.content}>{postData?.body}</div>
      </>
    ),
    [postData]
  );

  return (
    <div className={styles.PostCard}>
      <div className={styles.container} onClick={handlClickCard}>
        {renderPost}
      </div>
      {isModalVisible && (
        <Modal hideModal={hideModal}>
          <div className={styles.container}>{renderPost}</div>
        </Modal>
      )}
    </div>
  );
};

export default PostCard;
