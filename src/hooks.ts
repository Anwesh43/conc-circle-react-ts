import {useState, useEffect} from 'react'

const scGap : number = 0.02 
const delay : number = 20 

export const useAnimatedScale = () => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev : number) => {
                        if (scale > 1) {
                            setAnimated(false)
                            clearInterval(interval)
                            return 0 
                        }
                        return prev + scGap  
                    })
                }, delay) 
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
            return () => {
                window.onresize = () => {}
            }
        }
    })
    return {
        w, 
        h
    }
}

export const useStyle = (w : number, h : number, scale : number) => {
    const r1 : number = Math.min(w, h) / 4.9 
    const r2 : number = Math.min(w, h) / 15.9 
    const position : string = 'absolute'
    const left : string = `${w / 2}px`
    const top : string = `${h / 2}px`
    const border : string = `3px solid black`
    const borderRadius : string = `50%`
    return {
        parentStyle() {
            return {
                position, 
                left, 
                top 
            }
        },
        circle1Style() {
            const left : string = `${-r1}px`
            const top : string = `${-r1}px`
            const width : string = `${2 * r1}px`
            const height : string = `${2 * r1}px`
            return {
                position, 
                left, 
                top, 
                border, 
                borderRadius,
                width, 
                height
                
            }
        },
        circle2Style() {
            const x : number = r1 * Math.cos(2 * Math.PI * scale)
            const y : number = r1 * Math.sin(2 * Math.PI * scale)
            const left : string = `${x - r2}px`
            const top : string = `${y - r2}px`
            const width : string = `${2 * r2}px`
            const height : string = `${2 * r2}px`
            return {
                position, 
                left, 
                top, 
                width, 
                height,
                border, 
                borderRadius
            }
        }
    }
}