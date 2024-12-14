import { create } from 'zustand'

export type Theme = 'light' | 'dark'
interface ThemeState {
    theme: Theme
    updateTheme: (newTheme: Theme) => void
}

const useThemeStore = create<ThemeState>((set) => ({
    theme: 'dark',
    updateTheme: (newTheme: 'dark' | 'light') => set({ theme: newTheme }),
}));

export default useThemeStore