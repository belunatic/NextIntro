// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler() {
	try {
		const response = await fetch("https://randomuser.me/api/?results=1");
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}
