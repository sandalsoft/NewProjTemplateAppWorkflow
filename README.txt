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


  
- generator 
  * new component
    * prompt for name if not supplied on cmdline
    * fail if exists, or bail to new function generation
    * mkdir (src/componentName)
    * create index js file that imports componentn name
    * ask (default to Y) if want to continue to function generation (because you probably created)
  
  * new function
    - Ask which compoennt function is part of (Autocomplete list for existing coponents) - Or default to recently created component above 
    * ASK if it's .ts or .js
    - create funtion-name.js file
    - import { log, rejectIfMissing, etc } in function-name.js
    - stub 'const functionName = () => { \n\n\n }'
    - export functionName at bottom
    - create function-name.test.js file
    - add import/export to index.js

* TYPESCRIPT ? ? 
  * pg 120 of GitBook https://www.gitbook.com/book/basarat/typescript/details
  * tslint.json
    - "no-null-keyword": true
  * tsconfig.json
    - https://codeburst.io/five-tips-i-wish-i-knew-when-i-started-with-typescript-c9e8609029db
      "forceConsistentCasingInFileNames": true,
      "noImplicitReturns": true,
      "strict": true,
      "noUnusedLocals": true,
      “no-any”: true
  


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
  * set .editorconfig - https://gist.githubusercontent.com/sandalsoft/8dc8c4a2047d38e3db3138229a2427cb/raw/977e609c5c275b92f17420b13353a51a4468b8c1/.editorconfig

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
  devDependencies:
    babel-core
    babel-eslint
    babel-cli
    babel-preset-env
    babel-plugin-transform-object-rest-spread
    prettyjson
    eslint
    jest
    pretty-error
    c8
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
