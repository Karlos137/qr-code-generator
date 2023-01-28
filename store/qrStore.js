import { create } from "zustand"

const useQrStore = create(set => ({
  value: "",
  setValue: value => {
    set({ value: value })
  },
  bgColor: "#fff",
  fgColor: "#000",
}))

export default useQrStore
