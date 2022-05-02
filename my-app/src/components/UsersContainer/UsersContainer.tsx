import React, {useState, useEffect} from "react";
import styles from "./usersContainer.module.scss";
import Users from "./Users";
import {usersAPI} from "../../api/api";
import {useAppSelector} from "../../app/hooks";

import {IUser} from "../../features/users/types/index";
import {SortConfigState} from "../../features/sortConfig/types/index";

const UsersContainer: React.FC = () => {
	const users = useAppSelector((state) => state.users.users);
  const sortType = useAppSelector((state) => state.sort.sortType);
  const error = useAppSelector(state => state.users.error);
  const isLoad = useAppSelector(state => state.users.isLoad);
	const [sortedUsers, setSortedUsers] = useState<Array<IUser>>([]);

	useEffect(() => {
		users.sort(sortByType(sortType, users));
	}, [users]);

	const [usersCount, setUsersCount] = useState(0);

	function sortByType(sortType: string, users: Array<IUser>) {
		if ((sortType = "city")) {
			setSortedUsers(users.sort(sortByCity));
			console.log(sortedUsers);
		} else if ((sortType = "company")) {
			setSortedUsers(users.sort(sortByCompanyName));
		}
		return setSortedUsers(users);
	}

	function sortByCity(a: any, b: any) {
		if (a.address.city > b.address.city) return 1;
		if (a.address.city < b.address.city) return -1;
		return 0;
	}

	function sortByCompanyName(a: any, b: any) {
		if (a.company.name > b.company.name) return 1;
		if (a.company.name < b.company.name) return -1;
		return 0;
	}

	return (
		<div className={styles.users}>
			<h1>Пользователи</h1>
			{isLoad && <div>A moment please...</div>}
			{error && (
				<div>{`There is a problem fetching the post data - ${error}`}</div>
			)}
			<div className={styles.users}>
				<Users data={sortedUsers} />
			</div>
			<div className={styles.usersCount}>
				{" "}
				Найдено {usersCount} пользователей
			</div>
		</div>
	);
};
export default UsersContainer;
