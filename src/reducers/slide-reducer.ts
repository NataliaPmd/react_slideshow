import { db } from '../data/db'
import { SlideType } from "../types";

export type SlideAction = { type: 'restart'} | { type: 'prev'} | { type: 'next'} 

export type SlideState = {
    slide: SlideType,
    data: SlideType[]
}

export const initialState : SlideState = {
    slide: db[0],
    data: db
}


export const slideReducer = (state: SlideState, action: SlideAction) => {
    switch(action.type) {
        case 'restart':
            return initialState
        case 'prev':
            {
                const newSlide: SlideType = state.data.find((item: SlideType) => item.id === state.slide.id - 1) || initialState.slide
                return {slide: newSlide, data: db}
            }
        case 'next':
            {
                const newSlide: SlideType = state.data.find((item: SlideType) => item.id === state.slide.id + 1) || initialState.slide
                return {slide: newSlide, data: db}
            }
        default:
            return initialState
    }
}


