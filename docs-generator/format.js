const fs = require('fs');
const rawDocFilePath = './docs.json';

if (fs.existsSync(rawDocFilePath)) {
    var raw_data = JSON.parse(fs.readFileSync(rawDocFilePath, 'utf8'));
    var raw_docs = raw_data.docs;
    var docs = [];

    for (let doc of raw_docs) {
        if (doc.kind == 'class') {
            docs.push({
                name: doc.meta.code.name,
                params: doc.params,
                methods: []
            });
        }
    }
    for (let i = 0; i < raw_docs.length; i++) {
        let isFunction = raw_docs[i].kind == 'function';

        if (isFunction && (!raw_docs[i].access || raw_docs[i].access != 'private')) {
            let doc = docs.find(doc => doc.name == raw_docs[i].memberof);

            doc.methods.push({
                name: raw_docs[i].name,
                description: raw_docs[i].description,
                params: raw_docs[i].params,
                returns: raw_docs[i].returns
            });
        }
    }
    fs.writeFileSync(rawDocFilePath, JSON.stringify(docs), 'utf8');

} else {
    console.log('The doc file is not found!');
    process.exit(0);
}
