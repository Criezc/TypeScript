currentDirectory:: / useCaseSensitiveFileNames: false
Info 0    [00:00:39.000] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request
//// [/a/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }

//// [/users/username/projects/myproject/javascript/packages/recognizers-date-time/src/datetime/baseDate.ts]
import {C} from "@microsoft/recognizers-text";
new C();

//// [/users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json]
{"compilerOptions":{"rootDir":"src","baseUrl":"./","paths":{"@microsoft/*":["../*"]}},"include":["src"]}

//// [/users/username/projects/myproject/javascript/packages/recognizers-text/src/recognizers-text.ts]
export class C { method () { return 10; } }

//// [/users/username/projects/myproject/javascript/packages/recognizers-text/package.json]
{"typings":"dist/types/recognizers-text.d.ts"}


Info 1    [00:00:40.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/users/username/projects/myproject/javascript/packages/recognizers-date-time/src/datetime/baseDate.ts",
        "projectRootPath": "/users/username/projects/myproject"
      },
      "seq": 1,
      "type": "request"
    }
Info 2    [00:00:41.000] Search path: /users/username/projects/myproject/javascript/packages/recognizers-date-time/src/datetime
Info 3    [00:00:42.000] For info: /users/username/projects/myproject/javascript/packages/recognizers-date-time/src/datetime/baseDate.ts :: Config file name: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json
Info 4    [00:00:43.000] Creating configuration project /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json
Info 5    [00:00:44.000] FileWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json 2000 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Config file
Info 6    [00:00:45.000] event:
    {"seq":0,"type":"event","event":"projectLoadingStart","body":{"projectName":"/users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json","reason":"Creating possible configured project for /users/username/projects/myproject/javascript/packages/recognizers-date-time/src/datetime/baseDate.ts to open"}}
