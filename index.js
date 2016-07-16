
const backgroundColor = '#323232'
const foregroundColor = '#FFFFFF'
const cursorColor = foregroundColor

const colors = [
  backgroundColor,
  '#E12C4D', // red
  '#88DD50', // green
  '#FDD62D', // yellow
  '#1050AC', // blue
  '#9E60AD', // pink
  '#4197B3', // cyan
  '#BFBFBF', // light gray
  backgroundColor, // medium gray
  '#E12C4D', // red
  '#88DD50', // green
  '#FDD62D', // yellow
  '#1050AC', // blue
  '#9E60AD', // pink
  '#4197B3', // cyan
  '#FFFFFF', // white
  foregroundColor
]

exports.middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD':
      action.config.foregroundColor = foregroundColor
      action.config.backgroundColor = backgroundColor
      action.config.cursorColor = cursorColor
      action.config.colors = colors
  }
  next(action)
}

