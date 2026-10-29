import * as fs from 'fs';

async function run() {
    // get inputs
    const modified : {key : string, value : string[]}[] = []
    const added = [{"key":"feature1","value":["a.md","b.md"]},{"key":"feature2","value":["c.md"]}]
    const removed = [{"key":"feature1","value":[".github/workflows/feature-file-commit.yml"]}]

    let featureList = await getFeatureList([...modified, ...added, ...removed])

    for (const feature of featureList) {
        updateSummary(feature, modified, added, removed)
    }
}

async function getFeatureList(dict : {key : string, value : string[]}[]) {
    let list : string[] = []
    for (const {key} of dict) {
        if (!list.includes(key)) {
            list.push(key)
        }
    }
    return list
}

function updateSummary(feature : string, modified : {key : string, value : string[]}[], added : {key : string, value : string[]}[], removed : {key : string, value : string[]}[]) {
    // get var from core
    const fileList : string = `feature1.md,feature3.md,`
    let fileArray = fileList.split(',')
    let featureFileName = `${feature}.md`

    if (fileArray.includes(featureFileName)) {
        console.log(`file ${featureFileName} found, updating existing file`)
    }
    else {
        console.log(`file ${featureFileName} not found, creating new file`)
        writeNew(featureFileName, modified, added, removed)
    }
}

function writeNew(fileName : string, modified : {key : string, value : string[]}[], added : {key : string, value : string[]}[], removed : {key : string, value : string[]}[]) {
    fs.readFile()
}
 
run();