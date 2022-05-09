import User from "./User/User";

const Users = ({ data }) => {
  return (
    data &&
    data.map((user) => (
      <User
        key={user.id}
        id={user.id}
        name={user.name}
        city={user.address.city}
        company={user.company.name}
      />
    ))
  );
};

export default Users;
