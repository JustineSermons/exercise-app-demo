import './App.css';
import {useCallback, useState} from 'react'
import DurationExercise from './DurationExercise';
import JumpingExercise from './Jumping';

const MENU_SCREEN = "menu"
const EXERCISE_SCREEN = "exercise"
const DURATION_EXERCISE = "duration"
const REPETITION_EXERCISE = "repetition"
const JUMPING_EXERCISE = "jumping"

function RepetitionExercise({exercise, setMenuScreen}) {
  let [count, setCount] = useState(0)
  return ( 
  <div>
  <p>{exercise.name}</p>
  <p style={{fontSize:"5em"}}>{count}</p>
  <button style={{fontSize:"2em"}} onClick={() => setCount(count=>count+1)}>Increment</button>
  <button style={{fontSize:"2em"}} onClick={() => setCount(0)}>Reset</button><br />
  <button style={{fontSize:"1em"}} onClick={setMenuScreen}>Return to Menu</button>
  </div>
  )
}

let exerciseList = [
  {type: DURATION_EXERCISE, name: "Running"},
  {type: DURATION_EXERCISE, name: "Rowing"},
  {type: DURATION_EXERCISE, name: "Swimming"},
  {type: REPETITION_EXERCISE, name: "Push Ups"},
  {type: JUMPING_EXERCISE, name: "Jumping"}
]

function App() {
  let [currentScreen, setCurrentScreen] = useState(EXERCISE_SCREEN)
  let [currentExercise, setCurrentExercise] = useState(exerciseList[3])
  let screenComponent = undefined
  let buttonClick = useCallback((exercise) => {
    setCurrentExercise(exercise)
    setCurrentScreen(EXERCISE_SCREEN)
  })

  if (currentScreen === MENU_SCREEN) {
    screenComponent = <div>
     <p>Exercise Menu</p>
     <ul>
      {exerciseList.map((exercise)=> {
        return <li>
      <button onClick={() => buttonClick(exercise)}>{exercise.name}</button>
      </li>
      })}
      </ul>
    </div>
  } else if (currentScreen === EXERCISE_SCREEN) {
    switch(currentExercise.type) {
      case DURATION_EXERCISE:
    
    screenComponent = <DurationExercise 
    exercise={currentExercise}
    setMenuScreen={()=>setCurrentScreen(MENU_SCREEN)}
    />
    break;
    case REPETITION_EXERCISE:
      screenComponent = <RepetitionExercise
      exercise={currentExercise}
      setMenuScreen={()=>setCurrentScreen(MENU_SCREEN)}
      />
      break;
      case JUMPING_EXERCISE:
        screenComponent = <JumpingExercise
      exercise={currentExercise}
      setMenuScreen={()=>setCurrentScreen(MENU_SCREEN)}
      />
      break;
      default:
        screenComponent = undefined
  }
}
  return (
    <div className="App">
      <header className="App-header">
        <p>{screenComponent}</p>
      </header>
    </div>
  );
}

export default App;
