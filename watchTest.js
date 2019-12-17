import chokidar from "chokidar"

chokidar.watch(".", {
  cwd: __dirname,
}).on("all", (event, path) => {
  console.log(`${event} ${path}`)
})