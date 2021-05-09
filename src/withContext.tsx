import React from 'react'
import { useAnimatedScale, useDimension} from './hooks'

const withContext = (MainComponent : React.FC<any>) : React.FC<any> => {
    return (props : any) => {
        const { w, h } = useDimension()
        const { scale, start : onClick } = useAnimatedScale()
        const compProps = {
            w, 
            h, 
            scale,
            onClick 
        }
        return (
            <MainComponent {...compProps}>
            </MainComponent>
        )
    }
}

export default withContext 