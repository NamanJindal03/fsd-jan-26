import React from 'react'

function Child({timer}) {
  return (
    <>
        {console.log('rerendered')}

        <div>Child : {timer(1,2,3,4)}</div>
    </>
  )
}

export default React.memo(Child)