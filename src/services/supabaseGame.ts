import { supabase } from '~/supabase'
import type { Game, Square } from '~/types'

export default function useSupabase(gameId: string) {
  const fetchGame = () => {
    return new Promise<Game>((resolve, reject) => {
      supabase.from<Game>('game')
        .select(`
        name,
        square (
          posX,
          posY,
          color,
          id
        )
      `)
        .then(({ data }) => {
          const currentGame: Game | undefined = data?.[0]
          if (!currentGame) {
            reject(new Error('Game not found'))
            return
          }
          resolve(currentGame)
        })
    })
  }
  const upsertSquare = async (square: Omit<Square, 'id'>) => {
    return await supabase
      .from('square')
      .upsert({ ...square, gameId })
  }
  const listenEvents = (events: { onCreate: (square: Square) => void; onUpdate: (square: Square) => void }): void => {
    supabase
      .from<Square>(`square:gameId=eq.${gameId}`)
      .on('INSERT', (payload) => {
        events.onCreate(payload.new)
      })
      .on('UPDATE', (payload) => {
        events.onUpdate(payload.new)
      })
      .subscribe()
  }

  return { fetchGame, upsertSquare, listenEvents }
}
