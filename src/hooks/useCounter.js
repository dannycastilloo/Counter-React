import { useState } from 'react'

export const useCounter = (initialValue = 0) => {

    const [counter, setCounter] = useState(initialValue)

    const add = (value = 1) => {
        setCounter(counter + value)
    }
    
    const reset = () => {
        setCounter(0)
    }
    
    const reduce = (value = 1) => {
        setCounter(counter - value)
    }

    return {
        counter,
        add,
        reset,
        reduce
    }
}