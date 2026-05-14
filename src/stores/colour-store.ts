import { COLOUR_OPTIONS, type TailwindColour } from "@/lib/colours"
import { createStore } from "@tanstack/store"

function getRandomEntry<T>(items: T[]): T {
  const item = items.at(Math.floor(Math.random() * items.length))
  if (!item) throw new Error("Something went wrong")
  return item
}
const randomColour = getRandomEntry(Object.keys(COLOUR_OPTIONS))

export const $colourSelection = createStore({
  tailwindColour: randomColour as TailwindColour,
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
