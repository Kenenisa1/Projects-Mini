import reactLogo from './assets/react.svg'

function App() {

  const List=[
    {name: "Mac" , IsmyPc: false, id: 1},
    {name: "Windonws" , Ismypc: true, id: 2},
    {name: "Linux" , Ismypc: false, id: 3}
  ]

  function Events()
  {
    const hw =document.getElementById("he");
    hw.innerHTML= "Why are you clicking me"
  }

const OsList=List.map(item => 
       <li key={item.id} style={{
            color: item.IsmyPc ? "Green": "blue"}}> 
          {item.name} {item.IsmyPc}
       </li>
    )

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <ul>
          {OsList}
      </ul>
      <button onClick={Events}>
        don't Click me
      </button>
      <h1 id='he'></h1>
    </>
  )
}

export default App