Info 7    [00:00:46.000] Config: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json : {
 "rootNames": [
  "/users/username/projects/myproject/javascript/packages/recognizers-date-time/src/datetime/baseDate.ts"
 ],
 "options": {
  "rootDir": "/users/username/projects/myproject/javascript/packages/recognizers-date-time/src",
  "baseUrl": "/users/username/projects/myproject/javascript/packages/recognizers-date-time",
  "paths": {
   "@microsoft/*": [
    "../*"
   ]
  },
  "pathsBasePath": "/users/username/projects/myproject/javascript/packages/recognizers-date-time",
  "configFilePath": "/users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json"
 }
}
Info 8    [00:00:47.000] DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-date-time/src 1 undefined Config: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Wild card directory
Info 9    [00:00:48.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-date-time/src 1 undefined Config: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Wild card directory
Info 10   [00:00:49.000] Starting updateGraphWorker: Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json
Info 11   [00:00:50.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info 12   [00:00:51.000] DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/packages 0 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 13   [00:00:52.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/packages 0 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 14   [00:00:53.000] DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-text 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 15   [00:00:54.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-text 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 16   [00:00:55.000] DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-date-time/src 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 17   [00:00:56.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-date-time/src 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 18   [00:00:57.000] DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 19   [00:00:58.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 20   [00:00:59.000] DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/packages/node_modules 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 21   [00:01:00.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/packages/node_modules 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 22   [00:01:01.000] DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/node_modules 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 23   [00:01:02.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/node_modules 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 24   [00:01:03.000] DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/node_modules 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 25   [00:01:04.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/node_modules 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 26   [00:01:05.000] DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/node_modules 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 27   [00:01:06.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/node_modules 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 28   [00:01:07.000] FileWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-text/package.json 2000 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: File location affecting resolution
Info 29   [00:01:08.000] DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 30   [00:01:09.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 31   [00:01:10.000] DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/packages/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 32   [00:01:11.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/packages/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 33   [00:01:12.000] DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 34   [00:01:13.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 35   [00:01:14.000] DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 36   [00:01:15.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 37   [00:01:16.000] DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 38   [00:01:17.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 39   [00:01:18.000] Finishing updateGraphWorker: Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 40   [00:01:19.000] Project '/users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json' (Configured)
Info 41   [00:01:20.000] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/users/username/projects/myproject/javascript/packages/recognizers-date-time/src/datetime/baseDate.ts SVC-1-0 "import {C} from \"@microsoft/recognizers-text\";\nnew C();"


	../../../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	src/datetime/baseDate.ts
	  Matched by include pattern 'src' in 'tsconfig.json'

Info 42   [00:01:21.000] -----------------------------------------------
Info 43   [00:01:22.000] event:
    {"seq":0,"type":"event","event":"projectLoadingFinish","body":{"projectName":"/users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json"}}
Info 44   [00:01:23.000] event:
    {"seq":0,"type":"event","event":"telemetry","body":{"telemetryEventName":"projectInfo","payload":{"projectId":"a6bd830f3b019a6f703b938422f5798726d0914f0d6f67c2539798ea5e66fed2","fileStats":{"js":0,"jsSize":0,"jsx":0,"jsxSize":0,"ts":1,"tsSize":55,"tsx":0,"tsxSize":0,"dts":1,"dtsSize":334,"deferred":0,"deferredSize":0},"compilerOptions":{"rootDir":"","baseUrl":"","paths":""},"typeAcquisition":{"enable":false,"include":false,"exclude":false},"extends":false,"files":false,"include":true,"exclude":false,"compileOnSave":false,"configFileName":"tsconfig.json","projectType":"configured","languageServiceEnabled":true,"version":"FakeVersion"}}}
Info 45   [00:01:24.000] event:
    {"seq":0,"type":"event","event":"configFileDiag","body":{"triggerFile":"/users/username/projects/myproject/javascript/packages/recognizers-date-time/src/datetime/baseDate.ts","configFile":"/users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json","diagnostics":[]}}
Info 46   [00:01:25.000] Project '/users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json' (Configured)
Info 46   [00:01:26.000] 	Files (2)

Info 46   [00:01:27.000] -----------------------------------------------
Info 46   [00:01:28.000] Open files: 
Info 46   [00:01:29.000] 	FileName: /users/username/projects/myproject/javascript/packages/recognizers-date-time/src/datetime/baseDate.ts ProjectRootPath: /users/username/projects/myproject
Info 46   [00:01:30.000] 		Projects: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json
Info 46   [00:01:31.000] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules: *new*
  {"pollingInterval":500}
/users/username/projects/myproject/javascript/packages/node_modules: *new*
  {"pollingInterval":500}
/users/username/projects/myproject/javascript/node_modules: *new*
  {"pollingInterval":500}
/users/username/projects/myproject/node_modules: *new*
  {"pollingInterval":500}
/users/username/projects/node_modules: *new*
  {"pollingInterval":500}
/users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules/@types: *new*
  {"pollingInterval":500}
/users/username/projects/myproject/javascript/packages/node_modules/@types: *new*
  {"pollingInterval":500}
/users/username/projects/myproject/javascript/node_modules/@types: *new*
  {"pollingInterval":500}
/users/username/projects/myproject/node_modules/@types: *new*
  {"pollingInterval":500}
/users/username/projects/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json: *new*
  {}
/a/lib/lib.d.ts: *new*
  {}
/users/username/projects/myproject/javascript/packages: *new*
  {}
/users/username/projects/myproject/javascript/packages/recognizers-text/package.json: *new*
  {}

FsWatchesRecursive::
/users/username/projects/myproject/javascript/packages/recognizers-date-time/src: *new*
  {}
/users/username/projects/myproject/javascript/packages/recognizers-text: *new*
  {}

Before request

Info 47   [00:01:32.000] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/users/username/projects/myproject/javascript/packages/recognizers-date-time/src/datetime/baseDate.ts"
        ]
      },
      "seq": 2,
      "type": "request"
    }
Info 48   [00:01:33.000] response:
    {
      "responseRequired": false
    }
After request

Before running Timeout callback:: count: 1
1: checkOne

Info 49   [00:01:34.000] event:
    {"seq":0,"type":"event","event":"syntaxDiag","body":{"file":"/users/username/projects/myproject/javascript/packages/recognizers-date-time/src/datetime/baseDate.ts","diagnostics":[]}}
After running Timeout callback:: count: 0

Before running Immedidate callback:: count: 1
1: semanticCheck

Info 50   [00:01:35.000] event:
    {"seq":0,"type":"event","event":"semanticDiag","body":{"file":"/users/username/projects/myproject/javascript/packages/recognizers-date-time/src/datetime/baseDate.ts","diagnostics":[{"start":{"line":1,"offset":17},"end":{"line":1,"offset":46},"text":"Cannot find module '@microsoft/recognizers-text' or its corresponding type declarations.","code":2307,"category":"error"}]}}
After running Immedidate callback:: count: 1
2: suggestionCheck

Before running Immedidate callback:: count: 1
2: suggestionCheck

Info 51   [00:01:36.000] event:
    {"seq":0,"type":"event","event":"suggestionDiag","body":{"file":"/users/username/projects/myproject/javascript/packages/recognizers-date-time/src/datetime/baseDate.ts","diagnostics":[]}}
Info 52   [00:01:37.000] event:
    {"seq":0,"type":"event","event":"requestCompleted","body":{"request_seq":2}}
After running Immedidate callback:: count: 0

Info 53   [00:01:42.000] DirectoryWatcher:: Triggered with /users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules :: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 54   [00:01:43.000] Scheduled: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.jsonFailedLookupInvalidation
Info 55   [00:01:44.000] Elapsed:: *ms DirectoryWatcher:: Triggered with /users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules :: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 56   [00:01:45.000] DirectoryWatcher:: Triggered with /users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules :: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 57   [00:01:46.000] Scheduled: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.jsonFailedLookupInvalidation, Cancelled earlier one
Info 58   [00:01:47.000] Elapsed:: *ms DirectoryWatcher:: Triggered with /users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules :: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 59   [00:01:49.000] DirectoryWatcher:: Triggered with /users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules/@microsoft :: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 60   [00:01:50.000] Scheduled: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.jsonFailedLookupInvalidation, Cancelled earlier one
Info 61   [00:01:51.000] Elapsed:: *ms DirectoryWatcher:: Triggered with /users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules/@microsoft :: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 62   [00:01:53.000] DirectoryWatcher:: Triggered with /users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules/@microsoft/recognizers-text :: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 63   [00:01:54.000] Scheduled: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.jsonFailedLookupInvalidation, Cancelled earlier one
Info 64   [00:01:55.000] Elapsed:: *ms DirectoryWatcher:: Triggered with /users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules/@microsoft/recognizers-text :: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 65   [00:01:59.000] DirectoryWatcher:: Triggered with /users/username/projects/myproject/javascript/packages/recognizers-text/dist :: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-text 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 66   [00:02:00.000] Scheduled: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.jsonFailedLookupInvalidation, Cancelled earlier one
Info 67   [00:02:01.000] Elapsed:: *ms DirectoryWatcher:: Triggered with /users/username/projects/myproject/javascript/packages/recognizers-text/dist :: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-text 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 68   [00:02:04.000] DirectoryWatcher:: Triggered with /users/username/projects/myproject/javascript/packages/recognizers-text/dist/types :: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-text 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 69   [00:02:05.000] Scheduled: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.jsonFailedLookupInvalidation, Cancelled earlier one
Info 70   [00:02:06.000] Elapsed:: *ms DirectoryWatcher:: Triggered with /users/username/projects/myproject/javascript/packages/recognizers-text/dist/types :: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-text 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 71   [00:02:09.000] DirectoryWatcher:: Triggered with /users/username/projects/myproject/javascript/packages/recognizers-text/dist/types/recognizers-text.d.ts :: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-text 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 72   [00:02:10.000] Scheduled: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.jsonFailedLookupInvalidation, Cancelled earlier one
Info 73   [00:02:11.000] Elapsed:: *ms DirectoryWatcher:: Triggered with /users/username/projects/myproject/javascript/packages/recognizers-text/dist/types/recognizers-text.d.ts :: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-text 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Before running Timeout callback:: count: 1
8: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.jsonFailedLookupInvalidation
//// [/users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules/@microsoft/recognizers-text] symlink(/users/username/projects/myproject/javascript/packages/recognizers-text)
//// [/users/username/projects/myproject/javascript/packages/recognizers-text/dist/types/recognizers-text.d.ts]
export class C { method(): number; }


PolledWatches::
/users/username/projects/myproject/javascript/packages/node_modules:
  {"pollingInterval":500}
/users/username/projects/myproject/javascript/node_modules:
  {"pollingInterval":500}
/users/username/projects/myproject/node_modules:
  {"pollingInterval":500}
/users/username/projects/node_modules:
  {"pollingInterval":500}
/users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules/@types:
  {"pollingInterval":500}
/users/username/projects/myproject/javascript/packages/node_modules/@types:
  {"pollingInterval":500}
/users/username/projects/myproject/javascript/node_modules/@types:
  {"pollingInterval":500}
/users/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/users/username/projects/node_modules/@types:
  {"pollingInterval":500}

PolledWatches *deleted*::
/users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules:
  {"pollingInterval":500}

FsWatches::
/users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json:
  {}
/a/lib/lib.d.ts:
  {}
/users/username/projects/myproject/javascript/packages:
  {}
/users/username/projects/myproject/javascript/packages/recognizers-text/package.json:
  {}

FsWatchesRecursive::
/users/username/projects/myproject/javascript/packages/recognizers-date-time/src:
  {}
/users/username/projects/myproject/javascript/packages/recognizers-text:
  {}
/users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules: *new*
  {}

Info 74   [00:02:12.000] Running: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.jsonFailedLookupInvalidation
Info 75   [00:02:13.000] Scheduled: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json
Info 76   [00:02:14.000] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2
9: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json
10: *ensureProjectForOpenFiles*

Before running Timeout callback:: count: 2
9: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json
10: *ensureProjectForOpenFiles*

Info 77   [00:02:15.000] Running: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json
Info 78   [00:02:16.000] Starting updateGraphWorker: Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json
Info 79   [00:02:17.000] FileWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-text/dist/types/recognizers-text.d.ts 500 undefined WatchType: Closed Script info
Info 80   [00:02:18.000] DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-text 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 81   [00:02:19.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-text 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 82   [00:02:20.000] DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-date-time/src 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 83   [00:02:21.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-date-time/src 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 84   [00:02:22.000] DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 85   [00:02:23.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 86   [00:02:24.000] DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/myproject/javascript/packages/node_modules 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 87   [00:02:25.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/myproject/javascript/packages/node_modules 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 88   [00:02:26.000] DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/myproject/javascript/node_modules 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 89   [00:02:27.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/myproject/javascript/node_modules 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 90   [00:02:28.000] DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/myproject/node_modules 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 91   [00:02:29.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/myproject/node_modules 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 92   [00:02:30.000] DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/node_modules 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 93   [00:02:31.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/node_modules 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 94   [00:02:32.000] Finishing updateGraphWorker: Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json Version: 2 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info 95   [00:02:33.000] Project '/users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json' (Configured)
Info 96   [00:02:34.000] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/users/username/projects/myproject/javascript/packages/recognizers-text/dist/types/recognizers-text.d.ts Text-1 "export class C { method(): number; }"
	/users/username/projects/myproject/javascript/packages/recognizers-date-time/src/datetime/baseDate.ts SVC-1-0 "import {C} from \"@microsoft/recognizers-text\";\nnew C();"


	../../../../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	../recognizers-text/dist/types/recognizers-text.d.ts
	  Imported via "@microsoft/recognizers-text" from file 'src/datetime/baseDate.ts'
	src/datetime/baseDate.ts
	  Matched by include pattern 'src' in 'tsconfig.json'

Info 97   [00:02:35.000] -----------------------------------------------
Info 98   [00:02:36.000] Running: *ensureProjectForOpenFiles*
Info 99   [00:02:37.000] Before ensureProjectForOpenFiles:
Info 100  [00:02:38.000] Project '/users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json' (Configured)
Info 100  [00:02:39.000] 	Files (3)

Info 100  [00:02:40.000] -----------------------------------------------
Info 100  [00:02:41.000] Open files: 
Info 100  [00:02:42.000] 	FileName: /users/username/projects/myproject/javascript/packages/recognizers-date-time/src/datetime/baseDate.ts ProjectRootPath: /users/username/projects/myproject
Info 100  [00:02:43.000] 		Projects: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json
Info 100  [00:02:44.000] After ensureProjectForOpenFiles:
Info 101  [00:02:45.000] Project '/users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json' (Configured)
Info 101  [00:02:46.000] 	Files (3)

Info 101  [00:02:47.000] -----------------------------------------------
Info 101  [00:02:48.000] Open files: 
Info 101  [00:02:49.000] 	FileName: /users/username/projects/myproject/javascript/packages/recognizers-date-time/src/datetime/baseDate.ts ProjectRootPath: /users/username/projects/myproject
Info 101  [00:02:50.000] 		Projects: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json
Info 101  [00:02:51.000] got projects updated in background, updating diagnostics for /users/username/projects/myproject/javascript/packages/recognizers-date-time/src/datetime/baseDate.ts
Info 102  [00:02:52.000] event:
    {"seq":0,"type":"event","event":"projectsUpdatedInBackground","body":{"openFiles":["/users/username/projects/myproject/javascript/packages/recognizers-date-time/src/datetime/baseDate.ts"]}}
After running Timeout callback:: count: 1
11: checkOne

PolledWatches::
/users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules/@types:
  {"pollingInterval":500}
/users/username/projects/myproject/javascript/packages/node_modules/@types:
  {"pollingInterval":500}
/users/username/projects/myproject/javascript/node_modules/@types:
  {"pollingInterval":500}
/users/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/users/username/projects/node_modules/@types:
  {"pollingInterval":500}

PolledWatches *deleted*::
/users/username/projects/myproject/javascript/packages/node_modules:
  {"pollingInterval":500}
/users/username/projects/myproject/javascript/node_modules:
  {"pollingInterval":500}
/users/username/projects/myproject/node_modules:
  {"pollingInterval":500}
/users/username/projects/node_modules:
  {"pollingInterval":500}

FsWatches::
/users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json:
  {}
/a/lib/lib.d.ts:
  {}
/users/username/projects/myproject/javascript/packages:
  {}
/users/username/projects/myproject/javascript/packages/recognizers-text/package.json:
  {}
/users/username/projects/myproject/javascript/packages/recognizers-text/dist/types/recognizers-text.d.ts: *new*
  {}

FsWatchesRecursive::
/users/username/projects/myproject/javascript/packages/recognizers-date-time/src:
  {}

FsWatchesRecursive *deleted*::
/users/username/projects/myproject/javascript/packages/recognizers-text:
  {}
/users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules:
  {}

Before request

Info 103  [00:02:53.000] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/users/username/projects/myproject/javascript/packages/recognizers-date-time/src/datetime/baseDate.ts"
        ]
      },
      "seq": 3,
      "type": "request"
    }
Info 104  [00:02:54.000] response:
    {
      "responseRequired": false
    }
After request

Before running Timeout callback:: count: 1
12: checkOne

Info 105  [00:02:55.000] event:
    {"seq":0,"type":"event","event":"syntaxDiag","body":{"file":"/users/username/projects/myproject/javascript/packages/recognizers-date-time/src/datetime/baseDate.ts","diagnostics":[]}}
After running Timeout callback:: count: 0

Before running Immedidate callback:: count: 1
3: semanticCheck

Info 106  [00:02:56.000] event:
    {"seq":0,"type":"event","event":"semanticDiag","body":{"file":"/users/username/projects/myproject/javascript/packages/recognizers-date-time/src/datetime/baseDate.ts","diagnostics":[]}}
After running Immedidate callback:: count: 1
4: suggestionCheck

Before running Immedidate callback:: count: 1
4: suggestionCheck

Info 107  [00:02:57.000] event:
    {"seq":0,"type":"event","event":"suggestionDiag","body":{"file":"/users/username/projects/myproject/javascript/packages/recognizers-date-time/src/datetime/baseDate.ts","diagnostics":[]}}
Info 108  [00:02:58.000] event:
    {"seq":0,"type":"event","event":"requestCompleted","body":{"request_seq":3}}
After running Immedidate callback:: count: 0

Info 109  [00:03:02.000] FileWatcher:: Triggered with /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json 1:: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json 2000 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Config file
Info 110  [00:03:03.000] Scheduled: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json
Info 111  [00:03:04.000] Scheduled: *ensureProjectForOpenFiles*
Info 112  [00:03:05.000] Elapsed:: *ms FileWatcher:: Triggered with /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json 1:: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json 2000 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Config file
Before running Timeout callback:: count: 2
13: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json
14: *ensureProjectForOpenFiles*
//// [/users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json]
{"compilerOptions":{"rootDir":"src","baseUrl":"./","paths":{"@microsoft/*":["../*"]},"resolveJsonModule":true},"include":["src"]}


Info 113  [00:03:06.000] Running: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json
Info 114  [00:03:07.000] Reloading configured project /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json
Info 115  [00:03:08.000] event:
    {"seq":0,"type":"event","event":"projectLoadingStart","body":{"projectName":"/users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json","reason":"Change in config file detected"}}
Info 116  [00:03:09.000] Config: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json : {
 "rootNames": [
  "/users/username/projects/myproject/javascript/packages/recognizers-date-time/src/datetime/baseDate.ts"
 ],
 "options": {
  "rootDir": "/users/username/projects/myproject/javascript/packages/recognizers-date-time/src",
  "baseUrl": "/users/username/projects/myproject/javascript/packages/recognizers-date-time",
  "paths": {
   "@microsoft/*": [
    "../*"
   ]
  },
  "resolveJsonModule": true,
  "pathsBasePath": "/users/username/projects/myproject/javascript/packages/recognizers-date-time",
  "configFilePath": "/users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json"
 }
}
Info 117  [00:03:10.000] DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/myproject/javascript/packages 0 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 118  [00:03:11.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/myproject/javascript/packages 0 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 119  [00:03:12.000] FileWatcher:: Close:: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-text/package.json 2000 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: File location affecting resolution
Info 120  [00:03:13.000] DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 121  [00:03:14.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 122  [00:03:15.000] DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/myproject/javascript/packages/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 123  [00:03:16.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/myproject/javascript/packages/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 124  [00:03:17.000] DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/myproject/javascript/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 125  [00:03:18.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/myproject/javascript/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 126  [00:03:19.000] DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/myproject/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 127  [00:03:20.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/myproject/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 128  [00:03:21.000] DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 129  [00:03:22.000] Elapsed:: *ms DirectoryWatcher:: Close:: WatchInfo: /users/username/projects/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 130  [00:03:23.000] Starting updateGraphWorker: Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json
Info 131  [00:03:24.000] DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/packages 0 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 132  [00:03:25.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/packages 0 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Failed Lookup Locations
Info 133  [00:03:26.000] FileWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-text/package.json 2000 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: File location affecting resolution
Info 134  [00:03:27.000] DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 135  [00:03:28.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 136  [00:03:29.000] DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/packages/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 137  [00:03:30.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/packages/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 138  [00:03:31.000] DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 139  [00:03:32.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/javascript/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 140  [00:03:33.000] DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 141  [00:03:34.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/myproject/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 142  [00:03:35.000] DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 143  [00:03:36.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /users/username/projects/node_modules/@types 1 undefined Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json WatchType: Type roots
Info 144  [00:03:37.000] Finishing updateGraphWorker: Project: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json Version: 3 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 145  [00:03:38.000] Project '/users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json' (Configured)
Info 146  [00:03:39.000] 	Files (3)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/users/username/projects/myproject/javascript/packages/recognizers-text/dist/types/recognizers-text.d.ts Text-1 "export class C { method(): number; }"
	/users/username/projects/myproject/javascript/packages/recognizers-date-time/src/datetime/baseDate.ts SVC-1-0 "import {C} from \"@microsoft/recognizers-text\";\nnew C();"

Info 147  [00:03:40.000] -----------------------------------------------
Info 148  [00:03:41.000] event:
    {"seq":0,"type":"event","event":"projectLoadingFinish","body":{"projectName":"/users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json"}}
Info 149  [00:03:42.000] event:
    {"seq":0,"type":"event","event":"configFileDiag","body":{"triggerFile":"/users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json","configFile":"/users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json","diagnostics":[]}}
Info 150  [00:03:43.000] Running: *ensureProjectForOpenFiles*
Info 151  [00:03:44.000] Before ensureProjectForOpenFiles:
Info 152  [00:03:45.000] Project '/users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json' (Configured)
Info 152  [00:03:46.000] 	Files (3)

Info 152  [00:03:47.000] -----------------------------------------------
Info 152  [00:03:48.000] Open files: 
Info 152  [00:03:49.000] 	FileName: /users/username/projects/myproject/javascript/packages/recognizers-date-time/src/datetime/baseDate.ts ProjectRootPath: /users/username/projects/myproject
Info 152  [00:03:50.000] 		Projects: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json
Info 152  [00:03:51.000] After ensureProjectForOpenFiles:
Info 153  [00:03:52.000] Project '/users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json' (Configured)
Info 153  [00:03:53.000] 	Files (3)

Info 153  [00:03:54.000] -----------------------------------------------
Info 153  [00:03:55.000] Open files: 
Info 153  [00:03:56.000] 	FileName: /users/username/projects/myproject/javascript/packages/recognizers-date-time/src/datetime/baseDate.ts ProjectRootPath: /users/username/projects/myproject
Info 153  [00:03:57.000] 		Projects: /users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json
Info 153  [00:03:58.000] got projects updated in background, updating diagnostics for /users/username/projects/myproject/javascript/packages/recognizers-date-time/src/datetime/baseDate.ts
Info 154  [00:03:59.000] event:
    {"seq":0,"type":"event","event":"projectsUpdatedInBackground","body":{"openFiles":["/users/username/projects/myproject/javascript/packages/recognizers-date-time/src/datetime/baseDate.ts"]}}
After running Timeout callback:: count: 1
15: checkOne

PolledWatches::
/users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules/@types:
  {"pollingInterval":500} *new*
/users/username/projects/myproject/javascript/packages/node_modules/@types:
  {"pollingInterval":500} *new*
/users/username/projects/myproject/javascript/node_modules/@types:
  {"pollingInterval":500} *new*
/users/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500} *new*
/users/username/projects/node_modules/@types:
  {"pollingInterval":500} *new*

PolledWatches *deleted*::
/users/username/projects/myproject/javascript/packages/recognizers-date-time/node_modules/@types:
  {"pollingInterval":500}
/users/username/projects/myproject/javascript/packages/node_modules/@types:
  {"pollingInterval":500}
/users/username/projects/myproject/javascript/node_modules/@types:
  {"pollingInterval":500}
/users/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/users/username/projects/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/users/username/projects/myproject/javascript/packages/recognizers-date-time/tsconfig.json:
  {}
/a/lib/lib.d.ts:
  {}
/users/username/projects/myproject/javascript/packages/recognizers-text/dist/types/recognizers-text.d.ts:
  {}
/users/username/projects/myproject/javascript/packages:
  {} *new*
/users/username/projects/myproject/javascript/packages/recognizers-text/package.json:
  {} *new*

FsWatches *deleted*::
/users/username/projects/myproject/javascript/packages:
  {}
/users/username/projects/myproject/javascript/packages/recognizers-text/package.json:
  {}

FsWatchesRecursive::
/users/username/projects/myproject/javascript/packages/recognizers-date-time/src:
  {}

Before running Timeout callback:: count: 1
15: checkOne

Info 155  [00:04:00.000] event:
    {"seq":0,"type":"event","event":"syntaxDiag","body":{"file":"/users/username/projects/myproject/javascript/packages/recognizers-date-time/src/datetime/baseDate.ts","diagnostics":[]}}
After running Timeout callback:: count: 0
