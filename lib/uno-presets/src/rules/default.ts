import type { Rule } from '@unocss/core'
import {
  alignments,
  appearance,
  appearances,
  aspectRatio,
  bgColors,
  borders,
  boxShadows,
  boxSizing,
  breaks as wordBreaks,
  cssProperty,
  cssVariables as miniCssVariables,
  cursors,
  displays,
  flex,
  floats,
  fonts,
  fontSmoothings,
  fontStyles,
  gaps,
  grids,
  insets,
  justifies,
  margins,
  opacity,
  orders,
  outline,
  overflows,
  paddings,
  placements,
  pointerEvents,
  positions,
  questionMark,
  resizes,
  rings,
  sizes,
  svgUtilities,
  tabSizes,
  textAligns,
  textColors,
  textDecorations,
  textIndents,
  textOverflows,
  textShadows,
  textStrokes,
  transforms,
  transitions,
  userSelects,
  verticalAligns,
  whitespaces,
  willChange,
  zIndexes
} from '@unocss/preset-mini/rules'

import { animations } from './animation'

export const rules: Rule[] = [
  miniCssVariables,
  cssProperty,
  pointerEvents,
  appearances,
  positions,
  insets,
  zIndexes,
  orders,
  grids,
  floats,
  margins,
  boxSizing,
  displays,
  aspectRatio,
  sizes,
  flex,
  transforms,
  animations,
  cursors,
  userSelects,
  resizes,
  appearance,
  placements,
  alignments,
  justifies,
  gaps,
  overflows,
  textOverflows,
  whitespaces,
  wordBreaks,
  borders,
  bgColors,
  svgUtilities,
  paddings,
  textAligns,
  textIndents,
  verticalAligns,
  fonts,
  fontStyles,
  textColors,
  textDecorations,
  fontSmoothings,
  // TODO placeholders,
  tabSizes,
  textStrokes,
  textShadows,
  opacity,
  boxShadows,
  outline,
  rings,
  transitions,
  willChange,
  // should be the last
  questionMark
].flat(1)
