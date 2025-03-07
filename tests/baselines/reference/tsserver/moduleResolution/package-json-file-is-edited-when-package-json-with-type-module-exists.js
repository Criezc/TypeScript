currentDirectory:: / useCaseSensitiveFileNames: false
Info 0    [00:00:27.000] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request
//// [/user/username/projects/myproject/src/tsconfig.json]
{"compilerOptions":{"target":"es2016","module":"Node16","outDir":"../out","traceResolution":true}}

//// [/user/username/projects/myproject/src/fileA.ts]
import { foo } from "./fileB.mjs";
foo();


//// [/user/username/projects/myproject/src/fileB.mts]
export function foo() {
}


//// [/user/username/projects/myproject/package.json]
{"name":"app","version":"1.0.0","type":"module"}

//// [/a/lib/lib.es2016.full.d.ts]
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


Info 1    [00:00:28.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/src/fileA.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info 2    [00:00:29.000] Search path: /user/username/projects/myproject/src
Info 3    [00:00:30.000] For info: /user/username/projects/myproject/src/fileA.ts :: Config file name: /user/username/projects/myproject/src/tsconfig.json
Info 4    [00:00:31.000] Creating configuration project /user/username/projects/myproject/src/tsconfig.json
Info 5    [00:00:32.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/tsconfig.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: Config file
Info 6    [00:00:33.000] event:
    {"seq":0,"type":"event","event":"projectLoadingStart","body":{"projectName":"/user/username/projects/myproject/src/tsconfig.json","reason":"Creating possible configured project for /user/username/projects/myproject/src/fileA.ts to open"}}
Info 7    [00:00:34.000] Config: /user/username/projects/myproject/src/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/myproject/src/fileA.ts",
  "/user/username/projects/myproject/src/fileB.mts"
 ],
 "options": {
  "target": 3,
  "module": 100,
  "outDir": "/user/username/projects/myproject/out",
  "traceResolution": true,
  "configFilePath": "/user/username/projects/myproject/src/tsconfig.json"
 }
}
Info 8    [00:00:35.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src 1 undefined Config: /user/username/projects/myproject/src/tsconfig.json WatchType: Wild card directory
Info 9    [00:00:36.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src 1 undefined Config: /user/username/projects/myproject/src/tsconfig.json WatchType: Wild card directory
Info 10   [00:00:37.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/fileB.mts 500 undefined WatchType: Closed Script info
Info 11   [00:00:38.000] Starting updateGraphWorker: Project: /user/username/projects/myproject/src/tsconfig.json
Info 12   [00:00:39.000] File '/user/username/projects/myproject/src/package.json' does not exist.
Info 13   [00:00:40.000] Found 'package.json' at '/user/username/projects/myproject/package.json'.
Info 14   [00:00:41.000] ======== Resolving module './fileB.mjs' from '/user/username/projects/myproject/src/fileA.ts'. ========
Info 15   [00:00:42.000] Module resolution kind is not specified, using 'Node16'.
Info 16   [00:00:43.000] Resolving in ESM mode with conditions 'import', 'types', 'node'.
Info 17   [00:00:44.000] Loading module as file / folder, candidate module location '/user/username/projects/myproject/src/fileB.mjs', target file types: TypeScript, JavaScript, Declaration.
Info 18   [00:00:45.000] File name '/user/username/projects/myproject/src/fileB.mjs' has a '.mjs' extension - stripping it.
Info 19   [00:00:46.000] File '/user/username/projects/myproject/src/fileB.mts' exists - use it as a name resolution result.
Info 20   [00:00:47.000] ======== Module name './fileB.mjs' was successfully resolved to '/user/username/projects/myproject/src/fileB.mts'. ========
Info 21   [00:00:48.000] File '/a/lib/package.json' does not exist.
Info 22   [00:00:49.000] File '/a/package.json' does not exist.
Info 23   [00:00:50.000] File '/package.json' does not exist.
Info 24   [00:00:51.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.es2016.full.d.ts 500 undefined WatchType: Closed Script info
Info 25   [00:00:52.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Info 26   [00:00:53.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Info 27   [00:00:54.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/node_modules/@types 1 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: Type roots
Info 28   [00:00:55.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/node_modules/@types 1 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: Type roots
Info 29   [00:00:56.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: Type roots
Info 30   [00:00:57.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: Type roots
Info 31   [00:00:58.000] Finishing updateGraphWorker: Project: /user/username/projects/myproject/src/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 32   [00:00:59.000] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info 33   [00:01:00.000] 	Files (3)
	/a/lib/lib.es2016.full.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/src/fileB.mts Text-1 "export function foo() {\n}\n"
	/user/username/projects/myproject/src/fileA.ts SVC-1-0 "import { foo } from \"./fileB.mjs\";\nfoo();\n"


	../../../../../a/lib/lib.es2016.full.d.ts
	  Default library for target 'es2016'
	fileB.mts
	  Imported via "./fileB.mjs" from file 'fileA.ts'
	  Matched by default include pattern '**/*'
	fileA.ts
	  Matched by default include pattern '**/*'
	  File is ECMAScript module because '../package.json' has field "type" with value "module"

Info 34   [00:01:01.000] -----------------------------------------------
Info 35   [00:01:02.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/package.json 250 undefined WatchType: package.json file
Info 36   [00:01:03.000] event:
    {"seq":0,"type":"event","event":"projectLoadingFinish","body":{"projectName":"/user/username/projects/myproject/src/tsconfig.json"}}
Info 37   [00:01:04.000] event:
    {"seq":0,"type":"event","event":"telemetry","body":{"telemetryEventName":"projectInfo","payload":{"projectId":"f026568af42c61ce0537de8ee0fa07c9359a76dcfb046248ed49dc76c91e4a37","fileStats":{"js":0,"jsSize":0,"jsx":0,"jsxSize":0,"ts":2,"tsSize":68,"tsx":0,"tsxSize":0,"dts":1,"dtsSize":334,"deferred":0,"deferredSize":0},"compilerOptions":{"target":"es2016","module":"node16","outDir":"","traceResolution":true},"typeAcquisition":{"enable":false,"include":false,"exclude":false},"extends":false,"files":false,"include":false,"exclude":false,"compileOnSave":false,"configFileName":"tsconfig.json","projectType":"configured","languageServiceEnabled":true,"version":"FakeVersion"}}}
Info 38   [00:01:05.000] event:
    {"seq":0,"type":"event","event":"configFileDiag","body":{"triggerFile":"/user/username/projects/myproject/src/fileA.ts","configFile":"/user/username/projects/myproject/src/tsconfig.json","diagnostics":[]}}
Info 39   [00:01:06.000] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info 39   [00:01:07.000] 	Files (3)

Info 39   [00:01:08.000] -----------------------------------------------
Info 39   [00:01:09.000] Open files: 
Info 39   [00:01:10.000] 	FileName: /user/username/projects/myproject/src/fileA.ts ProjectRootPath: undefined
Info 39   [00:01:11.000] 		Projects: /user/username/projects/myproject/src/tsconfig.json
Info 39   [00:01:12.000] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/src/package.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/src/node_modules/@types: *new*
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/src/tsconfig.json: *new*
  {}
/user/username/projects/myproject/src/fileb.mts: *new*
  {}
/a/lib/lib.es2016.full.d.ts: *new*
  {}
/user/username/projects/myproject/package.json: *new*
  {}

FsWatchesRecursive::
/user/username/projects/myproject/src: *new*
  {}

Info 40   [00:01:13.000] Modify package json file to remove type module
Info 41   [00:01:17.000] FileWatcher:: Triggered with /user/username/projects/myproject/package.json 1:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Info 42   [00:01:18.000] Scheduled: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
Info 43   [00:01:19.000] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/package.json 1:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Info 44   [00:01:20.000] FileWatcher:: Triggered with /user/username/projects/myproject/package.json 1:: WatchInfo: /user/username/projects/myproject/package.json 250 undefined WatchType: package.json file
Info 45   [00:01:21.000] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/package.json 1:: WatchInfo: /user/username/projects/myproject/package.json 250 undefined WatchType: package.json file
Before running Timeout callback:: count: 1
1: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
//// [/user/username/projects/myproject/package.json]
{"name":"app","version":"1.0.0"}


Info 46   [00:01:22.000] Running: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
Info 47   [00:01:23.000] Scheduled: /user/username/projects/myproject/src/tsconfig.json
Info 48   [00:01:24.000] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2
2: /user/username/projects/myproject/src/tsconfig.json
3: *ensureProjectForOpenFiles*

Before running Timeout callback:: count: 2
2: /user/username/projects/myproject/src/tsconfig.json
3: *ensureProjectForOpenFiles*

Info 49   [00:01:25.000] Running: /user/username/projects/myproject/src/tsconfig.json
Info 50   [00:01:26.000] Starting updateGraphWorker: Project: /user/username/projects/myproject/src/tsconfig.json
Info 51   [00:01:27.000] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info 52   [00:01:28.000] File '/a/package.json' does not exist according to earlier cached lookups.
Info 53   [00:01:29.000] File '/package.json' does not exist according to earlier cached lookups.
Info 54   [00:01:30.000] File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
Info 55   [00:01:31.000] Found 'package.json' at '/user/username/projects/myproject/package.json'.
Info 56   [00:01:32.000] File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
Info 57   [00:01:33.000] File '/user/username/projects/myproject/package.json' exists according to earlier cached lookups.
Info 58   [00:01:34.000] ======== Resolving module './fileB.mjs' from '/user/username/projects/myproject/src/fileA.ts'. ========
Info 59   [00:01:35.000] Module resolution kind is not specified, using 'Node16'.
Info 60   [00:01:36.000] Resolving in CJS mode with conditions 'require', 'types', 'node'.
Info 61   [00:01:37.000] Loading module as file / folder, candidate module location '/user/username/projects/myproject/src/fileB.mjs', target file types: TypeScript, JavaScript, Declaration.
Info 62   [00:01:38.000] File name '/user/username/projects/myproject/src/fileB.mjs' has a '.mjs' extension - stripping it.
Info 63   [00:01:39.000] File '/user/username/projects/myproject/src/fileB.mts' exists - use it as a name resolution result.
Info 64   [00:01:40.000] ======== Module name './fileB.mjs' was successfully resolved to '/user/username/projects/myproject/src/fileB.mts'. ========
Info 65   [00:01:41.000] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info 66   [00:01:42.000] File '/a/package.json' does not exist according to earlier cached lookups.
Info 67   [00:01:43.000] File '/package.json' does not exist according to earlier cached lookups.
Info 68   [00:01:44.000] Finishing updateGraphWorker: Project: /user/username/projects/myproject/src/tsconfig.json Version: 2 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info 69   [00:01:45.000] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info 70   [00:01:46.000] 	Files (3)
	/a/lib/lib.es2016.full.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/src/fileB.mts Text-1 "export function foo() {\n}\n"
	/user/username/projects/myproject/src/fileA.ts SVC-1-0 "import { foo } from \"./fileB.mjs\";\nfoo();\n"

Info 71   [00:01:47.000] -----------------------------------------------
Info 72   [00:01:48.000] Running: *ensureProjectForOpenFiles*
Info 73   [00:01:49.000] Before ensureProjectForOpenFiles:
Info 74   [00:01:50.000] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info 74   [00:01:51.000] 	Files (3)

Info 74   [00:01:52.000] -----------------------------------------------
Info 74   [00:01:53.000] Open files: 
Info 74   [00:01:54.000] 	FileName: /user/username/projects/myproject/src/fileA.ts ProjectRootPath: undefined
Info 74   [00:01:55.000] 		Projects: /user/username/projects/myproject/src/tsconfig.json
Info 74   [00:01:56.000] After ensureProjectForOpenFiles:
Info 75   [00:01:57.000] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info 75   [00:01:58.000] 	Files (3)

Info 75   [00:01:59.000] -----------------------------------------------
Info 75   [00:02:00.000] Open files: 
Info 75   [00:02:01.000] 	FileName: /user/username/projects/myproject/src/fileA.ts ProjectRootPath: undefined
Info 75   [00:02:02.000] 		Projects: /user/username/projects/myproject/src/tsconfig.json
Info 75   [00:02:03.000] got projects updated in background, updating diagnostics for /user/username/projects/myproject/src/fileA.ts
Info 76   [00:02:04.000] event:
    {"seq":0,"type":"event","event":"projectsUpdatedInBackground","body":{"openFiles":["/user/username/projects/myproject/src/fileA.ts"]}}
After running Timeout callback:: count: 1
4: checkOne

Before request

Info 77   [00:02:05.000] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/user/username/projects/myproject/src/fileA.ts"
        ]
      },
      "seq": 2,
      "type": "request"
    }
Info 78   [00:02:06.000] response:
    {
      "responseRequired": false
    }
After request

Before running Timeout callback:: count: 1
5: checkOne

Info 79   [00:02:07.000] event:
    {"seq":0,"type":"event","event":"syntaxDiag","body":{"file":"/user/username/projects/myproject/src/fileA.ts","diagnostics":[]}}
After running Timeout callback:: count: 0

Before running Immedidate callback:: count: 1
1: semanticCheck

Info 80   [00:02:08.000] event:
    {"seq":0,"type":"event","event":"semanticDiag","body":{"file":"/user/username/projects/myproject/src/fileA.ts","diagnostics":[{"start":{"line":1,"offset":21},"end":{"line":1,"offset":34},"text":"The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import(\"./fileB.mjs\")' call instead.\n  To convert this file to an ECMAScript module, change its file extension to '.mts', or add the field `\"type\": \"module\"` to '/user/username/projects/myproject/package.json'.","code":1479,"category":"error"}]}}
After running Immedidate callback:: count: 1
2: suggestionCheck

Before running Immedidate callback:: count: 1
2: suggestionCheck

Info 81   [00:02:09.000] event:
    {"seq":0,"type":"event","event":"suggestionDiag","body":{"file":"/user/username/projects/myproject/src/fileA.ts","diagnostics":[]}}
Info 82   [00:02:10.000] event:
    {"seq":0,"type":"event","event":"requestCompleted","body":{"request_seq":2}}
After running Immedidate callback:: count: 0

Info 83   [00:02:11.000] Modify package json file to add type module
Info 84   [00:02:15.000] FileWatcher:: Triggered with /user/username/projects/myproject/package.json 1:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Info 85   [00:02:16.000] Scheduled: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
Info 86   [00:02:17.000] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/package.json 1:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Info 87   [00:02:18.000] FileWatcher:: Triggered with /user/username/projects/myproject/package.json 1:: WatchInfo: /user/username/projects/myproject/package.json 250 undefined WatchType: package.json file
Info 88   [00:02:19.000] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/package.json 1:: WatchInfo: /user/username/projects/myproject/package.json 250 undefined WatchType: package.json file
Before running Timeout callback:: count: 1
6: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
//// [/user/username/projects/myproject/package.json]
{"name":"app","version":"1.0.0","type":"module"}


Info 89   [00:02:20.000] Running: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
Info 90   [00:02:21.000] Scheduled: /user/username/projects/myproject/src/tsconfig.json
Info 91   [00:02:22.000] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2
7: /user/username/projects/myproject/src/tsconfig.json
8: *ensureProjectForOpenFiles*

Before running Timeout callback:: count: 2
7: /user/username/projects/myproject/src/tsconfig.json
8: *ensureProjectForOpenFiles*

Info 92   [00:02:23.000] Running: /user/username/projects/myproject/src/tsconfig.json
Info 93   [00:02:24.000] Starting updateGraphWorker: Project: /user/username/projects/myproject/src/tsconfig.json
Info 94   [00:02:25.000] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info 95   [00:02:26.000] File '/a/package.json' does not exist according to earlier cached lookups.
Info 96   [00:02:27.000] File '/package.json' does not exist according to earlier cached lookups.
Info 97   [00:02:28.000] File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
Info 98   [00:02:29.000] Found 'package.json' at '/user/username/projects/myproject/package.json'.
Info 99   [00:02:30.000] File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
Info 100  [00:02:31.000] File '/user/username/projects/myproject/package.json' exists according to earlier cached lookups.
Info 101  [00:02:32.000] ======== Resolving module './fileB.mjs' from '/user/username/projects/myproject/src/fileA.ts'. ========
Info 102  [00:02:33.000] Module resolution kind is not specified, using 'Node16'.
Info 103  [00:02:34.000] Resolving in ESM mode with conditions 'import', 'types', 'node'.
Info 104  [00:02:35.000] Loading module as file / folder, candidate module location '/user/username/projects/myproject/src/fileB.mjs', target file types: TypeScript, JavaScript, Declaration.
Info 105  [00:02:36.000] File name '/user/username/projects/myproject/src/fileB.mjs' has a '.mjs' extension - stripping it.
Info 106  [00:02:37.000] File '/user/username/projects/myproject/src/fileB.mts' exists - use it as a name resolution result.
Info 107  [00:02:38.000] ======== Module name './fileB.mjs' was successfully resolved to '/user/username/projects/myproject/src/fileB.mts'. ========
Info 108  [00:02:39.000] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info 109  [00:02:40.000] File '/a/package.json' does not exist according to earlier cached lookups.
Info 110  [00:02:41.000] File '/package.json' does not exist according to earlier cached lookups.
Info 111  [00:02:42.000] Finishing updateGraphWorker: Project: /user/username/projects/myproject/src/tsconfig.json Version: 3 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info 112  [00:02:43.000] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info 113  [00:02:44.000] 	Files (3)
	/a/lib/lib.es2016.full.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/src/fileB.mts Text-1 "export function foo() {\n}\n"
	/user/username/projects/myproject/src/fileA.ts SVC-1-0 "import { foo } from \"./fileB.mjs\";\nfoo();\n"

Info 114  [00:02:45.000] -----------------------------------------------
Info 115  [00:02:46.000] Running: *ensureProjectForOpenFiles*
Info 116  [00:02:47.000] Before ensureProjectForOpenFiles:
Info 117  [00:02:48.000] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info 117  [00:02:49.000] 	Files (3)

Info 117  [00:02:50.000] -----------------------------------------------
Info 117  [00:02:51.000] Open files: 
Info 117  [00:02:52.000] 	FileName: /user/username/projects/myproject/src/fileA.ts ProjectRootPath: undefined
Info 117  [00:02:53.000] 		Projects: /user/username/projects/myproject/src/tsconfig.json
Info 117  [00:02:54.000] After ensureProjectForOpenFiles:
Info 118  [00:02:55.000] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info 118  [00:02:56.000] 	Files (3)

Info 118  [00:02:57.000] -----------------------------------------------
Info 118  [00:02:58.000] Open files: 
Info 118  [00:02:59.000] 	FileName: /user/username/projects/myproject/src/fileA.ts ProjectRootPath: undefined
Info 118  [00:03:00.000] 		Projects: /user/username/projects/myproject/src/tsconfig.json
Info 118  [00:03:01.000] got projects updated in background, updating diagnostics for /user/username/projects/myproject/src/fileA.ts
Info 119  [00:03:02.000] event:
    {"seq":0,"type":"event","event":"projectsUpdatedInBackground","body":{"openFiles":["/user/username/projects/myproject/src/fileA.ts"]}}
After running Timeout callback:: count: 1
9: checkOne

Before request

Info 120  [00:03:03.000] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/user/username/projects/myproject/src/fileA.ts"
        ]
      },
      "seq": 3,
      "type": "request"
    }
Info 121  [00:03:04.000] response:
    {
      "responseRequired": false
    }
After request

Before running Timeout callback:: count: 1
10: checkOne

Info 122  [00:03:05.000] event:
    {"seq":0,"type":"event","event":"syntaxDiag","body":{"file":"/user/username/projects/myproject/src/fileA.ts","diagnostics":[]}}
After running Timeout callback:: count: 0

Before running Immedidate callback:: count: 1
3: semanticCheck

Info 123  [00:03:06.000] event:
    {"seq":0,"type":"event","event":"semanticDiag","body":{"file":"/user/username/projects/myproject/src/fileA.ts","diagnostics":[]}}
After running Immedidate callback:: count: 1
4: suggestionCheck

Before running Immedidate callback:: count: 1
4: suggestionCheck

Info 124  [00:03:07.000] event:
    {"seq":0,"type":"event","event":"suggestionDiag","body":{"file":"/user/username/projects/myproject/src/fileA.ts","diagnostics":[]}}
Info 125  [00:03:08.000] event:
    {"seq":0,"type":"event","event":"requestCompleted","body":{"request_seq":3}}
After running Immedidate callback:: count: 0

Info 126  [00:03:09.000] Delete package.json
Info 127  [00:03:11.000] FileWatcher:: Triggered with /user/username/projects/myproject/package.json 2:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Info 128  [00:03:12.000] Scheduled: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
Info 129  [00:03:13.000] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/package.json 2:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Info 130  [00:03:14.000] FileWatcher:: Triggered with /user/username/projects/myproject/package.json 2:: WatchInfo: /user/username/projects/myproject/package.json 250 undefined WatchType: package.json file
Info 131  [00:03:15.000] FileWatcher:: Close:: WatchInfo: /user/username/projects/myproject/package.json 250 undefined WatchType: package.json file
Info 132  [00:03:16.000] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/package.json 2:: WatchInfo: /user/username/projects/myproject/package.json 250 undefined WatchType: package.json file
Before running Timeout callback:: count: 1
11: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
//// [/user/username/projects/myproject/package.json] deleted

Info 133  [00:03:17.000] Running: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
Info 134  [00:03:18.000] Scheduled: /user/username/projects/myproject/src/tsconfig.json
Info 135  [00:03:19.000] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2
12: /user/username/projects/myproject/src/tsconfig.json
13: *ensureProjectForOpenFiles*

Before running Timeout callback:: count: 2
12: /user/username/projects/myproject/src/tsconfig.json
13: *ensureProjectForOpenFiles*

Info 136  [00:03:20.000] Running: /user/username/projects/myproject/src/tsconfig.json
Info 137  [00:03:21.000] Starting updateGraphWorker: Project: /user/username/projects/myproject/src/tsconfig.json
Info 138  [00:03:22.000] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info 139  [00:03:23.000] File '/a/package.json' does not exist according to earlier cached lookups.
Info 140  [00:03:24.000] File '/package.json' does not exist according to earlier cached lookups.
Info 141  [00:03:25.000] File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
Info 142  [00:03:26.000] File '/user/username/projects/myproject/package.json' does not exist.
Info 143  [00:03:27.000] File '/user/username/projects/package.json' does not exist.
Info 144  [00:03:28.000] File '/user/username/package.json' does not exist.
Info 145  [00:03:29.000] File '/user/package.json' does not exist.
Info 146  [00:03:30.000] File '/package.json' does not exist according to earlier cached lookups.
Info 147  [00:03:31.000] File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
Info 148  [00:03:32.000] File '/user/username/projects/myproject/package.json' does not exist according to earlier cached lookups.
Info 149  [00:03:33.000] File '/user/username/projects/package.json' does not exist according to earlier cached lookups.
Info 150  [00:03:34.000] File '/user/username/package.json' does not exist according to earlier cached lookups.
Info 151  [00:03:35.000] File '/user/package.json' does not exist according to earlier cached lookups.
Info 152  [00:03:36.000] File '/package.json' does not exist according to earlier cached lookups.
Info 153  [00:03:37.000] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info 154  [00:03:38.000] File '/a/package.json' does not exist according to earlier cached lookups.
Info 155  [00:03:39.000] File '/package.json' does not exist according to earlier cached lookups.
Info 156  [00:03:40.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Info 157  [00:03:41.000] Finishing updateGraphWorker: Project: /user/username/projects/myproject/src/tsconfig.json Version: 4 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info 158  [00:03:42.000] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info 159  [00:03:43.000] 	Files (3)
	/a/lib/lib.es2016.full.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/src/fileB.mts Text-1 "export function foo() {\n}\n"
	/user/username/projects/myproject/src/fileA.ts SVC-1-0 "import { foo } from \"./fileB.mjs\";\nfoo();\n"

Info 160  [00:03:44.000] -----------------------------------------------
Info 161  [00:03:45.000] Running: *ensureProjectForOpenFiles*
Info 162  [00:03:46.000] Before ensureProjectForOpenFiles:
Info 163  [00:03:47.000] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info 163  [00:03:48.000] 	Files (3)

Info 163  [00:03:49.000] -----------------------------------------------
Info 163  [00:03:50.000] Open files: 
Info 163  [00:03:51.000] 	FileName: /user/username/projects/myproject/src/fileA.ts ProjectRootPath: undefined
Info 163  [00:03:52.000] 		Projects: /user/username/projects/myproject/src/tsconfig.json
Info 163  [00:03:53.000] After ensureProjectForOpenFiles:
Info 164  [00:03:54.000] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info 164  [00:03:55.000] 	Files (3)

Info 164  [00:03:56.000] -----------------------------------------------
Info 164  [00:03:57.000] Open files: 
Info 164  [00:03:58.000] 	FileName: /user/username/projects/myproject/src/fileA.ts ProjectRootPath: undefined
Info 164  [00:03:59.000] 		Projects: /user/username/projects/myproject/src/tsconfig.json
Info 164  [00:04:00.000] got projects updated in background, updating diagnostics for /user/username/projects/myproject/src/fileA.ts
Info 165  [00:04:01.000] event:
    {"seq":0,"type":"event","event":"projectsUpdatedInBackground","body":{"openFiles":["/user/username/projects/myproject/src/fileA.ts"]}}
After running Timeout callback:: count: 1
14: checkOne

PolledWatches::
/user/username/projects/myproject/src/package.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/src/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/package.json: *new*
  {"pollingInterval":2000}

FsWatches::
/user/username/projects/myproject/src/tsconfig.json:
  {}
/user/username/projects/myproject/src/fileb.mts:
  {}
/a/lib/lib.es2016.full.d.ts:
  {}
/user/username/projects/myproject/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/src:
  {}

Before request

Info 166  [00:04:02.000] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/user/username/projects/myproject/src/fileA.ts"
        ]
      },
      "seq": 4,
      "type": "request"
    }
Info 167  [00:04:03.000] response:
    {
      "responseRequired": false
    }
After request

Before running Timeout callback:: count: 1
15: checkOne

Info 168  [00:04:04.000] event:
    {"seq":0,"type":"event","event":"syntaxDiag","body":{"file":"/user/username/projects/myproject/src/fileA.ts","diagnostics":[]}}
After running Timeout callback:: count: 0

Before running Immedidate callback:: count: 1
5: semanticCheck

Info 169  [00:04:05.000] event:
    {"seq":0,"type":"event","event":"semanticDiag","body":{"file":"/user/username/projects/myproject/src/fileA.ts","diagnostics":[{"start":{"line":1,"offset":21},"end":{"line":1,"offset":34},"text":"The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import(\"./fileB.mjs\")' call instead.\n  To convert this file to an ECMAScript module, change its file extension to '.mts' or create a local package.json file with `{ \"type\": \"module\" }`.","code":1479,"category":"error"}]}}
After running Immedidate callback:: count: 1
6: suggestionCheck

Before running Immedidate callback:: count: 1
6: suggestionCheck

Info 170  [00:04:06.000] event:
    {"seq":0,"type":"event","event":"suggestionDiag","body":{"file":"/user/username/projects/myproject/src/fileA.ts","diagnostics":[]}}
Info 171  [00:04:07.000] event:
    {"seq":0,"type":"event","event":"requestCompleted","body":{"request_seq":4}}
After running Immedidate callback:: count: 0

Info 172  [00:04:08.000] Modify package json file to without type module
Info 173  [00:04:11.000] FileWatcher:: Triggered with /user/username/projects/myproject/package.json 0:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Info 174  [00:04:12.000] Scheduled: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
Info 175  [00:04:13.000] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/package.json 0:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Before running Timeout callback:: count: 1
16: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
//// [/user/username/projects/myproject/package.json]
{"name":"app","version":"1.0.0"}


Info 176  [00:04:14.000] Running: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
Info 177  [00:04:15.000] Scheduled: /user/username/projects/myproject/src/tsconfig.json
Info 178  [00:04:16.000] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2
17: /user/username/projects/myproject/src/tsconfig.json
18: *ensureProjectForOpenFiles*

Before running Timeout callback:: count: 2
17: /user/username/projects/myproject/src/tsconfig.json
18: *ensureProjectForOpenFiles*

Info 179  [00:04:17.000] Running: /user/username/projects/myproject/src/tsconfig.json
Info 180  [00:04:18.000] Starting updateGraphWorker: Project: /user/username/projects/myproject/src/tsconfig.json
Info 181  [00:04:19.000] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info 182  [00:04:20.000] File '/a/package.json' does not exist according to earlier cached lookups.
Info 183  [00:04:21.000] File '/package.json' does not exist according to earlier cached lookups.
Info 184  [00:04:22.000] File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
Info 185  [00:04:23.000] Found 'package.json' at '/user/username/projects/myproject/package.json'.
Info 186  [00:04:24.000] File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
Info 187  [00:04:25.000] File '/user/username/projects/myproject/package.json' exists according to earlier cached lookups.
Info 188  [00:04:26.000] ======== Resolving module './fileB.mjs' from '/user/username/projects/myproject/src/fileA.ts'. ========
Info 189  [00:04:27.000] Module resolution kind is not specified, using 'Node16'.
Info 190  [00:04:28.000] Resolving in CJS mode with conditions 'require', 'types', 'node'.
Info 191  [00:04:29.000] Loading module as file / folder, candidate module location '/user/username/projects/myproject/src/fileB.mjs', target file types: TypeScript, JavaScript, Declaration.
Info 192  [00:04:30.000] File name '/user/username/projects/myproject/src/fileB.mjs' has a '.mjs' extension - stripping it.
Info 193  [00:04:31.000] File '/user/username/projects/myproject/src/fileB.mts' exists - use it as a name resolution result.
Info 194  [00:04:32.000] ======== Module name './fileB.mjs' was successfully resolved to '/user/username/projects/myproject/src/fileB.mts'. ========
Info 195  [00:04:33.000] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info 196  [00:04:34.000] File '/a/package.json' does not exist according to earlier cached lookups.
Info 197  [00:04:35.000] File '/package.json' does not exist according to earlier cached lookups.
Info 198  [00:04:36.000] FileWatcher:: Close:: WatchInfo: /user/username/projects/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Info 199  [00:04:37.000] Finishing updateGraphWorker: Project: /user/username/projects/myproject/src/tsconfig.json Version: 5 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info 200  [00:04:38.000] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info 201  [00:04:39.000] 	Files (3)
	/a/lib/lib.es2016.full.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/src/fileB.mts Text-1 "export function foo() {\n}\n"
	/user/username/projects/myproject/src/fileA.ts SVC-1-0 "import { foo } from \"./fileB.mjs\";\nfoo();\n"

Info 202  [00:04:40.000] -----------------------------------------------
Info 203  [00:04:41.000] Running: *ensureProjectForOpenFiles*
Info 204  [00:04:42.000] Before ensureProjectForOpenFiles:
Info 205  [00:04:43.000] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info 205  [00:04:44.000] 	Files (3)

Info 205  [00:04:45.000] -----------------------------------------------
Info 205  [00:04:46.000] Open files: 
Info 205  [00:04:47.000] 	FileName: /user/username/projects/myproject/src/fileA.ts ProjectRootPath: undefined
Info 205  [00:04:48.000] 		Projects: /user/username/projects/myproject/src/tsconfig.json
Info 205  [00:04:49.000] After ensureProjectForOpenFiles:
Info 206  [00:04:50.000] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info 206  [00:04:51.000] 	Files (3)

Info 206  [00:04:52.000] -----------------------------------------------
Info 206  [00:04:53.000] Open files: 
Info 206  [00:04:54.000] 	FileName: /user/username/projects/myproject/src/fileA.ts ProjectRootPath: undefined
Info 206  [00:04:55.000] 		Projects: /user/username/projects/myproject/src/tsconfig.json
Info 206  [00:04:56.000] got projects updated in background, updating diagnostics for /user/username/projects/myproject/src/fileA.ts
Info 207  [00:04:57.000] event:
    {"seq":0,"type":"event","event":"projectsUpdatedInBackground","body":{"openFiles":["/user/username/projects/myproject/src/fileA.ts"]}}
After running Timeout callback:: count: 1
19: checkOne

PolledWatches::
/user/username/projects/myproject/src/package.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/src/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}

PolledWatches *deleted*::
/user/username/projects/package.json:
  {"pollingInterval":2000}

FsWatches::
/user/username/projects/myproject/src/tsconfig.json:
  {}
/user/username/projects/myproject/src/fileb.mts:
  {}
/a/lib/lib.es2016.full.d.ts:
  {}
/user/username/projects/myproject/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/src:
  {}

Before request

Info 208  [00:04:58.000] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/user/username/projects/myproject/src/fileA.ts"
        ]
      },
      "seq": 5,
      "type": "request"
    }
