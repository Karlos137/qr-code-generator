import create from "zustand"

const useQrStore = create(() => ({
  value: "",
  bgColor: "#fff",
  fgColor: "#000",
}))

export default useQrStore
