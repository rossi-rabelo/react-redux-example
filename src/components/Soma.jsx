import Card from './Card'

import { useSelector } from 'react-redux'

const Soma = (props) => {
  const { min, max } = useSelector((state) => state.numbers)

  const sum = (min, max) => {
    return parseInt(min) + parseInt(max)
  }

  return (
    <Card title="Soma de números" blue>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{sum(min, max)}</strong>
        </span>
      </div>
    </Card>
  )
}

export default Soma