currentDirectory:: /user/username/projects/myproject useCaseSensitiveFileNames: false
Input::
//// [/user/username/projects/myproject/a.ts]
declare var v: {
    reallyLongPropertyName1: string | number | boolean | object | symbol | bigint;
    reallyLongPropertyName2: string | number | boolean | object | symbol | bigint;
    reallyLongPropertyName3: string | number | boolean | object | symbol | bigint;
    reallyLongPropertyName4: string | number | boolean | object | symbol | bigint;
    reallyLongPropertyName5: string | number | boolean | object | symbol | bigint;
    reallyLongPropertyName6: string | number | boolean | object | symbol | bigint;
    reallyLongPropertyName7: string | number | boolean | object | symbol | bigint;
};
v === 'foo';

//// [/user/username/projects/myproject/tsconfig.json]
{"compilerOptions":{}}

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


/a/lib/tsc.js -w
Output::
>> Screen clear
[[90m12:00:21 AM[0m] Starting compilation in watch mode...

[96ma.ts[0m:[93m10[0m:[93m1[0m - [91merror[0m[90m TS2367: [0mThis comparison appears to be unintentional because the types '{ reallyLongPropertyName1: string | number | bigint | boolean | symbol | object; reallyLongPropertyName2: string | number | bigint | boolean | symbol | object; reallyLongPropertyName3: string | ... 4 more ... | object; reallyLongPropertyName4: string | ... 4 more ... | object; reallyLongPropertyName5: string | ... 4...' and 'string' have no overlap.

[7m10[0m v === 'foo';
[7m  [0m [91m~~~~~~~~~~~[0m

[[90m12:00:24 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts"]
Program options: {"watch":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Not
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts

Shape signatures in builder refreshed for::
/a/lib/lib.d.ts (used version)
/user/username/projects/myproject/a.ts (used version)

PolledWatches::
/user/username/projects/myproject/node_modules/@types: *new*
  {"pollingInterval":500}

FsWatches::
/user/username/projects/myproject/tsconfig.json: *new*
  {}
/user/username/projects/myproject/a.ts: *new*
  {}
/a/lib/lib.d.ts: *new*
  {}

FsWatchesRecursive::
/user/username/projects/myproject: *new*
  {}

exitCode:: ExitStatus.undefined

//// [/user/username/projects/myproject/a.js]
v === 'foo';



Change:: Enable noErrorTruncation

Input::
//// [/user/username/projects/myproject/tsconfig.json]
{"compilerOptions":{"noErrorTruncation":true}}


Before running Timeout callback:: count: 1
1: timerToUpdateProgram
After running Timeout callback:: count: 0
Output::
>> Screen clear
[[90m12:00:28 AM[0m] File change detected. Starting incremental compilation...

[96ma.ts[0m:[93m10[0m:[93m1[0m - [91merror[0m[90m TS2367: [0mThis comparison appears to be unintentional because the types '{ reallyLongPropertyName1: string | number | bigint | boolean | symbol | object; reallyLongPropertyName2: string | number | bigint | boolean | symbol | object; reallyLongPropertyName3: string | number | bigint | boolean | symbol | object; reallyLongPropertyName4: string | number | bigint | boolean | symbol | object; reallyLongPropertyName5: string | number | bigint | boolean | symbol | object; reallyLongPropertyName6: string | number | bigint | boolean | symbol | object; reallyLongPropertyName7: string | number | bigint | boolean | symbol | object; }' and 'string' have no overlap.

[7m10[0m v === 'foo';
[7m  [0m [91m~~~~~~~~~~~[0m

[[90m12:00:29 AM[0m] Found 1 error. Watching for file changes.



Program root files: ["/user/username/projects/myproject/a.ts"]
Program options: {"noErrorTruncation":true,"watch":true,"configFilePath":"/user/username/projects/myproject/tsconfig.json"}
Program structureReused: Completely
Program files::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts

Semantic diagnostics in builder refreshed for::
/a/lib/lib.d.ts
/user/username/projects/myproject/a.ts

No shapes updated in the builder::

exitCode:: ExitStatus.undefined

