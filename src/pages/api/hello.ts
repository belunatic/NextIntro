// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { User } from "../../utils/App.Types";

export default async function handler(): Promise<User[] | undefined> {
	try {
		const response = await fetch("https://randomuser.me/api/?results=1");
		const data = await response.json();
		return data.results;
	} catch (error) {
		console.log(error);
	}
}
