
function register(){
    console.log("register car");

    //get values from fields
    var price = $("#txtPrice").val();
    var id = $("#txtId").val();
    var make = $("#txtMake").val();
    var model = $("#txtModel").val();
    var year = $("#txtYear").val();
    var capacity = $("#txtCapacity").val();
    var mileage = $("#txtMileage").val();
    var imageUrl = $("#txtImage").val();
    var stock = $("#txtStock").val();
    var hp = $("#txtHp").val();
    var cylinders = $("#txtCylinders").val();
    var description = $("#txtDesc").val();

    var errorOccurred = false;

    //data validations
    if(!year || isNaN(year)){
        //error with year **nothing for now**
        errorOccurred = true;
        $("#txtYear").addClass("error");
    }
    else{
        //parse year str into int
        //year = year * 1; <--easier way, below is pinky up way
        year = parseInt(year);
        $("#txtYear").removeClass("error");
    }

    if(!price || isNaN(price)){
        //error with price **nothing for now**
        errorOccurred = true;
        $("#txtYear").addClass("error");
    }
    else{
        //parse price str into float
        price = parseFloat(price);
        $("#txtYear").removeClass("error");
    }

    if(errorOccurred){
        return; //do not continue, we have errors
    }



    //create an object
    var car = {
        DailyPrice : price,
        make : make,
        model : model,
        year : year,
        capacity : capacity,
        Mileage : mileage,
        ImageUrl : imageUrl,
        Stock : stock,
        HP : hp,
        Cylinders : cylinders,
        Description : description
    };

    console.log(car);

    //send the object on an Ajax req to the backend.
    $.ajax({
        url: "/catalog/saveCar",
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify(car),
        success: function (res) {
            console.log("succeed", res);
        },
        error: function(error){
            console.log("Error", error);
        }
    });


    //clear form

    //success notificaiton
}

function init(){
    console.log("Register Page");

    //hook events- on button click, do the register function
    $("#btnSave").click(register);
}

window.onload = init;