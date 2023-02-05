import { create } from "zustand"

const useAppStore = create(set => ({
  hamburgerMenuOpen: false,
  setHamburgerMenuOpen: value => {
    set({ hamburgerMenuOpen: value })
  },
  formSelected: "url",
  setFormSelected: value => {
    set({ formSelected: value })
  },
}))

export default useAppStore
