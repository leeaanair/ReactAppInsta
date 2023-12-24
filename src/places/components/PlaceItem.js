import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './PlaceItem.css';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';
import Map from '../../shared/components/UIElements/Map';


const PlaceItem = props => {
	
	const [showMap, setShowMap] = useState(false);
	const [showDelete, setShowDelete] = useState(false);

	const openMapHandler = () => setShowMap(true);
	const closeMapHandler = () => setShowMap(false);
	
	const openDeleteHandler = () => {
		setShowDelete(true);
	}
	const cancelDeleteHandler = () => {
		setShowDelete(false);
	}
	const deletePlaceHandler = () => {
		setShowDelete(false); 
		console.log("Deleting");
	}
	
	return (
	<React.Fragment>
	
		<Modal show={showMap}
		onCancel={closeMapHandler}
		header={props.title} 
		contentClass="place-item__modal-content" 
		footerClass="place-item__modal-footer"  
		footer={<Button onClick={closeMapHandler}>CLOSE</ Button>}>
			<div className="map-container">
				<Map lat={props.coordinates.lat} lng={props.coordinates.lng}/>
			</div>
		</Modal>
		
		<Modal 
		show={showDelete}
		onCancel={cancelDeleteHandler}
		header="Are you sure?" footerClass="place-item__modal-actions" footer={
			<React.Fragment>
				<Button inverse onClick={cancelDeleteHandler}>Cancel</Button>
				<Button danger onClick={deletePlaceHandler}>Proceed</Button>
			</React.Fragment>
		}>
			<p>Are you sure you want to delete this place? The action cannot be undone.</p>
		</Modal>

		<li className="place-item">
		<Card>
			<div className="place-item__image">
				<img src={props.image} alt={props.title} />
			</div>
			<div className="place-item__info">
				<h2>{props.title}</h2>
				<h3>{props.address}</h3>
				<p>{props.description}</p>
			</div>
			<div className="place-item__actions">
				<Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
				<Button to={`/places/${props.id}`}>EDIT</Button>
				<Button danger onClick={openDeleteHandler}>DELETE</Button>
			</div>
		</Card>
	</li>
	</React.Fragment>
	);
};

export default PlaceItem;