Info 209  [00:04:59.000] response:
    {
      "responseRequired": false
    }
After request

Before running Timeout callback:: count: 1
20: checkOne

Info 210  [00:05:00.000] event:
    {"seq":0,"type":"event","event":"syntaxDiag","body":{"file":"/user/username/projects/myproject/src/fileA.ts","diagnostics":[]}}
After running Timeout callback:: count: 0

Before running Immedidate callback:: count: 1
7: semanticCheck

Info 211  [00:05:01.000] event:
    {"seq":0,"type":"event","event":"semanticDiag","body":{"file":"/user/username/projects/myproject/src/fileA.ts","diagnostics":[{"start":{"line":1,"offset":21},"end":{"line":1,"offset":34},"text":"The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import(\"./fileB.mjs\")' call instead.\n  To convert this file to an ECMAScript module, change its file extension to '.mts', or add the field `\"type\": \"module\"` to '/user/username/projects/myproject/package.json'.","code":1479,"category":"error"}]}}
After running Immedidate callback:: count: 1
8: suggestionCheck

Before running Immedidate callback:: count: 1
8: suggestionCheck

Info 212  [00:05:02.000] event:
    {"seq":0,"type":"event","event":"suggestionDiag","body":{"file":"/user/username/projects/myproject/src/fileA.ts","diagnostics":[]}}
