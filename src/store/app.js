import { create } from 'zustand'

export const useAppStore = create((set, get) => ({
  pages: [],
  addPage: (pageData) => {
    const pages = get().pages
    const pageIndex = pages.findIndex(p => p.url == pageData.url)


    if(pageIndex == -1) {
      pages.push(pageData)
    } else {
      pages[pageIndex] = pageData
    }

    set({ pages })
  },
}))

