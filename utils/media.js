import { createMedia } from "@artsy/fresnel"

import { BREAKPOINTS } from "./constants"

const QueryBreakpoints = createMedia({
  breakpoints: BREAKPOINTS,
})

// Generate CSS to be injected into the head
export const mediaStyles = QueryBreakpoints.createMediaStyle()
export const { Media, MediaContextProvider } = QueryBreakpoints
