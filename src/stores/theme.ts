import { create } from 'zustand'

export type Theme = 'light' | 'dark'
interface BearState {
    theme: Theme
    updateTheme: (newTheme: Theme) => void
}

const useThemeStore = create<BearState>((set) => ({
    theme: 'dark',
    updateTheme: (newTheme: 'dark' | 'light') => set({ theme: newTheme }),
}));

export default useThemeStore