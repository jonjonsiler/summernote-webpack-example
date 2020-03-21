import initSummernote from 'editor';

/* for Summernote Lite */
// import 'summernote/dist/summernote-lite';
// import 'summernote/dist/summernote-lite.css';
/* 
for Summernote Lite (from source)
    - Webpack needs to set an appropriate loader for the SCSS files
    - Bootstrap styles and Javascript should be disabled
*/
import 'summernote/src/js/lite/settings';
// ^--- includes 'summernote/src/styles/summernote-lite.scss'

(function(){

    $(initSummernote);

})();