Info 213  [00:05:03.000] event:
    {"seq":0,"type":"event","event":"requestCompleted","body":{"request_seq":5}}
After running Immedidate callback:: count: 0

Info 214  [00:05:04.000] Delete package.json
Info 215  [00:05:06.000] FileWatcher:: Triggered with /user/username/projects/myproject/package.json 2:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Info 216  [00:05:07.000] Scheduled: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
Info 217  [00:05:08.000] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/myproject/package.json 2:: WatchInfo: /user/username/projects/myproject/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Before running Timeout callback:: count: 1
21: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
//// [/user/username/projects/myproject/package.json] deleted

Info 218  [00:05:09.000] Running: /user/username/projects/myproject/src/tsconfig.jsonFailedLookupInvalidation
Info 219  [00:05:10.000] Scheduled: /user/username/projects/myproject/src/tsconfig.json
Info 220  [00:05:11.000] Scheduled: *ensureProjectForOpenFiles*
After running Timeout callback:: count: 2
22: /user/username/projects/myproject/src/tsconfig.json
23: *ensureProjectForOpenFiles*

Before running Timeout callback:: count: 2
22: /user/username/projects/myproject/src/tsconfig.json
23: *ensureProjectForOpenFiles*

Info 221  [00:05:12.000] Running: /user/username/projects/myproject/src/tsconfig.json
Info 222  [00:05:13.000] Starting updateGraphWorker: Project: /user/username/projects/myproject/src/tsconfig.json
Info 223  [00:05:14.000] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info 224  [00:05:15.000] File '/a/package.json' does not exist according to earlier cached lookups.
Info 225  [00:05:16.000] File '/package.json' does not exist according to earlier cached lookups.
Info 226  [00:05:17.000] File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
Info 227  [00:05:18.000] File '/user/username/projects/myproject/package.json' does not exist.
Info 228  [00:05:19.000] File '/user/username/projects/package.json' does not exist according to earlier cached lookups.
Info 229  [00:05:20.000] File '/user/username/package.json' does not exist according to earlier cached lookups.
Info 230  [00:05:21.000] File '/user/package.json' does not exist according to earlier cached lookups.
Info 231  [00:05:22.000] File '/package.json' does not exist according to earlier cached lookups.
Info 232  [00:05:23.000] File '/user/username/projects/myproject/src/package.json' does not exist according to earlier cached lookups.
Info 233  [00:05:24.000] File '/user/username/projects/myproject/package.json' does not exist according to earlier cached lookups.
Info 234  [00:05:25.000] File '/user/username/projects/package.json' does not exist according to earlier cached lookups.
Info 235  [00:05:26.000] File '/user/username/package.json' does not exist according to earlier cached lookups.
Info 236  [00:05:27.000] File '/user/package.json' does not exist according to earlier cached lookups.
Info 237  [00:05:28.000] File '/package.json' does not exist according to earlier cached lookups.
Info 238  [00:05:29.000] Reusing resolution of module './fileB.mjs' from '/user/username/projects/myproject/src/fileA.ts' of old program, it was successfully resolved to '/user/username/projects/myproject/src/fileB.mts'.
Info 239  [00:05:30.000] File '/a/lib/package.json' does not exist according to earlier cached lookups.
Info 240  [00:05:31.000] File '/a/package.json' does not exist according to earlier cached lookups.
Info 241  [00:05:32.000] File '/package.json' does not exist according to earlier cached lookups.
Info 242  [00:05:33.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/package.json 2000 undefined Project: /user/username/projects/myproject/src/tsconfig.json WatchType: File location affecting resolution
Info 243  [00:05:34.000] Finishing updateGraphWorker: Project: /user/username/projects/myproject/src/tsconfig.json Version: 6 structureChanged: true structureIsReused:: SafeModules Elapsed:: *ms
Info 244  [00:05:35.000] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info 245  [00:05:36.000] 	Files (3)
	/a/lib/lib.es2016.full.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/src/fileB.mts Text-1 "export function foo() {\n}\n"
	/user/username/projects/myproject/src/fileA.ts SVC-1-0 "import { foo } from \"./fileB.mjs\";\nfoo();\n"

Info 246  [00:05:37.000] -----------------------------------------------
Info 247  [00:05:38.000] Running: *ensureProjectForOpenFiles*
Info 248  [00:05:39.000] Before ensureProjectForOpenFiles:
Info 249  [00:05:40.000] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info 249  [00:05:41.000] 	Files (3)

Info 249  [00:05:42.000] -----------------------------------------------
Info 249  [00:05:43.000] Open files: 
Info 249  [00:05:44.000] 	FileName: /user/username/projects/myproject/src/fileA.ts ProjectRootPath: undefined
Info 249  [00:05:45.000] 		Projects: /user/username/projects/myproject/src/tsconfig.json
Info 249  [00:05:46.000] After ensureProjectForOpenFiles:
Info 250  [00:05:47.000] Project '/user/username/projects/myproject/src/tsconfig.json' (Configured)
Info 250  [00:05:48.000] 	Files (3)

Info 250  [00:05:49.000] -----------------------------------------------
Info 250  [00:05:50.000] Open files: 
Info 250  [00:05:51.000] 	FileName: /user/username/projects/myproject/src/fileA.ts ProjectRootPath: undefined
Info 250  [00:05:52.000] 		Projects: /user/username/projects/myproject/src/tsconfig.json
Info 250  [00:05:53.000] got projects updated in background, updating diagnostics for /user/username/projects/myproject/src/fileA.ts
Info 251  [00:05:54.000] event:
    {"seq":0,"type":"event","event":"projectsUpdatedInBackground","body":{"openFiles":["/user/username/projects/myproject/src/fileA.ts"]}}
After running Timeout callback:: count: 1
24: checkOne

PolledWatches::
/user/username/projects/myproject/src/package.json:
  {"pollingInterval":2000}
/user/username/projects/myproject/src/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/myproject/node_modules/@types:
  {"pollingInterval":500}
/user/username/projects/package.json: *new*
  {"pollingInterval":2000}

FsWatches::
/user/username/projects/myproject/src/tsconfig.json:
  {}
/user/username/projects/myproject/src/fileb.mts:
  {}
/a/lib/lib.es2016.full.d.ts:
  {}
/user/username/projects/myproject/package.json:
  {}

FsWatchesRecursive::
/user/username/projects/myproject/src:
  {}

Before request

Info 252  [00:05:55.000] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/user/username/projects/myproject/src/fileA.ts"
        ]
      },
      "seq": 6,
      "type": "request"
    }
