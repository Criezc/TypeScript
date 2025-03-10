currentDirectory:: / useCaseSensitiveFileNames: false
Info 0    [00:00:09.000] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request
//// [/a/someFile1.js]
class C { }
/** @wat {@link C} */
var x = 1

//// [/a/tsconfig.json]
{
"compilerOptions": {
"checkJs": true,
"noEmit": true
}
"files": ["someFile1.js"]
}



Info 1    [00:00:10.000] request:
    {
      "command": "configure",
      "arguments": {
        "preferences": {
          "displayPartsForJSDoc": false
        }
      },
      "seq": 1,
      "type": "request"
    }
Info 2    [00:00:11.000] response:
    {"seq":0,"type":"response","command":"configure","request_seq":1,"success":true}
Info 3    [00:00:12.000] response:
    {
      "responseRequired": false
    }
After request

Before request

Info 4    [00:00:13.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/a/someFile1.js"
      },
      "seq": 2,
      "type": "request"
    }
Info 5    [00:00:14.000] Search path: /a
Info 6    [00:00:15.000] For info: /a/someFile1.js :: Config file name: /a/tsconfig.json
Info 7    [00:00:16.000] Creating configuration project /a/tsconfig.json
Info 8    [00:00:17.000] FileWatcher:: Added:: WatchInfo: /a/tsconfig.json 2000 undefined Project: /a/tsconfig.json WatchType: Config file
Info 9    [00:00:18.000] Config: /a/tsconfig.json : {
 "rootNames": [
  "/a/someFile1.js"
 ],
 "options": {
  "checkJs": true,
  "noEmit": true,
  "configFilePath": "/a/tsconfig.json"
 }
}
Info 10   [00:00:19.000] Starting updateGraphWorker: Project: /a/tsconfig.json
Info 11   [00:00:20.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /a/tsconfig.json WatchType: Missing file
Info 12   [00:00:21.000] DirectoryWatcher:: Added:: WatchInfo: /a/node_modules/@types 1 undefined Project: /a/tsconfig.json WatchType: Type roots
Info 13   [00:00:22.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a/node_modules/@types 1 undefined Project: /a/tsconfig.json WatchType: Type roots
Info 14   [00:00:23.000] Finishing updateGraphWorker: Project: /a/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 15   [00:00:24.000] Project '/a/tsconfig.json' (Configured)
Info 16   [00:00:25.000] 	Files (1)
	/a/someFile1.js SVC-1-0 "class C { }\n/** @wat {@link C} */\nvar x = 1"


	someFile1.js
	  Part of 'files' list in tsconfig.json

Info 17   [00:00:26.000] -----------------------------------------------
Info 18   [00:00:27.000] Project '/a/tsconfig.json' (Configured)
Info 18   [00:00:28.000] 	Files (1)

Info 18   [00:00:29.000] -----------------------------------------------
Info 18   [00:00:30.000] Open files: 
Info 18   [00:00:31.000] 	FileName: /a/someFile1.js ProjectRootPath: undefined
Info 18   [00:00:32.000] 		Projects: /a/tsconfig.json
Info 18   [00:00:33.000] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/a/lib/lib.d.ts: *new*
  {"pollingInterval":500}
/a/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/a/tsconfig.json: *new*
  {}

Before request

Info 19   [00:00:34.000] request:
    {
      "command": "quickinfo",
      "arguments": {
        "file": "/a/someFile1.js",
        "position": 38
      },
      "seq": 3,
      "type": "request"
    }
Info 20   [00:00:35.000] response:
    {
      "response": {
        "kind": "var",
        "kindModifiers": "",
        "start": {
          "line": 3,
          "offset": 5
        },
        "end": {
          "line": 3,
          "offset": 6
        },
        "displayString": "var x: number",
        "documentation": "",
        "tags": [
          {
            "name": "wat",
            "text": "{@link C}"
          }
        ]
      },
      "responseRequired": true
    }
After request
