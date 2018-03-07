todo

functional HoF
const fetchWithLogging(func) {
log('fetching')
output = apply(func) // this is fetchURL() or something
log('got ${output});
return output
}

* Design
  * cmdline script or vscode plugin? Leaning toward cmdline for portability and ease
  * yeoman generator or node script? node script

- service discovery
  - things like - URLs for eslintrc and gitignore that cli aliases can use to pull latest version
  - files like .gitignore should be in public, not repo.  find perm URLs or keep serivceDB up to date


  
- generator for new component
  * use yeoman ? or create my own? (my own!)
  * prompt for name if not supplied on cmdline
  * mkdir (src/componentName)
  * create index js file that imports componentn name
  * creates component.js and exports

- create directories
  src
  src/util
  tests
  dist
  config

- git
  * create README
  * When everything else is done -> git commit INITIAL COMMIT && git push -u origin master

- babel
  * install babel packages (or add to package.json)

- eslint
  * Create fixable import/require() plugin
    * https://eslint.org/docs/developer-guide/working-with-rules#applying-fixes
      o activate eslint in vscode - (set in vscode preferences "eslint.enable": true)

* vscode
  * activate eslint in vscode -
    * done in user preferences
  * user preferences - ~/Library/Application Support/Code/User
  * .vscode/launch.json // for debugging setup
  * Install workspace color them
    * Change bottom bar color to distiguisg projects - small tweak on the standard theme (which itself will be a slightly tweaked version of Solarized-dark])

- npm - download and write package.json and install modules (run yarn)
  ** scripts
  _ test
  _ test:watch
  _ dev(or start, not sure which)
  _ predev (transpiles)
  _ build
  _ bump
  _ version
  _ preversion
  _ postverion
  _ deploy
  _ deploy:local
  _ deploy:? \* commitMsg:deploy
  ** packages - programatically add these to package.json. other compoentns will call this to add their packages. ie. babel component will call packageJson.addPackage(['babel-core', 'babel-eslint', etc.])

  \*\*\*\* look in package.json for deps, peer-deps, and dev-deps. AND look in yarn-link'd folders where those deps aren't automatically installed (like eslint-config)
  babel-core
  babel-eslint
  babel-cli
  babel-preset-env
  babel-plugin-transform-object-rest-spread
  prettyjson
  eslint
  jest
  pretty-error
  "transform-es2015-spread",
  "transform-object-rest-spread",
  "transform-async-to-generator"

---=[ done ]=-

* create default components
  log (src/util/log.js)

- git
  = create LICENSE
  = git add remote origin
  = git init
  = create .gitignore
  = github.com create private repo

- eslint
  * sharable eslint config - located in ~/Development/\_\_node/@sandalsoft/eslint-config
    * https://eslint.org/docs/developer-guide/shareable-configs

- babel
  = download & write .babelrc
