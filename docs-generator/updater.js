/* eslint-disable prettier/prettier */
/* eslint-disable */
const fs = require('fs');
const rawDocFilePath = './docs.json';
const docsFilePath = '../static/docs/';

let contentLoader = {
    modules: function (line) {
        if (fs.existsSync(rawDocFilePath)) {
            const rawModuleDocs = fs.readFileSync(rawDocFilePath, 'utf8');
            var leftString = line.slice(0);
        
            try {
                const moduleDocs = JSON.parse(rawModuleDocs);
        
                for (let i = 0; i < moduleDocs.length; i++) {
                    const doc = moduleDocs[i];
                    line += `${(i != 0 ? '\n' + leftString : '')}* [${doc.name}](/modules/${doc.name})`;
                    let moduleContent = `# ${doc.name}\n_________________`;
        
                    for (let i = 0; i < doc.methods.length; i++) {
                        const method = doc.methods[i];
                        let useExtraParamsData = false;
                        let params = [];
        
                        for (const param of method.params) {
                            if (param.hasOwnProperty('description') || param.hasOwnProperty('defaultvalue')) {
                                useExtraParamsData = true;
                            }
                            params.push(`${param.name}: <i>${param.type.names.join('|')}</i>`);
                        }
                        moduleContent += "\n\n<h3>" + method.name + " (" + params.join(', ') + ")</h3>";
        
                        if (useExtraParamsData) {
                            moduleContent += "\n\n```Params```\n";
        
                            for (const param of method.params) {
                                moduleContent += "\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <small>&#9671;</small> &nbsp; **" + param.name + "** ";
                                if (param.description) {
                                    moduleContent += param.description;
                                }
                                if (param.defaultvalue) {
                                    moduleContent += " (default = " + param.defaultvalue + ")";
                                }
                                moduleContent += "</br>";
                            }
                        }
                        moduleContent += "</br>\n";
        
                        if (method.description) {
                            const hasNewLines = /(\r\n|\r|\n)/g;
                            moduleContent += "\n```Description``` ";

                            if (method.description.match(hasNewLines)) {
                                moduleContent += "<br />";
                            }
                            moduleContent += method.description.replace(hasNewLines, "<br />");
                        }
                        if (method.returns) {
                            let returns = method.returns[0];
                            for (let i = 0; i < returns.type.names.length; i++) {
                                returns.type.names[i] = returns.type.names[i].charAt(0).toUpperCase() + returns.type.names[i].substring(1);
                            }
                            moduleContent += "\n\n```Returns``` { **" + returns.type.names.join('|') + "** } ";
                            
                            if (returns.description) {
                                moduleContent += returns.description;
                            }
                        }
                        if (i < doc.methods.length) {
                            moduleContent += "\n_________________";
                        }
                    }
                    fs.writeFileSync(docsFilePath + 'modules/' + doc.name + '.md', moduleContent, 'utf8');
                }
            } catch (e) {
                console.log('Cannot process the docs file');
                process.exit(0);
            }
        
        } else {
            console.log('The doc file is not found!');
            process.exit(0);
        }
        return line;
    }
};

let sidebarContent = fs.readFileSync(docsFilePath + '_sidebar.default.md', 'utf8').split('\r\n');

for (let i = 0; i < sidebarContent.length; i++) {
    if (sidebarContent[i].includes('<!--- jsdoc-generated-sidebar')) {
        const contentName = sidebarContent[i].split('$')[1].split(' ')[0];

        if (contentLoader[contentName]) {
            sidebarContent[i] = contentLoader[contentName](
                sidebarContent[i].replace("<!--- jsdoc-generated-sidebar $" + contentName + " -->", '')
            );
        }
    }
}

fs.writeFileSync(docsFilePath + '_sidebar.md', sidebarContent.join('\n'), 'utf8');
