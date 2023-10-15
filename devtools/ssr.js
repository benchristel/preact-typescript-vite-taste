import {h} from "preact"
import {renderToString} from "preact-render-to-string"
import cheerio from "cheerio"
import * as fs from "fs"

// We have to use an async import because Bun seems to hoist all imports to
// the top of the file, making it impossible to set `globalThis.test` before
// the app code is imported. If `globalThis.test` isn't set, imports of modules
// that use in-source tests will fail.
import("@benchristel/taste")
  .then((taste) => {
    globalThis.test = taste.test
  })
  .then(() => import("../src/App"))
  .then(({App}) => renderToString(h(App, {})))
  .then((appHtml) => {
    const $ = cheerio.load(fs.readFileSync("dist/index.html", "utf8"))
    $("#app").html(appHtml)
    const script = $("head > script")
    script.remove()
    $("body").append(script)
    fs.writeFileSync("dist/index.html", $.html(), "utf8")
  })
