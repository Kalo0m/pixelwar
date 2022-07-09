import type { Ref } from 'vue'
import useSupabase from '~/services/supabaseGame'
import type { Game, Square } from '~/types'

interface GameResult {
  squares: Ref<(Square | null)[][]>
  placeTile: (square: Omit<Square, 'id'>) => void
}

export default function (gameId: string, size = 10): GameResult {
  const { fetchGame, upsertSquare, listenEvents } = useSupabase(gameId)
  const game = ref<Game | null>(null)
  const squares = ref<(Square | null)[][]>(new Array(size).fill(null).map(() => new Array(size).fill(null)))
  const placeTile = (square: Omit<Square, 'id'>) => {
    const { posX, posY } = square
    squares.value[posX][posY] = {...square, id: ''}
    upsertSquare(square)
  }
  const handleNewSquare = (square: Square) => {
    squares.value[square.posX][square.posY] = square
  }
  listenEvents({ onCreate: handleNewSquare, onUpdate: handleNewSquare })

  fetchGame().then((currentGame: Game) => {
    game.value = currentGame
    currentGame.square.forEach((square: Square) => {
      squares.value[square.posX][square.posY] = square
    })
  })

  return {
    squares,
    placeTile,
  }
}
