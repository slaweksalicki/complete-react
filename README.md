The Complete React Developer Course (w/ Hooks and Redux)

Indecision-app

babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
live-server public

npm uninstall -g babel-cli live-server
yarn add live-server babel-cli@6.24.1
yarn run serve
yarn run build