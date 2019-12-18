import p from "log-watcher-webpack-plugin"
import configure from "webpack-config-jaid"
/**
 * @type {import("webpack").Configuration}
 */
const extra = {
  plugins: [new p],
  devServer: {
    noInfo: false,
    stats: "verbose",
  },
  watch: false,
  watchOptions: {
    ignored: "**",
  },
}

const config = configure({
  extra,
  configOutput: true,
})

/**
 * @type {import("webpack-dev-server").Configuration}
 */
config.devServer = {
  port: 1212,
  overlay: true,
  // hot: true,
  watchContentBase: false,
}

export default config