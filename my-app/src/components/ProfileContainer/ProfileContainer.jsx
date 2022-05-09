import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Profile from "./Profile";
import { usersAPI } from "../../api/api";
import { useAppSelector } from "../../app/hooks";

const ProfileContainer = () => {
  const { id } = useParams();
  const { users, isLoad } = useAppSelector((state) => state.users);
  const user = users.find((item) => item.id == id);

  return <Profile data={user} />;
};
export default ProfileContainer;
