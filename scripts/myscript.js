$(document).ready(function(){
    $.ajax({
    url:'https://www.unisport.dk/api/sample/',
    dataType:'json',
    type:'GET',
    cache:false,
    success:function(data) {
        $(data.products).each(function(index,value){
            $("#content").append("<div class='col-md-4'> <img src=' " +value.img_url+ " '/> </br> Product Name:" +value.name+ " </br> Product Sizes:"+ value.sizes+" </br> Product Price:"+value.price+" <br> Delivery: "+value.delivery+" <br>  ");
        });
    }
});

});