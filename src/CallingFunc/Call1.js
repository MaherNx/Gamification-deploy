import $ from 'jquery'; 
function Call1() {
    $.ajax({
        url: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.js",
        dataType: 'text/jsx',
        success: function(info){
          console.log(info);
          console.log(info.response.blog.likes);
        }
      }
    )}  

    function Call2() {
        $.ajax({
            url: '../JavaScripts/action',
            dataType: 'text/jsx',
            success: function(info){
              console.log(info);
              console.log(info.response.blog.likes);
            }
          }
        )}  

        function Call3() {
            $.ajax({
                url: '../JavaScripts/myjquery',
                dataType: 'text/jsx',
                success: function(info){
                  console.log(info);
                  console.log(info.response.blog.likes);
                }
              }
            )}  
    export { Call1 , Call2 , Call3 };