/* for Summernote Lite */
// import 'summernote/dist/summernote-lite';
// import 'summernote/dist/summernote-lite.css';
/* 
for Summernote Lite (from source)
    - Webpack needs to set an appropriate loader for the SCSS files
    - Bootstrap styles and Javascript should be disabled
*/
// import 'summernote/src/js/lite/settings';
// ^--- includes 'summernote/src/styles/summernote-lite.scss'


/* for Bootstrap 3 */
// import 'bootstrap-3/dist/css/bootstrap.css';
// import 'bootstrap-3/dist/js/bootstrap';
// import 'summernote';
// import 'summernote/dist/summernote.css';
/*
for Bootstrap 3 (from source)
    - Webpack needs to set an appropriate loader for the SCSS files
    - Webpack needs to set an appropriate loader for the bootstrap LESS files
    - Summernote depends on Modal, Dropdown, and Tooltip bootstrap libraries
*/
// import 'bootstrap-3/less/bootstrap.less';
// import 'bootstrap-3/js/modal';
// import 'bootstrap-3/js/dropdown';
// import 'bootstrap-3/js/tooltip';
// import 'bootstrap-3/js/popover';
// import 'summernote/src/js/bs3/settings';
// ^--- includes 'summernote/src/styles/summernote-bs3.scss'



/* for Bootstrap 4 */
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap';
// import 'summernote/dist/summernote-bs4';
// import 'summernote/dist/summernote-bs4.css';
/*
for Bootstrap 4 (from source)
    - Webpack needs to set an appropriate loader for the SCSS files
    - Summernote depends on Modal, Dropdown, and Tooltip bootstrap libraries
*/
import 'bootstrap/scss/bootstrap.scss';
import Modal from 'bootstrap/js/dist/modal';
import Dropdown from 'bootstrap/js/dist/dropdown';
import Tooltip from 'bootstrap/js/dist/tooltip';
import Popover from 'bootstrap/js/dist/popover';
import 'summernote/src/js/bs4/settings'; 
// ^--- includes 'summernote/src/styles/summernote-bs4.scss'


(function(){
    const customConfig = {
        focus: true,
        toolbar: [
            // [groupName, [list of button]]
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['fontsize', ['fontsize']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['height', ['height']],
        ]
    };

  
    $(init);

    function init(){

        const configBlock = createConfigBlock();

        // Basic inititalization
        $('.editor').summernote();

        $('.editor-airmode').summernote({
            airMode: true,
            popover: {
                air: [
                    ['color', ['color']],
                    ['font', ['bold', 'underline', 'clear']],
                    ['para', ['ul', 'paragraph']],
                    ['table', ['table']],
                    ['insert', ['link', 'picture']]
                ]
            }
        });

        // Click to edit
        $(".btn-edit").on("click", function(){
            $(".editor-click").summernote(customConfig);
        });

        $(".btn-config").on("click", function(){
            if(!configBlock.is(":visible")){
                configBlock.appendTo($(this).closest("section"));
            }
        });

        $(".btn-save").on("click", function(){
            $(".editor-click").summernote('destroy');
        });

    }

    function createConfigBlock() {
        const block = $("<div>").addClass("bg-light p-3 mt-3");
        block.append($("<h3>").text("Configuration"));
        block.append($("<pre>"));
        $("pre", block).append($("<code>").text(JSON.stringify(customConfig, null, 2)));
        return block;
    } 
})();
