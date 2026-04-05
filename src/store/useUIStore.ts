import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UIState {
  isIntroDone: boolean
  setIsIntroDone: (value: boolean) => void
}

export const useUIStore = create<UIState>((set) => ({
  isIntroDone: false,
  setIsIntroDone: (val) => set({ isIntroDone: val }),
}))
