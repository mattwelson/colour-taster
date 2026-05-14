import { type TailwindColour, COLOURS } from "@/lib/colours"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { cn } from "@/lib/utils"
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group"
import {
  $background,
  $colourOptions,
  $colourSelection,
  $foreground,
} from "@/stores/colour-store"
import { useSelector } from "@tanstack/react-store"

// TODO: wire this into a nano store, at some point insert that into a tree
export function ColourTaster() {
  const { tailwindColour, backgroundIndex, foregroundIndex } =
    useSelector($colourSelection)
  const options = useSelector($colourOptions)
  const background = useSelector($background)
  const foreground = useSelector($foreground)

  return (
    <Card>
      <CardHeader>
        <CardTitle>💄 Pick a Colour</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Select
          value={tailwindColour}
          onValueChange={(value) =>
            $colourSelection.setState((state) => ({
              ...state,
              tailwindColour: value as TailwindColour,
            }))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select a colour" />
          </SelectTrigger>
          <SelectContent>
            {COLOURS.map((group) => (
              <SelectGroup key={group.title}>
                <SelectLabel>{group.title}</SelectLabel>
                {group.values.map((colour) => (
                  <SelectItem key={colour.value} value={colour.value}>
                    <div className={cn(colour.sample, "size-4 rounded-full")} />
                    {colour.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            ))}
          </SelectContent>
        </Select>
        <div className="space-y-2">
          <p className="text-sm font-medium">Background</p>
          <ToggleGroup
            type="single"
            value={backgroundIndex.toString()}
            onValueChange={(v) => {
              if (v === "") return
              return $colourSelection.setState((state) => ({
                ...state,
                backgroundIndex: parseInt(v, 10),
              }))
            }}
            className="w-full"
          >
            {options.backgrounds.map((bg, index) => (
              <ToggleGroupItem
                key={bg}
                value={index.toString()}
                className={cn(
                  bg,
                  "h-10 rounded-full border-2 border-transparent transition-all data-[state=on]:scale-110 data-[state=on]:border-black"
                )}
              />
            ))}
          </ToggleGroup>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">Text colour</p>
          <ToggleGroup
            type="single"
            value={foregroundIndex.toString()}
            onValueChange={(v) => {
              if (v === "") return
              return $colourSelection.setState((state) => ({
                ...state,
                foregroundIndex: parseInt(v, 10),
              }))
            }}
            className="w-full"
          >
            {options.foregrounds.map((fg, index) => (
              <ToggleGroupItem
                key={fg}
                value={index.toString()}
                className={cn(
                  background ?? "bg-gray-100",
                  fg,
                  "lg:text-md rounded-full border-2 border-transparent px-3 py-1 text-sm font-medium transition-all data-[state=on]:scale-105 data-[state=on]:border-black"
                )}
              >
                Aa
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </div>

        {background && foreground && (
          <div
            className={cn(background, foreground, "space-y-2 rounded-lg p-4")}
          >
            <p className="font-serif text-lg font-semibold">Preview</p>
            <p className="">The quick brown fox jumps over the lazy dog.</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
