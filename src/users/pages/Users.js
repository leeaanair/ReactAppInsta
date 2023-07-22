import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
	const USERS = [
	{
		id : 1,
		name : 'Levi Ackerman',
		image : 'https://vignette.wikia.nocookie.net/shingekinokyojin/images/b/b1/Levi_Ackermann_(Anime)_character_image.png/revision/latest?cb=20180829121715&path-prefix=ru',
		placeCount : 3
	},

	{
		id : 2,
		name : 'Erwin Smith',
		image : 'https://i.pinimg.com/originals/aa/d7/51/aad751c9f0b0b326b43596f12f165ccf.jpg',
		placeCount : 5
	},
	
		{
		id : 3,
		name : 'Hange Zoe',
		image : 'https://i.pinimg.com/originals/90/a4/85/90a4851cc8b53e7e10f5a8bb07e5fcfd.jpg',
		placeCount : 10
	}

	];
	
	return (<UsersList items = {USERS} />);
}

export default Users;