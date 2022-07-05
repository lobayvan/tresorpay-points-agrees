import React, {useState, useEffect} from 'react'
import {connect, useSelector, useDispatch} from 'react-redux';
import ListItem from './ListItem';
import { rechercherPoint, reInitialiserPoints } from '../redux/points/actions';
import Dimension from '../Hooks/Dimension';

export default connect() (function Form() {
    const dispatch = useDispatch();
    const dimensions = Dimension();
    const {points} = useSelector((state)=> state.points);
    const [inputValue, setInputValue] = useState("");

    const handleChangeInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const handleSearch = (e) => {
        if(inputValue.length > 0) {
            dispatch(rechercherPoint(inputValue));
        }
    }

    const handleClearSearch = (e) => {
        setInputValue("");
        dispatch(reInitialiserPoints());
    }


    useEffect(()=> {
        console.log("les points: ", points);
        console.log("les dimensions: ", dimensions);
    }, [points, dimensions])


    return (
        <div className='form'>
            <div className="form-body">
                <h3 className='form-title'>Recherche</h3>
                <div className='form-input'>
                    <input 
                        type="text" 
                        className='form-input-text'
                        value={inputValue}
                        onInput={handleChangeInputValue} />
                    {inputValue && <button className='form-input-clear' onClick={handleClearSearch}>x</button>}
                </div>
                <button 
                    className='form-btn-search'
                    onClick={handleSearch} >
                    Rechercher
                </button>
            </div>

            <h5 className='form-list-title'>
                POINTS AGREES TRESORMONEY
            </h5>
            <div className='form-list'>
                {points && points.map((item, index) => <ListItem key={item.id} {...item} dimensions={dimensions} />)}
            </div>
        </div>
    )
})
