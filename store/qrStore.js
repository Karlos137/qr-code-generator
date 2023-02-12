import { create } from "zustand"

const useQrStore = create(set => ({
  value: "",
  setValue: value => {
    set({ value: value })
  },
  bgColor: "#ffffff",
  setBgColor: value => {
    set({ bgColor: value })
  },
  fgColor: "#000000",
  setFgColor: value => {
    set({ fgColor: value })
  },
}))

export default useQrStore
