import React, {useEffect, useState} from 'react';
import './App.css';
import CustomButton from './CustomButton';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./Redux/redux";
import {buttonIncAC, buttonResetAC, inputMaxAC, inputMinAC, localStorageAC, saveAC} from "./Redux/reducer";


 export type TypeState = {
    arr1: number,
    arrMin: number,
    arrMax: number,
    initMax: string,
    initMin: string
}


function App() {


    const state = useSelector<AppRootStateType, TypeState>((state)=> state.tack)
    const dispatch = useDispatch()


    return (
        <div>

            <div className='absolute'>
                <div className='scoreboard'>
                    <div className='grid'>
                        <div className="display">
                            <div style={{color: (state.arr1 == state.arrMax ? " #801e61 " : "")}}> {state.arr1} </div>
                        </div>
                        <CustomButton disabled={state.arr1 == state.arrMax && true} setValue={()=>dispatch(buttonIncAC())} value={state.arr1}
                                      className='buttonClick' name='CLICK'/>
                        <CustomButton disabled={state.arr1 == state.arrMin && true} setValue={()=>dispatch(buttonResetAC())} value={state.arr1}
                                      className='buttonReset' name='RESET'/>
                    </div>
                </div>
                <div className='settings'>
                    <div className='grid'>
                        <div>

                            <input placeholder='Max' value={state.initMax} className='max' type="number"
                                   onChange={(e) => dispatch(inputMaxAC(e.target.value))}/>

                            <input placeholder='Min' value={state.initMin} className='min' type="number"
                                   onChange={(e) => dispatch(inputMinAC(e.target.value))}/>
                            <button className='save' onClick={() => dispatch(saveAC())}>save</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}


export default App;
