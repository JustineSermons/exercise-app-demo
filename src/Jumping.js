import StopWatch from "./StopWatch"
export default function JumpingExercise({exercise, setMenuScreen}) {
    let {name} = exercise
    return <div>
    <p>{name}</p>
    <StopWatch/>
    <p>Jumping</p>
    <button onClick={setMenuScreen}>Back to Menu</button>
    </div>
  }