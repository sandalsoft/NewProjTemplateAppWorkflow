import prog from 'caporal';

import { canCreateComponent, createComponent } from '.';
import { inputIsValid } from '../util';

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
      // args and options are ds
      // args = {"app": "myapp", "env": "production"}
      // options = {"tail" : 100}

      //TODO: validate current dir is project dir. Create util/isProjectDir or something
      logger.info(args);
      const newCoponentName = args.name;
      if (!inputIsValid(newCoponentName)) {
        throw new Error(
          'Stop fucking around with passing shit into my fuctions'
        );
      }

      try {
        if (!canCreateComponent(newCoponentName)) {
          const errorMsg = `Unable to create new component - ${newCoponentName}.
            \t1. Verify that PROJECT_ROOT/src/${newCoponentName} doesn't already exist.
            \t2. Verify this is being run from PROJECT_ROOT with existing ./package.json.
          `;
          throw new Error(errorMsg);
        }

        console.log('Lets create this motherfucker!: ', newCoponentName);
        createComponent({ componentName: newCoponentName });
      } catch (err) {
        throw new Error(err);
      }
    });

  prog.parse(args);
};
