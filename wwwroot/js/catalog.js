
function getCatalog(){
    //create Ajax Req to getCatalog
    $.ajax({
        url: "/catalog/getCatalog",
        type: 'GET',
        success: function (res) {
            console.log("succeed", res);
        },
        error: function (error) {
            console.log("Error", error);
        }
    });
}


function init(){
    console.log("Catalog Page");

    getCatalog();
}

window.onload = init;

