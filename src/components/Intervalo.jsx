import './Intervalo.css'
import Card from './Card'

import { useDispatch, useSelector } from 'react-redux'
import { changeMax, changeMin } from '../store/features/numbersSlice'

const Intervalo = (props) => {
  const dispatch = useDispatch()
  const { min, max } = useSelector((state) => state.numbers)

  return (
    <Card title="Intervalo de números" red>
      <div className='Intervalo'>
        <span>
          <strong>Mínimo:</strong>
          <input
            type="number"
            value={min}
            onInput={(e) => dispatch(changeMin(e.target.value))}
          />
        </span>

        <span>
          <strong>Máximo:</strong>
          <input
            type="number"
            value={max}
            onInput={(e) => dispatch(changeMax(e.target.value))}
          />
        </span>
      </div>
    </Card>
  )
}

export default Intervalo