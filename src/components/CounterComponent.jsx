import { useCounter } from '../hooks/useCounter'

export const CounterComponent = () => {

  const {counter, add, reset, reduce} = useCounter(0)

  return (
    <>
    <h1>Counter: {counter}</h1>
    <hr />
    <div className="actions">
        <button className="btn btn-primary" onClick={ () => add(1)}>+1</button>
        <button className="btn btn-danger" onClick={ () => reset()}>Reset</button>
        <button className="btn btn-primary" onClick={ () => reduce(1)}>-1</button>
    </div>
    
    </>
  )
}
