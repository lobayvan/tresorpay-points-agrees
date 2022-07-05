import React, {useState, useEffect} from 'react'
import {connect, useSelector, useDispatch} from 'react-redux';
import ListItem from './ListItem';
import { rechercherPoint, reInitialiserPoints } from '../redux/points/actions';

export default connect() (function Form() {
    const dispatch = useDispatch();
    const {points} = useSelector((state)=> state.points);
    const [inputValue, setInputValue] = useState("");

    const handleChangeInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const handleSearch = (e) => {
        console.log("text a recherché: ", inputValue);
        dispatch(rechercherPoint(inputValue));
    }

    const handleClearSearch = (e) => {
        setInputValue("");
        dispatch(reInitialiserPoints());
    }


    useEffect(()=> {
        console.log("[form component] : ", points);
        console.log("les points: ", points);
    }, [points])


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

            <div className='form-list'>
                <h5 className='form-list-title'>
                    POINTS AGREES TRESORMONEY
                </h5>
                {points && points.map((item, index) => <ListItem key={item.id} {...item} />)}
            </div>
        </div>
    )
})
