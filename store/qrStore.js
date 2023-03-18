import { create } from "zustand"

import {
  DEFAULT_COLORS,
  DEFAULT_COLORS_SETTINGS,
} from "../components/Accordion/ColorsForm/ColorsForm.constants"
import { DEFAULT_SETTINGS } from "../components/Accordion/SettingsForm/SettingsForm.constants"
import { DEFAULT_LOGO_SETTINGS } from "../components/Accordion/LogoForm/LogoForm.constants"

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
  transparentBackground: DEFAULT_COLORS_SETTINGS.transparentBackground,
  setTransparentBackground: value => {
    set({ transparentBackground: value })
  },
  colorfulCorners: DEFAULT_COLORS_SETTINGS.colorfulCorners,
  setCorolfulCorner: value => {
    set({ colorfulCorners: value })
  },
  correctionLevel: DEFAULT_SETTINGS.correctionLevel.value,
  setCorrectionLevel: value => {
    set({ correctionLevel: value })
  },
  logoUrl: DEFAULT_LOGO_SETTINGS.logoUrl,
  setLogoUrl: value => {
    set({ logoUrl: value })
  },
  logoSize: DEFAULT_LOGO_SETTINGS.logoSize,
  setLogoSize: value => {
    set({ logoSize: value })
  },
  logoBackgroundTransparent: DEFAULT_LOGO_SETTINGS.logoBackgroundTransparent,
  setLogoBackgroundTransparent: value => {
    set({ logoBackgroundTransparent: value })
  },
  downloadSize: DEFAULT_SETTINGS.size.value,
  setDownloadSize: value => {
    set({ downloadSize: value })
  },
}))

export default useQrStore
