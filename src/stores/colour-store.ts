import { COLOUR_OPTIONS, type TailwindColour } from "@/lib/colours"
import { createStore } from "@tanstack/store"

export const $colourSelection = createStore({
  tailwindColour: "rose" as TailwindColour,
  backgroundIndex: 3,
  foregroundIndex: 10,
})

export const $colourOptions = createStore(
  () => COLOUR_OPTIONS[$colourSelection.state.tailwindColour]
)
export const $background = createStore(
  () => $colourOptions.state.backgrounds[$colourSelection.state.backgroundIndex]
)
export const $foreground = createStore(
  () => $colourOptions.state.foregrounds[$colourSelection.state.foregroundIndex]
)
