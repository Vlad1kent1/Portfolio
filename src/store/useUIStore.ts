import { create } from 'zustand'

interface UIState {
  isIntroDone: boolean
  setIsIntroDone: (value: boolean) => void
}

export const useUIStore = create<UIState>((set) => ({
  isIntroDone: false,
  setIsIntroDone: (val) => set({ isIntroDone: val }),
}))
