# Food Festival
Progressive Web Application for a 3-day festival

## Key Takeaways
- Identify performance bottlenecks in web applications.
- Explain how performance can be measured in web applications.
- Explain the five main categories measured in a Lighthouse audit.
- Optimize CSS, JavaScript, and media assets for performance.
- Set up webpack in a new front-end project.
- Use service workers to cache assets for offline functionality.
- Convert an existing web application to a PWA.

## Tools
- **Google Lighthouse** is a tool that helps improve the performance of web applications by providing audits for performance, accessibility, Progressive Web Apps, and more. It's included in Chrome DevTools.
- **webpack** is a module bundler for JavaScript that simplifies front-end web development by generating static assets from modules with dependencies and using plugins and loaders to help automate certain optimization strategies. You’ll use the webpack (Links to an external site.) and webpack CLI packages in your project.
- The **webpack-bundle-analyzer** plugin allows you to visualize the size of webpack output files with an interactive zoomable treemap.
- The **file-loader** plugin resolves import/require() on a file into a URL and emits the file into the output directory.

- The **image-webpack-loader** plugin allows you to enhance your image-loading process.
- The **SW-precache-webpack** plugin allows you to use service workers to cache your external project dependencies. It will generate a service worker file, using sw-precache, and add it to your build directory.
-T he **webpack-PWA-manifest** plugin generates a manifest.json for your PWA, with auto icon resizing and fingerprinting support.
