const fs = require('fs');

/**
 * Safely write file, by using an alternate name if the file already exists.
 * @param {String} filepath 
 * @param {String} filename 
 * @param {String} data  
 * @param {Object || String} options 
 * @see https://stackoverflow.com/a/34187712
 */
module.exports = writeFile = (filepath, filename, data, options) => {

  // Default options. Only write if file !exists
  options = options || { flag: 'wx' };

  fs.writeFile(`${filepath}/${filename}`, `${data}`, options, (error) => {
    
    if (error) {
      
      // 1. Handle file names like `foo.bar.baz.txt`
      const fragments = filename.split('.');
      const extension = fragments.reverse()[0];
      const usefulFileParts = fragments.filter((part) => { return part !== extension }).join('.')
      
      // 2. Write the file with random characters inserted
      const randomChars = Math.random().toString(36).replace(/[^0-z]+/g, '').substr(0, 6);
      
      // 3. Ready new data
      data = `// ${filename} already existed. You may rename this file when safe to do so! */\n${data}`;
      filename = `${usefulFileParts}.${randomChars}.${extension}`;
      
      // 4. Re-run the function
      writeFile(filepath, filename, data, options);

    } else {
      console.log(`${filename} saved to ${filepath}`);
    }

  });

}