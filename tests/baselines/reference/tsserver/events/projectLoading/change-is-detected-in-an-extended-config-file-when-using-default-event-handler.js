currentDirectory:: / useCaseSensitiveFileNames: false
Info 0    [00:00:27.000] Provided types map file "/a/lib/typesMap.json" doesn't exist
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

//// [/user/username/projects/a/a.ts]
export class A { }

//// [/user/username/projects/a/tsconfig.json]
{}

//// [/user/username/projects/b/b.ts]
export class B {}

//// [/user/username/projects/b/tsconfig.json]
{"extends":"../a/tsconfig.json"}


Info 1    [00:00:28.000] request:
    {
      "command": "open",
      "arguments": {
        "file": "/user/username/projects/b/b.ts"
      },
      "seq": 1,
      "type": "request"
    }
Info 2    [00:00:29.000] Search path: /user/username/projects/b
Info 3    [00:00:30.000] For info: /user/username/projects/b/b.ts :: Config file name: /user/username/projects/b/tsconfig.json
Info 4    [00:00:31.000] Creating configuration project /user/username/projects/b/tsconfig.json
Info 5    [00:00:32.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/b/tsconfig.json 2000 undefined Project: /user/username/projects/b/tsconfig.json WatchType: Config file
Info 6    [00:00:33.000] event:
    {"seq":0,"type":"event","event":"projectLoadingStart","body":{"projectName":"/user/username/projects/b/tsconfig.json","reason":"Creating possible configured project for /user/username/projects/b/b.ts to open"}}
Info 7    [00:00:34.000] Config: /user/username/projects/b/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/b/b.ts"
 ],
 "options": {
  "configFilePath": "/user/username/projects/b/tsconfig.json"
 }
}
Info 8    [00:00:35.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/a/tsconfig.json 2000 undefined Config: /user/username/projects/b/tsconfig.json WatchType: Extended config file
Info 9    [00:00:36.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/b 1 undefined Config: /user/username/projects/b/tsconfig.json WatchType: Wild card directory
Info 10   [00:00:37.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/b 1 undefined Config: /user/username/projects/b/tsconfig.json WatchType: Wild card directory
Info 11   [00:00:38.000] Starting updateGraphWorker: Project: /user/username/projects/b/tsconfig.json
Info 12   [00:00:39.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info 13   [00:00:40.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/b/node_modules/@types 1 undefined Project: /user/username/projects/b/tsconfig.json WatchType: Type roots
Info 14   [00:00:41.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/b/node_modules/@types 1 undefined Project: /user/username/projects/b/tsconfig.json WatchType: Type roots
Info 15   [00:00:42.000] Finishing updateGraphWorker: Project: /user/username/projects/b/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 16   [00:00:43.000] Project '/user/username/projects/b/tsconfig.json' (Configured)
Info 17   [00:00:44.000] 	Files (2)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/b/b.ts SVC-1-0 "export class B {}"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	b.ts
	  Matched by default include pattern '**/*'

Info 18   [00:00:45.000] -----------------------------------------------
Info 19   [00:00:46.000] event:
    {"seq":0,"type":"event","event":"projectLoadingFinish","body":{"projectName":"/user/username/projects/b/tsconfig.json"}}
Info 20   [00:00:47.000] event:
    {"seq":0,"type":"event","event":"telemetry","body":{"telemetryEventName":"projectInfo","payload":{"projectId":"20501ec57de369fa110ede8c3db8fe97460676d82a7b594783e32439eba20158","fileStats":{"js":0,"jsSize":0,"jsx":0,"jsxSize":0,"ts":1,"tsSize":17,"tsx":0,"tsxSize":0,"dts":1,"dtsSize":334,"deferred":0,"deferredSize":0},"compilerOptions":{},"typeAcquisition":{"enable":false,"include":false,"exclude":false},"extends":true,"files":false,"include":false,"exclude":false,"compileOnSave":false,"configFileName":"tsconfig.json","projectType":"configured","languageServiceEnabled":true,"version":"FakeVersion"}}}
Info 21   [00:00:48.000] event:
    {"seq":0,"type":"event","event":"configFileDiag","body":{"triggerFile":"/user/username/projects/b/b.ts","configFile":"/user/username/projects/b/tsconfig.json","diagnostics":[]}}
Info 22   [00:00:49.000] Project '/user/username/projects/b/tsconfig.json' (Configured)
Info 22   [00:00:50.000] 	Files (2)

Info 22   [00:00:51.000] -----------------------------------------------
Info 22   [00:00:52.000] Open files: 
Info 22   [00:00:53.000] 	FileName: /user/username/projects/b/b.ts ProjectRootPath: undefined
Info 22   [00:00:54.000] 		Projects: /user/username/projects/b/tsconfig.json
Info 22   [00:00:55.000] response:
    {
      "responseRequired": false
    }
After request

PolledWatches::
/user/username/projects/b/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/user/username/projects/b/tsconfig.json: *new*
  {}
/user/username/projects/a/tsconfig.json: *new*
  {}
/a/lib/lib.d.ts: *new*
  {}

FsWatchesRecursive::
/user/username/projects/b: *new*
  {}

Info 23   [00:00:59.000] FileWatcher:: Triggered with /user/username/projects/a/tsconfig.json 1:: WatchInfo: /user/username/projects/a/tsconfig.json 2000 undefined Config: /user/username/projects/b/tsconfig.json WatchType: Extended config file
Info 24   [00:01:00.000] Scheduled: /user/username/projects/b/tsconfig.json
Info 25   [00:01:01.000] Scheduled: *ensureProjectForOpenFiles*
Info 26   [00:01:02.000] Elapsed:: *ms FileWatcher:: Triggered with /user/username/projects/a/tsconfig.json 1:: WatchInfo: /user/username/projects/a/tsconfig.json 2000 undefined Config: /user/username/projects/b/tsconfig.json WatchType: Extended config file
Before running Timeout callback:: count: 2
1: /user/username/projects/b/tsconfig.json
2: *ensureProjectForOpenFiles*
//// [/user/username/projects/a/tsconfig.json] file written with same contents

Info 27   [00:01:03.000] Running: /user/username/projects/b/tsconfig.json
Info 28   [00:01:04.000] Reloading configured project /user/username/projects/b/tsconfig.json
Info 29   [00:01:05.000] event:
    {"seq":0,"type":"event","event":"projectLoadingStart","body":{"projectName":"/user/username/projects/b/tsconfig.json","reason":"Change in extended config file /user/username/projects/a/tsconfig.json detected"}}
Info 30   [00:01:06.000] Config: /user/username/projects/b/tsconfig.json : {
 "rootNames": [
  "/user/username/projects/b/b.ts"
 ],
 "options": {
  "configFilePath": "/user/username/projects/b/tsconfig.json"
 }
}
Info 31   [00:01:07.000] Starting updateGraphWorker: Project: /user/username/projects/b/tsconfig.json
Info 32   [00:01:08.000] Finishing updateGraphWorker: Project: /user/username/projects/b/tsconfig.json Version: 2 structureChanged: false structureIsReused:: Not Elapsed:: *ms
Info 33   [00:01:09.000] Same program as before
Info 34   [00:01:10.000] event:
    {"seq":0,"type":"event","event":"projectLoadingFinish","body":{"projectName":"/user/username/projects/b/tsconfig.json"}}
Info 35   [00:01:11.000] event:
    {"seq":0,"type":"event","event":"configFileDiag","body":{"triggerFile":"/user/username/projects/b/tsconfig.json","configFile":"/user/username/projects/b/tsconfig.json","diagnostics":[]}}
Info 36   [00:01:12.000] Running: *ensureProjectForOpenFiles*
Info 37   [00:01:13.000] Before ensureProjectForOpenFiles:
Info 38   [00:01:14.000] Project '/user/username/projects/b/tsconfig.json' (Configured)
Info 38   [00:01:15.000] 	Files (2)

Info 38   [00:01:16.000] -----------------------------------------------
Info 38   [00:01:17.000] Open files: 
Info 38   [00:01:18.000] 	FileName: /user/username/projects/b/b.ts ProjectRootPath: undefined
Info 38   [00:01:19.000] 		Projects: /user/username/projects/b/tsconfig.json
Info 38   [00:01:20.000] After ensureProjectForOpenFiles:
Info 39   [00:01:21.000] Project '/user/username/projects/b/tsconfig.json' (Configured)
Info 39   [00:01:22.000] 	Files (2)

Info 39   [00:01:23.000] -----------------------------------------------
Info 39   [00:01:24.000] Open files: 
Info 39   [00:01:25.000] 	FileName: /user/username/projects/b/b.ts ProjectRootPath: undefined
Info 39   [00:01:26.000] 		Projects: /user/username/projects/b/tsconfig.json
Info 39   [00:01:27.000] got projects updated in background, updating diagnostics for /user/username/projects/b/b.ts
Info 40   [00:01:28.000] event:
    {"seq":0,"type":"event","event":"projectsUpdatedInBackground","body":{"openFiles":["/user/username/projects/b/b.ts"]}}
After running Timeout callback:: count: 1
3: checkOne
