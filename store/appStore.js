import { create } from "zustand"

const useAppStore = create(set => ({
  hamburgerMenuOpen: false,
  setHamburgerMenuOpen: value => {
    set({ hamburgerMenuOpen: value })
  },
}))

export default useAppStore
