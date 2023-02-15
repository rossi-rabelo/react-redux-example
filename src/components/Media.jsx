import Card from './Card'

import { useSelector } from 'react-redux'

const Media = (props) => {
  const { min, max } = useSelector((state) => state.numbers)

  const average = (min, max) => {
    return (+min + +max) / 2
  }

  return (
    <Card title="Media de números" green>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{average(min, max)}</strong>
        </span>
      </div>
    </Card>
  )
}

export default Media