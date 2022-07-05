import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { selectionnerPoint } from '../redux/points/actions';

export default function ListItem({id, situation, zone, contact, coords, dimensions }) {
    const {points: {selectedPoint, points}} = useSelector((state)=> state.points); 
    const dispatch = useDispatch();

    const handleClick = (e) => {
        if(dimensions[0] < 576) {
            window.open(`http://maps.google.com/maps?q=loc:${situation}/@${coords[0]},${coords[1]}`, "_blank");
            return false;
        }
        dispatch(selectionnerPoint({id,situation, zone, contact, coords}));
    }

    useEffect(() => {
        console.log("state points: ", points)
        return () => {

        }
    }, [points])

    return (
        <div key={id} className={"form-list-item "} onClick={handleClick}>
            <h3 className='title'> {situation} </h3>
            <p className='text'>
                <span> {zone} </span> - <span> {contact}</span>
            </p>
        </div>
    )
}
