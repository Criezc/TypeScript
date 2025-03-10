currentDirectory:: / useCaseSensitiveFileNames: false
Info 0    [00:00:03.000] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request

Info 1    [00:00:04.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/a/app.js",
        "fileContent": "\n                import * as fs from \"fs\";\n                import * as cmd from \"commander\n                "
      },
      "seq": 1,
      "type": "request"
    }
Info 2    [00:00:05.000] Search path: /a
Info 3    [00:00:06.000] For info: /a/app.js :: No config files found.
Info 4    [00:00:07.000] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info 5    [00:00:08.000] DirectoryWatcher:: Added:: WatchInfo: /a/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info 6    [00:00:09.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a/node_modules 1 undefined Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info 7    [00:00:10.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /dev/null/inferredProject1* WatchType: Missing file
Info 8    [00:00:11.000] DirectoryWatcher:: Added:: WatchInfo: /a/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 9    [00:00:12.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 10   [00:00:13.000] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 11   [00:00:14.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 12   [00:00:15.000] 	Files (1)
	/a/app.js SVC-1-0 "\n                import * as fs from \"fs\";\n                import * as cmd from \"commander\n                "


	app.js
	  Root file specified for compilation

Info 13   [00:00:16.000] -----------------------------------------------
TI:: Creating typing installer

PolledWatches::
/a/node_modules: *new*
  {"pollingInterval":500}
/a/lib/lib.d.ts: *new*
  {"pollingInterval":500}
/a/node_modules/@types: *new*
  {"pollingInterval":500}

TI:: [00:00:17.000] Global cache location '/a/data/', safe file path '/safeList.json', types map path /typesMap.json
TI:: [00:00:18.000] Processing cache location '/a/data/'
TI:: [00:00:19.000] Trying to find '/a/data/package.json'...
TI:: [00:00:20.000] Finished processing cache location '/a/data/'
TI:: [00:00:21.000] Npm config file: /a/data/package.json
TI:: [00:00:22.000] Npm config file: '/a/data/package.json' is missing, creating new one...
TI:: [00:00:29.000] Updating types-registry npm package...
TI:: [00:00:30.000] npm install --ignore-scripts types-registry@latest
TI:: [00:00:37.000] TI:: Updated types-registry npm package
TI:: typing installer creation complete
//// [/a/data/package.json]
{ "private": true }

//// [/a/data/node_modules/types-registry/index.json]
{
 "entries": {}
}


TI:: [00:00:38.000] Got install request {"projectName":"/dev/null/inferredProject1*","fileNames":["/a/app.js"],"compilerOptions":{"target":1,"jsx":1,"allowNonTsExtensions":true,"allowJs":true,"noEmitForJsFiles":true,"maxNodeModuleJsDepth":2},"typeAcquisition":{"enable":true,"include":[],"exclude":[]},"unresolvedImports":["commander","fs"],"projectRootPath":"/a","cachePath":"/a/data/","kind":"discover"}
TI:: [00:00:39.000] Request specifies cache path '/a/data/', loading cached information...
TI:: [00:00:40.000] Processing cache location '/a/data/'
TI:: [00:00:41.000] Cache location was already processed...
TI:: [00:00:42.000] Failed to load safelist from types map file '/typesMap.json'
TI:: [00:00:43.000] Explicitly included types: []
TI:: [00:00:44.000] Inferred typings from unresolved imports: ["commander","node"]
TI:: [00:00:45.000] Result: {"cachedTypingPaths":[],"newTypingNames":["commander","node"],"filesToWatch":["/a/bower_components","/a/node_modules"]}
TI:: [00:00:46.000] Finished typings discovery: {"cachedTypingPaths":[],"newTypingNames":["commander","node"],"filesToWatch":["/a/bower_components","/a/node_modules"]}
TI:: [00:00:47.000] DirectoryWatcher:: Added:: WatchInfo: /a/bower_components
TI:: [00:00:48.000] DirectoryWatcher:: Added:: WatchInfo: /a/bower_components 1 undefined Project: /dev/null/inferredProject1* watcher already invoked: false
TI:: [00:00:49.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a/bower_components 1 undefined Project: /dev/null/inferredProject1* watcher already invoked: false
TI:: [00:00:50.000] DirectoryWatcher:: Added:: WatchInfo: /a/node_modules
TI:: [00:00:51.000] DirectoryWatcher:: Added:: WatchInfo: /a/node_modules 1 undefined Project: /dev/null/inferredProject1* watcher already invoked: false
TI:: [00:00:52.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a/node_modules 1 undefined Project: /dev/null/inferredProject1* watcher already invoked: false
TI:: [00:00:53.000] Installing typings ["commander","node"]
TI:: [00:00:54.000] 'commander':: Entry for package 'commander' does not exist in local types registry - skipping...
TI:: [00:00:55.000] 'node':: Entry for package 'node' does not exist in local types registry - skipping...
TI:: [00:00:56.000] All typings are known to be missing or invalid - no need to install more typings
TI:: [00:00:57.000] Sending response:
    {"projectName":"/dev/null/inferredProject1*","typeAcquisition":{"enable":true,"include":[],"exclude":[]},"compilerOptions":{"target":1,"jsx":1,"allowNonTsExtensions":true,"allowJs":true,"noEmitForJsFiles":true,"maxNodeModuleJsDepth":2},"typings":[],"unresolvedImports":["commander","fs"],"kind":"action::set"}
Info 14   [00:00:58.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 14   [00:00:59.000] 	Files (1)

Info 14   [00:01:00.000] -----------------------------------------------
Info 14   [00:01:01.000] Open files: 
Info 14   [00:01:02.000] 	FileName: /a/app.js ProjectRootPath: undefined
Info 14   [00:01:03.000] 		Projects: /dev/null/inferredProject1*
Info 14   [00:01:04.000] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/a/node_modules:
  {"pollingInterval":500}
/a/lib/lib.d.ts:
  {"pollingInterval":500}
/a/node_modules/@types:
  {"pollingInterval":500}
/a/bower_components: *new*
  {"pollingInterval":500}

Before request

Info 15   [00:01:05.000] request:
    {
      "command": "change",
      "arguments": {
        "file": "/a/app.js",
        "insertString": "\nlet x = 1;",
        "line": 2,
        "offset": 0,
        "endLine": 2,
        "endOffset": 0
      },
      "seq": 2,
      "type": "request"
    }
Info 16   [00:01:06.000] response:
    {
      "responseRequired": false
    }
After request

Timeout callback:: count: 0
Immedidate callback:: count: 0

Info 17   [00:01:07.000] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info 18   [00:01:08.000] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* Version: 2 structureChanged: false structureIsReused:: Completely Elapsed:: *ms
Info 19   [00:01:09.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 20   [00:01:10.000] 	Files (1)
	/a/app.js SVC-1-1 "\nlet x = 1;\n                import * as fs from \"fs\";\n                import * as cmd from \"commander\n                "

Info 21   [00:01:11.000] -----------------------------------------------