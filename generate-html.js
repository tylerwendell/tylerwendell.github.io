const fs = require('fs');
const marked = require('marked');

// Read all of the Markdown files in the "blogs" directory
fs.readdir('blogs', (err, files) => {
  if (err) {
    console.error(err);
    return;
  }

  // For each Markdown file, parse the content and render it as HTML
  files.forEach((file) => {
    fs.readFile(`blogs/${file}`, 'utf-8', (err, content) => {
      if (err) {
        console.error(err);
        return;
      }

      const html = marked(content);

      // Write the HTML content to a new file with the same name as the Markdown file, but with a .html extension
      fs.writeFile(`blogs/${file.replace('.md', '.html')}`, html, (err) => {
        if (err) {
          console.error(err);
          return;
        }

        console.log(`Successfully rendered ${file} as HTML`);
      });
    });
  });
});
