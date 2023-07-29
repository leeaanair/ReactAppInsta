import React from 'react';

import './UsersList.css';
import UserItem from './UserItem';
import Card from '../../shared/components/UIElements/Card';

const UsersList = props => {
	
	if(props.items.length === 0){
		return (
			<Card>
				<div className = "center">
					<h2>No users found :(</h2>
				</div>
			</Card>
		);
	}
	
	else{
		return(
			<ul className = "users-list">
			{		
			
			/* 				props.item.map(user => {
					return(
						<UserItem />
					);
				})
 */			
		
				props.items.map(user => (
				<UserItem 
					key={user.id} 
					id={user.id} 
					image={user.image} 
					name={user.name} 
					placeCount = {user.placeCount} 
				/>
				))}
			</ul>
		);
	}
};

export default UsersList;
