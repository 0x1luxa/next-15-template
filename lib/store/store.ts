import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface useStoreState {
  inputValue: number
  increment: () => void
}

export const useStore = create<useStoreState>()(
  persist(
    (set) => ({
      inputValue: 0,
      increment: () =>
        set((state) => ({ inputValue: state.inputValue + 1 })),
    }),
    {
      name: 'store',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
