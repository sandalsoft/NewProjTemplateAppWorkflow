import prog from 'caporal';
import createComponent from '.';
/*
  1. prompt for info
    - project name
  2. check if directory exists
  2a. if so, check for files
  2b. if so, bail

  3. mkdir src/compnent
  4. touch index.js
  5. ask if want to create new function
*/

export const gen = (args) => {
  prog
    .version('1.0.0')
    // you specify arguments using .argument()
    .argument(
      '<type>',
      'Type of thing to create',
      /^proj|project|p|f|func|function|c|comp|component$/
    )
    .argument('<name>', 'Name of component to generate', /^.*$/)
    // you specify options using .option()
    // if --tail is passed, its value is required
    // .option('--tail <lines>', 'Tail <lines> lines of logs after deploy', prog.INT)
    .action(function(args, options, logger) {
      // args and options are objects
      // args = {"app": "myapp", "env": "production"}
      // options = {"tail" : 100}
      logger.info(args);
      createComponent(args.name);
    });

  prog.parse(args);
};
