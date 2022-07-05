import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { selectionnerPoint } from '../redux/points/actions';

export default function ListItem({id, situation, zone, contact, coords }) {
    const {points: {selectedPoint, points}} = useSelector((state)=> state.points); 
    const dispatch = useDispatch();

    const handleClick = (e) => {
        dispatch(selectionnerPoint({id,situation, zone, contact, coords}))
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
