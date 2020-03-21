export default function initEditor(){

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

    const configBlock = function createConfigBlock() {
        const block = $("<div>").addClass("bg-light p-3 mt-3");
        block.append($("<h3>").text("Configuration"));
        block.append($("<pre>"));
        $("pre", block).append($("<code>").text(JSON.stringify(customConfig, null, 2)));
        return block;
    };

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