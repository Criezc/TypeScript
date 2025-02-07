currentDirectory:: /user/username/projects/myproject useCaseSensitiveFileNames: false
Info 0    [00:00:29.000] Provided types map file "/typesMap.json" doesn't exist
Creating project service
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

//// [/user/username/projects/myproject/src/main.ts]
import { foo } from "bar"; foo();

//// [/user/username/projects/myproject/node_modules/bar/index.d.ts]
export { foo } from "./foo";

//// [/user/username/projects/myproject/node_modules/bar/foo.d.ts]
export function foo(): string;


Info 1    [00:00:30.000] Search path: /user/username/projects/myproject/src
Info 2    [00:00:31.000] For info: /user/username/projects/myproject/src/main.ts :: No config files found.
Info 3    [00:00:32.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info 4    [00:00:33.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info 5    [00:00:34.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/tsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info 6    [00:00:35.000] FileWatcher:: Added:: WatchInfo: /user/username/projects/myproject/jsconfig.json 2000 undefined WatchType: Config file for the inferred project root
Info 7    [00:00:36.000] Starting updateGraphWorker: Project: /dev/null/inferredProject1*
Info 8    [00:00:37.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info 9    [00:00:38.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules 1 undefined WatchType: node_modules for closed script infos and package.jsons affecting module specifier cache
Info 10   [00:00:39.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules 1 {"excludeDirectories":[]} Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info 11   [00:00:40.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules 1 {"excludeDirectories":[]} Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info 12   [00:00:41.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined WatchType: Closed Script info
Info 13   [00:00:42.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src 1 {"excludeDirectories":[]} Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info 14   [00:00:43.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/src 1 {"excludeDirectories":[]} Project: /dev/null/inferredProject1* WatchType: Failed Lookup Locations
Info 15   [00:00:44.000] DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 {"excludeDirectories":[]} Project: /dev/null/inferredProject1* WatchType: Type roots
Info 16   [00:00:45.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /user/username/projects/myproject/node_modules/@types 1 {"excludeDirectories":[]} Project: /dev/null/inferredProject1* WatchType: Type roots
Info 17   [00:00:46.000] Finishing updateGraphWorker: Project: /dev/null/inferredProject1* Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 18   [00:00:47.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 19   [00:00:48.000] 	Files (4)
	/a/lib/lib.d.ts Text-1 "/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }"
	/user/username/projects/myproject/node_modules/bar/foo.d.ts Text-1 "export function foo(): string;"
	/user/username/projects/myproject/node_modules/bar/index.d.ts Text-1 "export { foo } from \"./foo\";"
	/user/username/projects/myproject/src/main.ts SVC-1-0 "import { foo } from \"bar\"; foo();"


	../../../../a/lib/lib.d.ts
	  Default library for target 'es5'
	node_modules/bar/foo.d.ts
	  Imported via "./foo" from file 'node_modules/bar/index.d.ts'
	node_modules/bar/index.d.ts
	  Imported via "bar" from file 'src/main.ts'
	src/main.ts
	  Root file specified for compilation

Info 20   [00:00:49.000] -----------------------------------------------
Info 21   [00:00:50.000] Project '/dev/null/inferredProject1*' (Inferred)
Info 21   [00:00:51.000] 	Files (4)

Info 21   [00:00:52.000] -----------------------------------------------
Info 21   [00:00:53.000] Open files: 
Info 21   [00:00:54.000] 	FileName: /user/username/projects/myproject/src/main.ts ProjectRootPath: /user/username/projects/myproject
Info 21   [00:00:55.000] 		Projects: /dev/null/inferredProject1*
Info 21   [00:00:56.000] [
  {
    "messageText": "File specification cannot contain a parent directory ('..') that appears after a recursive directory wildcard ('**'): '**/../*'.",
    "category": 1,
    "code": 5065
  }
]