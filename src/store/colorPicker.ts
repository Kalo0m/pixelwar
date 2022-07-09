import { acceptHMRUpdate, defineStore } from 'pinia'

export const useColorPicker = defineStore('colorPicker', () => {
  const currentColor = ref('#000000')
  const colors = ['#000000', '#ffffff', '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff']

  function setCurrentColor(color: string) {
    currentColor.value = color
  }
  return { colors, currentColor, setCurrentColor }
})
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
