import { useParams } from "react-router-dom";
import Profile from "./Profile";
import { useAppSelector } from "../../app/hooks";

const ProfileContainer = () => {
  const { id } = useParams();
  const { users } = useAppSelector((state) => state.users);
  const user = users.find((item) => item.id === +id);

  return <Profile data={user} />;
};
export default ProfileContainer;
