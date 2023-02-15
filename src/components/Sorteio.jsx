import Card from './Card'

import { useSelector } from 'react-redux'

const Sorteio = (props) => {
  const { min, max } = useSelector((state) => state.numbers)

  const sortNumber = (min, max) => {
   return Math.floor(Math.random() * (max - min) + min)
  }

  return (
    <Card title="Sorteio de um número" purple>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{sortNumber(min, max)}</strong>
        </span>
      </div>
    </Card>
  )
}

export default Sorteio