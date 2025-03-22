import { useState, useEffect } from "react";
import handler from "./api/hello";
import { User } from "../utils/App.Types";

export default function Home() {
	const [userData, setUserData] = useState<User[] | undefined>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		const getUser = async () => await handler();
		getUser().then((returnedUser) => {
			if (!returnedUser) {
				setLoading(true);
			} else {
				console.log(returnedUser);
				setUserData(returnedUser);
				setLoading(false);
			}
		});
	}, []);
	const displayUser = () => {
		return (
			<div>
				{loading ? (
					<h1>Loading...</h1>
				) : (
					userData &&
					userData.map((user, index) => (
						<div key={index}>
							<h1>
								{user.name.first} {user.name.last}
							</h1>
							<p>{user.email}</p>
							<p>{user.location.city}</p>
							<p>{user.location.state}</p>
						</div>
					))
				)}{" "}
			</div>
		);
	};

	return (
		<div className="text-2xl">
			<h1>Hello World</h1>
			<div>{displayUser()}</div>
		</div>
	);
}
