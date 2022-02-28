import {TypeState} from "../App";

const initialState:TypeState = {arr1: 0, arrMin: 0, arrMax: 0, initMax: '', initMin: ''}
export const reducer = (state:TypeState = initialState, action: any):TypeState => {

    switch (action.type) {
        case 'INC': {
            return {...state, arr1: state.arr1 + 1} }
        case 'RESET': {
            return {...state, arr1: state.arrMin} }
        case 'SAVE': {
            if (state.initMin >= state.initMax) {
               return {...state, initMax: '', initMin: ''}
            } else {
                return {
                    ...state, arr1: Number(state.initMin),
                    arrMax: Number(state.initMax),
                    arrMin: Number(state.initMin),
                    initMax: '',
                    initMin: ''
                }
            }
            }
        case 'INPUT-MAX': {
            return {...state, initMax:action.value} }
        case 'INPUT-MIN': {
            return {...state, initMin:action.value} }
        case'LOCAL-STORAGE' :{ return action.state}
default:return state
    }

}

export const buttonIncAC = () => {return {type: 'INC'}}
export const buttonResetAC = () => {return {type: 'RESET'}}
export const saveAC = () => {return {type: 'SAVE'}}
export const inputMaxAC = (value:string) => {return {type: 'INPUT-MAX', value}}
export const inputMinAC = (value:string) => {return {type: 'INPUT-MIN', value}}
export const localStorageAC = (state:TypeState) => {return{type:'LOCAL-STORAGE', state}

}