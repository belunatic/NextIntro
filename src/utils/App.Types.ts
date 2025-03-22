export type User = {
	name: {
		title: string;
		first: string;
		last: string;
	};
	email: string;
	location: {
		city: string;
		state: string;
	};
};
