import { create } from "zustand"
import { DEFAULT_COLORS } from "../components/Accordion/ColorsForm/ColorsForm.constants"
import { DEFAULT_SETTINGS } from "../components/Accordion/SettingsForm/SettingsForm.constants"

const useQrStore = create(set => ({
  value: " ",
  setValue: value => {
    set({ value: value })
  },
  bgColor: DEFAULT_COLORS.background,
  setBgColor: value => {
    set({ bgColor: value })
  },
  fgColor: DEFAULT_COLORS.foreground,
  setFgColor: value => {
    set({ fgColor: value })
  },
  eyeColor: DEFAULT_COLORS.eyeColor,
  setEyeColor: value => {
    set({ eyeColor: value })
  },
  transparentBackground: false,
  setTransparentBackground: value => {
    set({ transparentBackground: value })
  },
  colorfulCorners: false,
  setCorolfulCorner: value => {
    set({ colorfulCorners: value })
  },
  correctionLevel: DEFAULT_SETTINGS.correctionLevel.value,
  setCorrectionLevel: value => {
    set({ correctionLevel: value })
  },
}))

export default useQrStore
