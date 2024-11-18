import { useState, useEffect } from "react"

function App() {
  const [toDo, setToDo] = useState("")
  const [toDos, setToDos] = useState([])
  const onChange = (event) => {
    console.log(toDo)
    setToDo(event.target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault()
    if (toDo === "") {
      return;
    }
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray])

  }
  return (
    <div>
      <h1>({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write your to do..."></input>

        <button>Add To Do</button>
      </form>
      <hr />
      {/*
      배열을 가지고 있을 때 각각의 element들을 바꿀 수 있게 해줌map() 은 ()에 함수를 넣을 수 있는데 배열의 모든 item에 대해 실행됨
      즉 배열에 6개의 item이 있다면 6번 함수가 실행됨
      그리고 그 함수로부터 내가 return한 값은 새로운 배열에 들어가게 함
      [‘a’, ‘b’, ‘c’, ‘d’, ‘e’, ‘f’].map(() => “:)”)
      -> [‘:)’, ‘:)’, ‘:)’, ‘:)’, ‘:)’ ‘:)’] 인 새 배열을 만들어줌
      다만 기존의 배열에 접근할 수 없게됨
      그러나 map은 함수의 첫 번째 argument로 현재의 item을 가지고 올 수 있음
      map(item) -> item이나 원하는 어떤 변수명을 넣으면 item자체를 리턴하는 것도 가능
      map((item) => item.toUpperCase())
      로 하면 item이 대문자로 바뀐 새로운 배열은 만들어줌
       */}

      {toDos.map((item, index) => <li key={index}>{item}</li>)}
    </div>)
}

export default App;