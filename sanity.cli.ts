/**
* This configuration file lets you run `$ sanity [command]` in this folder
* Go to https://www.sanity.io/docs/cli to learn more.
**/
{/*import { defineCliConfig } from 'sanity/cli';



const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
      process.env.SANITY_API_TOKEN */}

      import { defineCliConfig } from 'sanity/cli';

      export default defineCliConfig({
        api: {
          projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,  // Correct usage of environment variable
          dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,      // Correct usage of environment variable
         
        },
      });
      