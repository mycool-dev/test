import React from "react"
import Die from "./Die"
import {nanoid} from "nanoid"
import Confetti from "react-confetti"
import style from './style.css'

export default function App() {
 
    const [dice, setDice] = React.useState(allNewDice())
    const [tenzies, setTenzies] = React.useState(false)
    const [count, setCount] = React.useState(0)
    
    React.useEffect(() => {
        const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
        }
    }, [dice])

    function generateNewDie() {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid()
        }
    }
    
    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(generateNewDie())
        }
        return newDice
    }
    
    function newGame(){
        setTenzies(false)
        setDice(allNewDice)
        setCount(0)
    }
    
/**
 * Challenge: Allow the user to play a new game when the
 * button is clicked and they've already won
 */
    
    function rollDice() {
        setCount(oldCount => oldCount + 1)
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? 
                die :
                generateNewDie()
        }))
    }
    
    
    function holdDice(id) {
        setDice(oldDice => oldDice.map(die => {
            return die.id === id ? 
                {...die, isHeld: !die.isHeld} :
                die
        }))
    }
    
    const diceElements = dice.map(die => (
        <Die 
            key={die.id} 
            value={die.value} 
            isHeld={die.isHeld} 
            holdDice={() => holdDice(die.id)}
        />
    ))
    
    return (
        <main>
            {tenzies && <Confetti />}
            <div className="title-rolls">
            <h1 className="title">{tenzies ? "Congratulations!" : "Tenzies"}</h1>
            <p>Rolls:{count}</p>
            </div>
            {!tenzies &&  <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>}
            <div className="dice-container">
                {diceElements}
            </div>
            <button 
                className="roll-dice" 
                onClick={tenzies ? newGame : rollDice}
            >
                {tenzies ? "New Game" : "Roll"}
            </button>
        </main>
    )
}