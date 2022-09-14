import React, { useEffect } from 'react'
import { useAction } from './hooks/useAction'
import { useTypeSelector } from './hooks/useTypeSelector'

const TodoList: React.FC = () => {
  const {page, error, limit,loading,todos} = useTypeSelector(state => state.todo)

  const pages = [1, 2, 3 ,4,5]

  const {fetchTodos, setTodoPage} = useAction()
  useEffect(() => {
    fetchTodos(page, limit)
  }, [page])

  if (loading) {
    return <h1>Идет загрузка</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>

      {todos.map((el) => 
      <div key={el.id}>
        {el.id} - {el.title}
      </div>
      )}
      <div style={{display: "flex"}}>
      {pages.map((el, index)=>
      <div onClick={() => setTodoPage(el)} key={index} style={{border: el === page ? "2px solid green" : " 1px solid gray", padding: 10}}>
          {el}
      </div>
      )}
      </div>
    </div>
  )
}

export default TodoList