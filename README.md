# Debug strapi plugin
## I'm learn Field API and read Paul tutorial:
https://www.paulgaumer.com/blog/how-to-create-a-color-picker-plugin-for-strapi-cms  
## Description
I'm copy custom field API ColorPicker Paul's component and it's don't render at first time (but others is work)  
Component path :  
plugins/colorpicker/admin/src/components/colorPicker/index.js

## Debug
I'm need debuging this component and need to show some debug info in console log  
To do it I'm copy from  
./node_modules/strapi-plugin-content-manager/admin/src/components/Inputs/index.js  
to :  
./extensions/content-manager/admin/src/components/Inputs"

And place some debug output to standart strapi components/Inputs  
It's best solution to copy from node_modules< not from git - because file version may be different

## Webpack correction
In standart webpack config node_modules is ignored and you need additional configuration - plase it to  
admin/admin.config.js  
Thanks FREEZX for advice!
