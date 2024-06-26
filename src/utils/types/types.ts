export type TUser = {
	_id: number | null;
	firstname: string;
	lastname: string;
	email: string;
	birthDate: string;
	login: {
		uuid: string;
		username: string;
		password: string;
		registered: string;
	};
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
};

export type TUsersResponse = {
	data: TUser[];
};
