import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES  = [
	{
		id : 'p1',
		title : 'Statue of Unity',
		description : "World's Tallest Monument!",
		imageUrl : 'https://images.adsttc.com/media/images/5bd9/b552/f197/cc45/e900/00d6/medium_jpg/43914221_363966157680449_595145553531016098_n.jpg?1540994380',
		address : 'Sardar Sarovar Dam, Statue of Unity Rd, Kevadia, Gujarat 393155',
		location : {
			lat : 21.856266,
			lng : 73.6813503
		},
		creator : '1'
	},
	{
		id : 'p2',
		title : 'Statue of Unity',
		description : "World's Tallest Monument!",
		imageUrl : 'https://images.adsttc.com/media/images/5bd9/b552/f197/cc45/e900/00d6/medium_jpg/43914221_363966157680449_595145553531016098_n.jpg?1540994380',
		address : 'Sardar Sarovar Dam, Statue of Unity Rd, Kevadia, Gujarat 393155',
		location : {
			lat : 21.856266,
			lng : 73.6813503
		},
		creator : '2'
	},
	
	
]
const UserPlaces = () => {
	const userId = useParams().userId;
	const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
	
	return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
