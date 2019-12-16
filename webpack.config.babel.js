import webpack from "webpack"
import configure from "webpack-config-jaid"

export default configure({
  extra: {
    plugins: [new webpack.EnvironmentPlugin("backendHost")],
  },
})