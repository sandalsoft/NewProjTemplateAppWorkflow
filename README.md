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

- generator for new component

  * use yeoman ? or create my own? (my own!)
  * prompt for name if not supplied on cmdline
  * mkdir (src/componentName)
  * create index js file that imports componentn name
  * creates component.js and exports

- git

  * git push -u origin master
  * create LICENSE
  * create README
  * When everything else is done git commit INITIAL COMMIT
    = git add remote origin
    = git init
    = create .gitignore
    = github.com create private repo

- babel

  * download .babelrc
  * install babel packages (or add to package.json)

- eslint

  o activate eslint in vscode - (set in vscode preferences "eslint.enable": true)
  = sharable npm module - located in src/eslint

- vscode

* activate eslint in vscode -
  * done in user preferences
* user preferences - ~/Library/Application Support/Code/User
* .vscode/launch.json // for debugging setup

- npm - create package.json and install modules (run yarn)
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

- create directories
  src
  src/util
  tests
  dist
