## notes of TypeScript tutorial
This are my notes of this TypeScript tutorial https://www.youtube.com/watch?v=BwuLxPH8IDs

## setup
- install node js
- install TS via npm: `npm install -g typescript`

## Compile ts to js:
```
tsc app.ts
```
### watchmode for single file:
```
tsc app.ts -w  // watchmode for single file
```
### watchmode for all files:
```
tsc --init
tsc -w
```

## Server for localhost:
```
npm init
npm install --save-dev lite-server
npm start
```

## Settings:
- sourceMap: set to true if you want to debug ts code in browser
- outFile: where to save js code
- rootDir: where the ts code is located
- noEmitOnError: if true and ts code has errors, then no js code is generated
