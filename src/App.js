import { useEffect, useState } from 'react'
import { Box } from './components/Box/Box'
import { defaultFields } from './constants'
import './App.css'
import { Game } from './logic/game'

function App() {
    const [fields, changeFields] = useState(defaultFields)
    const [turn, setTurn] = useState('X')
    const { getGameResult } = new Game(turn)

    const handleResetFields = () => {
        changeFields((prev) =>
            prev.map(
                (it) =>
                    (it = {
                        value: '',
                    })
            )
        )
    }

    useEffect(() => {
        if (getGameResult(fields)) {
            setTimeout(() => {
                alert('Player X win')
                handleResetFields()
                setTurn('X')
            }, 250)
        } else {
            if (fields.every((field) => field.value.length === 1)) {
                setTimeout(() => {
                    alert('Draw')
                    handleResetFields()
                    setTurn('X')
                }, 250)
            }
        }
    }, [fields, getGameResult])

    return (
        <div className="app">
            <h1 className="app-title">Tic-Tac-Toe</h1>
            <div className="table-wrapper">
                {fields.map((field, index) => (
                    <Box
                        onClick={() => {
                            if (field.value.length !== 1) {
                                changeFields((prev) => {
                                    prev[index].value = turn
                                    return prev
                                })
                                setTurn((prev) => (prev === 'X' ? 'O' : 'X'))
                            }
                        }}
                        key={index}
                        value={field.value}
                    />
                ))}
            </div>
            <button onClick={handleResetFields} className="reset-btn">
                Reset fields
            </button>
        </div>
    )
}

export default App
