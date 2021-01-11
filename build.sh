set -e
# TODO: FALTA MINIFICAR LOS JS RESULTANTES

# cd builder11
# npm i
# ng build angular-common
# ng build angular-core
# ng build angular-platform-browser
# ng build angular-animations
# ng build angular-animations-browser
# ng build angular-browser-animations
# ng build angular-common-http
# ng build angular-router
# ng build angular-forms
# ng build single-spa-angular
# cd ..

cd npm-dependencies
npm i

rm -rf ../dist/rxjs
mkdir ../dist/rxjs
cp -r node_modules/@esm-bundle/rxjs/system/es2015 ../dist/rxjs
cp -r node_modules/@esm-bundle/rxjs/system/es5 ../dist/rxjs

rm -rf ../dist/tslib
mkdir ../dist/tslib
cp node_modules/tslib/tslib.js ../dist/tslib

rm -rf ../dist/single-spa
mkdir ../dist/single-spa
cp -r node_modules/single-spa/lib/system/single-spa.min.js ../dist/single-spa

rm -rf ../dist/zonejs
mkdir ../dist/zonejs
cp node_modules/zone.js/dist/zone.min.js ../dist/zonejs

rm -rf ../dist/import-map-overrides
mkdir ../dist/import-map-overrides
cp node_modules/import-map-overrides/dist/import-map-overrides.js ../dist/import-map-overrides

rm -rf ../dist/systemjs
mkdir ../dist/systemjs
rm -rf ../dist/systemjs/extras
mkdir ../dist/systemjs/extras
cp node_modules/systemjs/dist/system.min.js ../dist/systemjs
cp node_modules/systemjs/dist/extras/amd.min.js ../dist/systemjs/extras
cp node_modules/systemjs/dist/extras/named-exports.min.js ../dist/systemjs/extras