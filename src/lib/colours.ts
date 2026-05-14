export type TailwindColour =
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"

type TailwindShade =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950

export type TailwindBg = `bg-${TailwindColour}-${TailwindShade}`

export type TailwindText =
  | `text-${TailwindColour}-${TailwindShade}`
  | "text-white"
  | "text-black"

type ColourOption = {
  backgrounds: TailwindBg[]
  foregrounds: TailwindText[]
}

type ColourValue = {
  value: TailwindColour
  name: string
  sample: TailwindBg
}

type ColourGroup = {
  title: string
  values: ColourValue[]
}

export const COLOURS: ColourGroup[] = [
  {
    title: "Girly 💅",
    values: [
      {
        value: "violet",
        name: "Violet",
        sample: "bg-violet-500",
      },
      {
        value: "purple",
        name: "Purple",
        sample: "bg-purple-500",
      },
      {
        value: "fuchsia",
        name: "Fuchsia",
        sample: "bg-fuchsia-500",
      },
      {
        value: "pink",
        name: "Pink",
        sample: "bg-pink-500",
      },
      {
        value: "rose",
        name: "Rose",
        sample: "bg-rose-500",
      },
    ],
  },
  {
    title: "Sunsets 🌇",
    values: [
      {
        value: "red",
        name: "Red",
        sample: "bg-red-500",
      },
      {
        value: "orange",
        name: "Orange",
        sample: "bg-orange-500",
      },
      {
        value: "amber",
        name: "Amber",
        sample: "bg-amber-500",
      },
      {
        value: "yellow",
        name: "Yellow",
        sample: "bg-yellow-500",
      },
    ],
  },
  {
    title: "Greens 🌱",
    values: [
      {
        value: "lime",
        name: "Lime",
        sample: "bg-lime-500",
      },
      {
        value: "green",
        name: "Green",
        sample: "bg-green-500",
      },
      {
        value: "teal",
        name: "Teal",
        sample: "bg-teal-500",
      },
    ],
  },
  {
    title: "Blue for the Boys 💪",
    values: [
      {
        value: "cyan",
        name: "Cyan",
        sample: "bg-cyan-500",
      },
      {
        value: "sky",
        name: "Sky",
        sample: "bg-sky-500",
      },
      {
        value: "blue",
        name: "Blue",
        sample: "bg-blue-500",
      },
      {
        value: "indigo",
        name: "indigo",
        sample: "bg-indigo-500",
      },
    ],
  },
]

