import reactLogo from './assets/react.svg'

function App() {
  const List=[
    {name: "Mac" , IsmyPc: false, id: 1},
    {name: "Windonws" , Ismypc: true, id: 2},
    {name: "Linux" , Ismypc: false, id: 3}
  ]
const OsList=List.map(item => 
       <li key={item.id} style={{
        color: item.IsmyPc ? "Green": "blue"
       }}> {item.name} {item.IsmyPc}</li>
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
    </>
  )
}

export default App
