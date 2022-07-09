import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export interface Square {
  id: string
  posX: number
  posY: number
  color: string
}

export interface Game {
  id: string
  name: string
  square: Square[]
}
