import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import Dropdown from "react-dropdown";
import { useLocation, useNavigate } from "react-router-dom";
import _isEmpty from "lodash/isEmpty";

import { getCountriesFromApi, getCurrentTimeFromApi } from "../actions/actions";

import PostCard from "../components/postCard/PostCard";
import TimerClock from "../components/timerClock/TimerClock";

import "react-dropdown/style.css";
import styles from "./userProfile.module.scss";

const UserProfile = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { userData, userPosts } = state;

  const [countries, setCountries] = useState([]);
  const [dropdownValue, setDropDownValue] = useState();
  const [currentTime, setCurrentTime] = useState([]);

  const getCountries = async () => {
    const data = await getCountriesFromApi();
    setCountries(data);
    setDropDownValue(data[0]);
  };

  const getCurrentTime = async (id) => {
    const data = await getCurrentTimeFromApi(id);
    const time = data?.datetime.split("T")[1].split(".")[0].split(":");
    setCurrentTime(time);
  };

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    if (!_isEmpty(countries)) {
      getCurrentTime(dropdownValue);
    }
  }, [countries, dropdownValue]);

  const handleChangeCountry = (e) => {
    setDropDownValue(e.value);
  };

  const renderPosts = useMemo(
    () =>
      userPosts.map((post) => {
        return <PostCard postData={post} />;
      }),
    [userPosts]
  );

  const handleBackClick = useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <div className={styles.userProfile}>
      <header>
        <button className={styles.backButton} onClick={handleBackClick}>
          Back
        </button>
        <div className={styles.countriesContainer}>
          <Dropdown
            options={countries}
            onChange={handleChangeCountry}
            value={dropdownValue}
            className={styles.dropdown}
          />
          <TimerClock time={currentTime} />
        </div>
      </header>
      <div className={styles.userDetails}>
        <div className={styles.leftSide}>
          <div>
            <span>Name:</span> {userData?.name}
          </div>
          <div>
            <span>Username:</span> {userData?.username || "abc"}
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.address}>
            <span>Address:</span>{" "}
            {`${userData?.address?.street} ${userData?.address?.suite}`}{" "}
            {`${userData?.address?.city} ${userData?.address?.zipcode}`}
          </div>
          <div>
            <span>Email:</span> {userData?.email}
          </div>
          <div>
            <span>Mobile:</span> {userData?.phone}
          </div>
        </div>
      </div>
      <div className={styles.posts}>{renderPosts}</div>
    </div>
  );
};

export default UserProfile;
