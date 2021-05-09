import React from 'react'
import {useStyle} from './hooks'

interface ConcCircleProps {
    w : number, 
    h : number, 
    scale : number, 
    onClick : Function 
}

const ConcCircle : React.FC<ConcCircleProps> = (props : ConcCircleProps) => {
    const {parentStyle, circle1Style, circle2Style} = useStyle(props.w, props.h, props.scale)
    return (
        <div style = {parentStyle()} onClick = {() => props.onClick()}>
            <div style = {circle1Style()}>
            </div>
            <div style = {circle2Style()}>
            </div>
        </div>
    )
}

export default ConcCircle 