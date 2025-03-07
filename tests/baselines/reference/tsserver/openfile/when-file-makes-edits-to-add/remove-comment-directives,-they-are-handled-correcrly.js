currentDirectory:: / useCaseSensitiveFileNames: false
Info 0    [00:00:19.000] Provided types map file "/a/lib/typesMap.json" doesn't exist
Before request
//// [/user/username/projects/myproject/file.ts]
const x = 10;
function foo() {
    // @ts-ignore
    let y: string = x;
    return y;
}
function bar() {
    // @ts-ignore
    let z : string = x;
    return z;
}
foo();
bar();

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


Info 1    [00:00:20.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/myproject/file.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info 2    [00:00:21.000] Search path: /user/username/projects/myproject
Info 3    [00:00:22.000] For info: /user/username/projects/myproject/file.ts :: No config files found.
Info 4    [00:00:23.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info 5    [00:00:24.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info 6    [00:00:25.000] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info 7    [00:00:26.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info 8    [00:00:27.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 9    [00:00:28.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 undefined Project: /dev/null/inferredProject1* WatchType: Type roots
Info 10   [00:00:29.000] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 11   [00:00:30.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 12   [00:00:31.000] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/file.ts SVC-1-0 "const x = 10;\nfunction foo() {\n    // @ts-ignore\n    let y: string = x;\n    return y;\n}\nfunction bar() {\n    // @ts-ignore\n    let z : string = x;\n    return z;\n}\nfoo();\nbar();"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	file.ts
	  Root file specified for compilation

Info 13   [00:00:32.000] -----------------------------------------------
Info 14   [00:00:33.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 14   [00:00:34.000] 	Files (2)

Info 14   [00:00:35.000] -----------------------------------------------
Info 14   [00:00:36.000] Open files: 
Info 14   [00:00:37.000] 	FileName: /user/username/projects/myproject/file.ts ProjectRootPath: undefined
Info 14   [00:00:38.000] 		Projects: /dev/null/inferredProject1*
Info 14   [00:00:39.000] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/myproject/tsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/jsconfig.json: *new*
  {"pollingInterval":2000}
/user/username/projects/myproject/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/a/lib/lib.d.ts: *new*
  {}

Before request

Info 15   [00:00:40.000] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/user/username/projects/myproject/file.ts"
        ]
      },
      "seq": 2,
      "type": "request"
    }
Info 16   [00:00:41.000] response:
    {
      "responseRequired": false
    }
After request

Before running Timeout callback:: count: 1
1: checkOne

Info 17   [00:00:42.000] event:
    {"seq":0,"type":"event","event":"syntaxDiag","body":{"file":"/user/username/projects/myproject/file.ts","diagnostics":[]}}
After running Timeout callback:: count: 0

Before running Immedidate callback:: count: 1
1: semanticCheck

Info 18   [00:00:43.000] event:
    {"seq":0,"type":"event","event":"semanticDiag","body":{"file":"/user/username/projects/myproject/file.ts","diagnostics":[]}}
After running Immedidate callback:: count: 1
2: suggestionCheck

Before running Immedidate callback:: count: 1
2: suggestionCheck

Info 19   [00:00:44.000] event:
    {"seq":0,"type":"event","event":"suggestionDiag","body":{"file":"/user/username/projects/myproject/file.ts","diagnostics":[]}}
Info 20   [00:00:45.000] event:
    {"seq":0,"type":"event","event":"requestCompleted","body":{"request_seq":2}}
After running Immedidate callback:: count: 0

Before request

Info 21   [00:00:46.000] request:
    {
      "command": "updateOpen",
      "arguments": {
        "changedFiles": [
          {
            "fileName": "/user/username/projects/myproject/file.ts",
            "textChanges": [
              {
                "newText": "             ",
                "start": {
                  "line": 3,
                  "offset": 5
                },
                "end": {
                  "line": 3,
                  "offset": 18
                }
              }
            ]
          }
        ]
      },
      "seq": 3,
      "type": "request"
    }
Info 22   [00:00:47.000] response:
    {
      "response": true,
      "responseRequired": true
    }
After request

Before request

Info 23   [00:00:48.000] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/user/username/projects/myproject/file.ts"
        ]
      },
      "seq": 4,
      "type": "request"
    }
Info 24   [00:00:49.000] response:
    {
      "responseRequired": false
    }
After request

Before running Timeout callback:: count: 1
2: checkOne

Info 25   [00:00:50.000] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info 26   [00:00:51.000] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* Version: 2 structureChanged: false structureIsReused:: Completely Elapsed:: *ms
Info 27   [00:00:52.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 28   [00:00:53.000] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/file.ts SVC-1-1 "const x = 10;\nfunction foo() {\n                 \n    let y: string = x;\n    return y;\n}\nfunction bar() {\n    // @ts-ignore\n    let z : string = x;\n    return z;\n}\nfoo();\nbar();"

Info 29   [00:00:54.000] -----------------------------------------------
Info 30   [00:00:55.000] event:
    {"seq":0,"type":"event","event":"syntaxDiag","body":{"file":"/user/username/projects/myproject/file.ts","diagnostics":[]}}
After running Timeout callback:: count: 0

Before running Immedidate callback:: count: 1
3: semanticCheck

Info 31   [00:00:56.000] event:
    {"seq":0,"type":"event","event":"semanticDiag","body":{"file":"/user/username/projects/myproject/file.ts","diagnostics":[{"start":{"line":4,"offset":9},"end":{"line":4,"offset":10},"text":"Type 'number' is not assignable to type 'string'.","code":2322,"category":"error"}]}}
After running Immedidate callback:: count: 1
4: suggestionCheck

Before running Immedidate callback:: count: 1
4: suggestionCheck

Info 32   [00:00:57.000] event:
    {"seq":0,"type":"event","event":"suggestionDiag","body":{"file":"/user/username/projects/myproject/file.ts","diagnostics":[]}}
Info 33   [00:00:58.000] event:
    {"seq":0,"type":"event","event":"requestCompleted","body":{"request_seq":4}}
After running Immedidate callback:: count: 0

Before request

Info 34   [00:00:59.000] request:
    {
      "command": "updateOpen",
      "arguments": {
        "changedFiles": [
          {
            "fileName": "/user/username/projects/myproject/file.ts",
            "textChanges": [
              {
                "newText": "// @ts-ignore",
                "start": {
                  "line": 3,
                  "offset": 5
                },
                "end": {
                  "line": 3,
                  "offset": 18
                }
              }
            ]
          }
        ]
      },
      "seq": 5,
      "type": "request"
    }
Info 35   [00:01:00.000] response:
    {
      "response": true,
      "responseRequired": true
    }
After request

Before request

Info 36   [00:01:01.000] request:
    {
      "command": "geterr",
      "arguments": {
        "delay": 0,
        "files": [
          "/user/username/projects/myproject/file.ts"
        ]
      },
      "seq": 6,
      "type": "request"
    }
Info 37   [00:01:02.000] response:
    {
      "responseRequired": false
    }
After request

Before running Timeout callback:: count: 1
3: checkOne

Info 38   [00:01:03.000] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info 39   [00:01:04.000] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* Version: 3 structureChanged: false structureIsReused:: Completely Elapsed:: *ms
Info 40   [00:01:05.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 41   [00:01:06.000] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/file.ts SVC-1-2 "const x = 10;\nfunction foo() {\n    // @ts-ignore\n    let y: string = x;\n    return y;\n}\nfunction bar() {\n    // @ts-ignore\n    let z : string = x;\n    return z;\n}\nfoo();\nbar();"

Info 42   [00:01:07.000] -----------------------------------------------
Info 43   [00:01:08.000] event:
    {"seq":0,"type":"event","event":"syntaxDiag","body":{"file":"/user/username/projects/myproject/file.ts","diagnostics":[]}}
After running Timeout callback:: count: 0

Before running Immedidate callback:: count: 1
5: semanticCheck

Info 44   [00:01:09.000] event:
    {"seq":0,"type":"event","event":"semanticDiag","body":{"file":"/user/username/projects/myproject/file.ts","diagnostics":[]}}
After running Immedidate callback:: count: 1
6: suggestionCheck

Before running Immedidate callback:: count: 1
6: suggestionCheck

Info 45   [00:01:10.000] event:
    {"seq":0,"type":"event","event":"suggestionDiag","body":{"file":"/user/username/projects/myproject/file.ts","diagnostics":[]}}
Info 46   [00:01:11.000] event:
    {"seq":0,"type":"event","event":"requestCompleted","body":{"request_seq":6}}
After running Immedidate callback:: count: 0
