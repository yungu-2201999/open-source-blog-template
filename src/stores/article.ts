import { create } from 'zustand'

export type Article = {
    close: boolean
}
interface ArticleState {
    toggleClose: (closeStatus: boolean) => void
}

const useArticleStore = create<Article & ArticleState>((set) => ({
    close: false,
    toggleClose: (closeStatus: boolean) => set(() => ({ close: closeStatus }))
}));

export default useArticleStore