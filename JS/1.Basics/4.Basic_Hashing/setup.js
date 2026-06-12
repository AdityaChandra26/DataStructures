const fs = require('node:fs/promises');
const path = require('node:path');
const readline = require('node:readline/promises');
const { stdin: input, stdout: output } = require('node:process');

async function createPromptFolder() {

    try {
        const problemName = process.argv.slice(2).join(' ');
        const folderName = process.argv.slice(2).join('_').replaceAll(':', '');

        const cleanFolderName = folderName.replaceAll(' ', '_');
        const items = await fs.readdir(__dirname, { withFileTypes: true });

        // Filter and keep only the items where isDirectory() is true
        const folderCount = items.filter(item => item.isDirectory()).length;

        if (!cleanFolderName) {
            console.log('Error: Folder name cannot be empty.');
            return;
        }

        // 2. Resolve the absolute path
        const folderPath = path.join(__dirname, `${folderCount + 1}.${cleanFolderName}`);

        // 3. Create the directory
        await fs.mkdir(folderPath, { recursive: true });
        console.log(`Success! Folder created at: ${folderPath}`);
        const filesToCreate = ['problem.js', 'input.txt', 'output.txt'];

        // 5. Create each file inside the new folder
        for (const fileName of filesToCreate) {
            const filePath = path.join(folderPath, fileName);

            // Default boilerplate text for problem.js, blank for txt files
            const defaultContent = fileName === 'problem.js'
                ? `/\/\ ${problemName}\n`
                + `/\/\ Description: \n`
                + "const fs = require('fs');\nlet input = fs.readFileSync(0, 'utf-8');// Reads the entire input.txt file into a string"
                : '';

            await fs.writeFile(filePath, defaultContent, 'utf8');
            console.log(`📄 Created: ${fileName}`);
        }

    } catch (err) {
        console.error('An error occurred:', err.message);
    }
}
createPromptFolder();