export const COLOUR_OPTIONS: Record<string, ColourOption> = {
  violet: {
    backgrounds: [
      "bg-violet-50",
      "bg-violet-100",
      "bg-violet-200",
      "bg-violet-300",
      "bg-violet-400",
      "bg-violet-500",
      "bg-violet-600",
      "bg-violet-700",
      "bg-violet-800",
      "bg-violet-900",
      "bg-violet-950",
    ],
    foregrounds: [
      "text-white",
      "text-violet-50",
      "text-violet-100",
      "text-violet-200",
      "text-violet-300",
      "text-violet-400",
      "text-violet-500",
      "text-violet-600",
      "text-violet-700",
      "text-violet-800",
      "text-violet-900",
      "text-violet-950",
      "text-black",
    ],
  },
  purple: {
    backgrounds: [
      "bg-purple-50",
      "bg-purple-100",
      "bg-purple-200",
      "bg-purple-300",
      "bg-purple-400",
      "bg-purple-500",
      "bg-purple-600",
      "bg-purple-700",
      "bg-purple-800",
      "bg-purple-900",
      "bg-purple-950",
    ],
    foregrounds: [
      "text-white",
      "text-purple-50",
      "text-purple-100",
      "text-purple-200",
      "text-purple-300",
      "text-purple-400",
      "text-purple-500",
      "text-purple-600",
      "text-purple-700",
      "text-purple-800",
      "text-purple-900",
      "text-purple-950",
      "text-black",
    ],
  },
  fuchsia: {
    backgrounds: [
      "bg-fuchsia-50",
      "bg-fuchsia-100",
      "bg-fuchsia-200",
      "bg-fuchsia-300",
      "bg-fuchsia-400",
      "bg-fuchsia-500",
      "bg-fuchsia-600",
      "bg-fuchsia-700",
      "bg-fuchsia-800",
      "bg-fuchsia-900",
      "bg-fuchsia-950",
    ],
    foregrounds: [
      "text-white",
      "text-fuchsia-50",
      "text-fuchsia-100",
      "text-fuchsia-200",
      "text-fuchsia-300",
      "text-fuchsia-400",
      "text-fuchsia-500",
      "text-fuchsia-600",
      "text-fuchsia-700",
      "text-fuchsia-800",
      "text-fuchsia-900",
      "text-fuchsia-950",
      "text-black",
    ],
  },
  pink: {
    backgrounds: [
      "bg-pink-50",
      "bg-pink-100",
      "bg-pink-200",
      "bg-pink-300",
      "bg-pink-400",
      "bg-pink-500",
      "bg-pink-600",
      "bg-pink-700",
      "bg-pink-800",
      "bg-pink-900",
      "bg-pink-950",
    ],
    foregrounds: [
      "text-white",
      "text-pink-50",
      "text-pink-100",
      "text-pink-200",
      "text-pink-300",
      "text-pink-400",
      "text-pink-500",
      "text-pink-600",
      "text-pink-700",
      "text-pink-800",
      "text-pink-900",
      "text-pink-950",
      "text-black",
    ],
  },
  rose: {
    backgrounds: [
      "bg-rose-50",
      "bg-rose-100",
      "bg-rose-200",
      "bg-rose-300",
      "bg-rose-400",
      "bg-rose-500",
      "bg-rose-600",
      "bg-rose-700",
      "bg-rose-800",
      "bg-rose-900",
      "bg-rose-950",
    ],
    foregrounds: [
      "text-white",
      "text-rose-50",
      "text-rose-100",
      "text-rose-200",
      "text-rose-300",
      "text-rose-400",
      "text-rose-500",
      "text-rose-600",
      "text-rose-700",
      "text-rose-800",
      "text-rose-900",
      "text-rose-950",
      "text-black",
    ],
  },
  red: {
    backgrounds: [
      "bg-red-50",
      "bg-red-100",
      "bg-red-200",
      "bg-red-300",
      "bg-red-400",
      "bg-red-500",
      "bg-red-600",
      "bg-red-700",
      "bg-red-800",
      "bg-red-900",
      "bg-red-950",
    ],
    foregrounds: [
      "text-white",
      "text-red-50",
      "text-red-100",
      "text-red-200",
      "text-red-300",
      "text-red-400",
      "text-red-500",
      "text-red-600",
      "text-red-700",
      "text-red-800",
      "text-red-900",
      "text-red-950",
      "text-black",
    ],
  },
  orange: {
    backgrounds: [
      "bg-orange-50",
      "bg-orange-100",
      "bg-orange-200",
      "bg-orange-300",
      "bg-orange-400",
      "bg-orange-500",
      "bg-orange-600",
      "bg-orange-700",
      "bg-orange-800",
      "bg-orange-900",
      "bg-orange-950",
    ],
    foregrounds: [
      "text-white",
      "text-orange-50",
      "text-orange-100",
      "text-orange-200",
      "text-orange-300",
      "text-orange-400",
      "text-orange-500",
      "text-orange-600",
      "text-orange-700",
      "text-orange-800",
      "text-orange-900",
      "text-orange-950",
      "text-black",
    ],
  },
  amber: {
    backgrounds: [
      "bg-amber-50",
      "bg-amber-100",
      "bg-amber-200",
      "bg-amber-300",
      "bg-amber-400",
      "bg-amber-500",
      "bg-amber-600",
      "bg-amber-700",
      "bg-amber-800",
      "bg-amber-900",
      "bg-amber-950",
    ],
    foregrounds: [
      "text-white",
      "text-amber-50",
      "text-amber-100",
      "text-amber-200",
      "text-amber-300",
      "text-amber-400",
      "text-amber-500",
      "text-amber-600",
      "text-amber-700",
      "text-amber-800",
      "text-amber-900",
      "text-amber-950",
      "text-black",
    ],
  },
  yellow: {
    backgrounds: [
      "bg-yellow-50",
      "bg-yellow-100",
      "bg-yellow-200",
      "bg-yellow-300",
      "bg-yellow-400",
      "bg-yellow-500",
      "bg-yellow-600",
      "bg-yellow-700",
      "bg-yellow-800",
      "bg-yellow-900",
      "bg-yellow-950",
    ],
    foregrounds: [
      "text-white",
      "text-yellow-50",
      "text-yellow-100",
      "text-yellow-200",
      "text-yellow-300",
      "text-yellow-400",
      "text-yellow-500",
      "text-yellow-600",
      "text-yellow-700",
      "text-yellow-800",
      "text-yellow-900",
      "text-yellow-950",
      "text-black",
    ],
  },
  lime: {
    backgrounds: [
      "bg-lime-50",
      "bg-lime-100",
      "bg-lime-200",
      "bg-lime-300",
      "bg-lime-400",
      "bg-lime-500",
      "bg-lime-600",
      "bg-lime-700",
      "bg-lime-800",
      "bg-lime-900",
      "bg-lime-950",
    ],
    foregrounds: [
      "text-white",
      "text-lime-50",
      "text-lime-100",
      "text-lime-200",
      "text-lime-300",
      "text-lime-400",
      "text-lime-500",
      "text-lime-600",
      "text-lime-700",
      "text-lime-800",
      "text-lime-900",
      "text-lime-950",
      "text-black",
    ],
  },
  green: {
    backgrounds: [
      "bg-green-50",
      "bg-green-100",
      "bg-green-200",
      "bg-green-300",
      "bg-green-400",
      "bg-green-500",
      "bg-green-600",
      "bg-green-700",
      "bg-green-800",
      "bg-green-900",
      "bg-green-950",
    ],
    foregrounds: [
      "text-white",
      "text-green-50",
      "text-green-100",
      "text-green-200",
      "text-green-300",
      "text-green-400",
      "text-green-500",
      "text-green-600",
      "text-green-700",
      "text-green-800",
      "text-green-900",
      "text-green-950",
      "text-black",
    ],
  },
  teal: {
    backgrounds: [
      "bg-teal-50",
      "bg-teal-100",
      "bg-teal-200",
      "bg-teal-300",
      "bg-teal-400",
      "bg-teal-500",
      "bg-teal-600",
      "bg-teal-700",
      "bg-teal-800",
      "bg-teal-900",
      "bg-teal-950",
    ],
    foregrounds: [
      "text-white",
      "text-teal-50",
      "text-teal-100",
      "text-teal-200",
      "text-teal-300",
      "text-teal-400",
      "text-teal-500",
      "text-teal-600",
      "text-teal-700",
      "text-teal-800",
      "text-teal-900",
      "text-teal-950",
      "text-black",
    ],
  },
  cyan: {
    backgrounds: [
      "bg-cyan-50",
      "bg-cyan-100",
      "bg-cyan-200",
      "bg-cyan-300",
      "bg-cyan-400",
      "bg-cyan-500",
      "bg-cyan-600",
      "bg-cyan-700",
      "bg-cyan-800",
      "bg-cyan-900",
      "bg-cyan-950",
    ],
    foregrounds: [
      "text-white",
      "text-cyan-50",
      "text-cyan-100",
      "text-cyan-200",
      "text-cyan-300",
      "text-cyan-400",
      "text-cyan-500",
      "text-cyan-600",
      "text-cyan-700",
      "text-cyan-800",
      "text-cyan-900",
      "text-cyan-950",
      "text-black",
    ],
  },
  sky: {
    backgrounds: [
      "bg-sky-50",
      "bg-sky-100",
      "bg-sky-200",
      "bg-sky-300",
      "bg-sky-400",
      "bg-sky-500",
      "bg-sky-600",
      "bg-sky-700",
      "bg-sky-800",
      "bg-sky-900",
      "bg-sky-950",
    ],
    foregrounds: [
      "text-white",
      "text-sky-50",
      "text-sky-100",
      "text-sky-200",
      "text-sky-300",
      "text-sky-400",
      "text-sky-500",
      "text-sky-600",
      "text-sky-700",
      "text-sky-800",
      "text-sky-900",
      "text-sky-950",
      "text-black",
    ],
  },
  blue: {
    backgrounds: [
      "bg-blue-50",
      "bg-blue-100",
      "bg-blue-200",
      "bg-blue-300",
      "bg-blue-400",
      "bg-blue-500",
      "bg-blue-600",
      "bg-blue-700",
      "bg-blue-800",
      "bg-blue-900",
      "bg-blue-950",
    ],
    foregrounds: [
      "text-white",
      "text-blue-50",
      "text-blue-100",
      "text-blue-200",
      "text-blue-300",
      "text-blue-400",
      "text-blue-500",
      "text-blue-600",
      "text-blue-700",
      "text-blue-800",
      "text-blue-900",
      "text-blue-950",
      "text-black",
    ],
  },
  indigo: {
    backgrounds: [
      "bg-indigo-50",
      "bg-indigo-100",
      "bg-indigo-200",
      "bg-indigo-300",
      "bg-indigo-400",
      "bg-indigo-500",
      "bg-indigo-600",
      "bg-indigo-700",
      "bg-indigo-800",
      "bg-indigo-900",
      "bg-indigo-950",
    ],
    foregrounds: [
      "text-white",
      "text-indigo-50",
      "text-indigo-100",
      "text-indigo-200",
      "text-indigo-300",
      "text-indigo-400",
      "text-indigo-500",
      "text-indigo-600",
      "text-indigo-700",
      "text-indigo-800",
      "text-indigo-900",
      "text-indigo-950",
      "text-black",
    ],
  },
}