Info 253  [00:05:56.000] response:
    {
      "responseRequired": false
    }
After request

Before running Timeout callback:: count: 1
25: checkOne

Info 254  [00:05:57.000] event:
    {"seq":0,"type":"event","event":"syntaxDiag","body":{"file":"/user/username/projects/myproject/src/fileA.ts","diagnostics":[]}}
After running Timeout callback:: count: 0

Before running Immedidate callback:: count: 1
9: semanticCheck

Info 255  [00:05:58.000] event:
    {"seq":0,"type":"event","event":"semanticDiag","body":{"file":"/user/username/projects/myproject/src/fileA.ts","diagnostics":[{"start":{"line":1,"offset":21},"end":{"line":1,"offset":34},"text":"The current file is a CommonJS module whose imports will produce 'require' calls; however, the referenced file is an ECMAScript module and cannot be imported with 'require'. Consider writing a dynamic 'import(\"./fileB.mjs\")' call instead.\n  To convert this file to an ECMAScript module, change its file extension to '.mts' or create a local package.json file with `{ \"type\": \"module\" }`.","code":1479,"category":"error"}]}}
After running Immedidate callback:: count: 1
10: suggestionCheck

Before running Immedidate callback:: count: 1
10: suggestionCheck

Info 256  [00:05:59.000] event:
    {"seq":0,"type":"event","event":"suggestionDiag","body":{"file":"/user/username/projects/myproject/src/fileA.ts","diagnostics":[]}}
Info 257  [00:06:00.000] event:
    {"seq":0,"type":"event","event":"requestCompleted","body":{"request_seq":6}}
After running Immedidate callback:: count: 0
