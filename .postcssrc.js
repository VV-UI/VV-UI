// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-salad":{
      "features": {
        "bem": {
          "shortcuts": {
            "component": "b",
            "modifier": "m",
            "descendent": "e"
          },
          "separators": {
            "descendent": "__",
            "modifier": "--"
          }
        }
      }
    }
  }
}
