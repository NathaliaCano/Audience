const endpoint="https://g93999e9d0890a5-retociclo3.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/audience/audience"
const endpoint2="https://g93999e9d0890a5-retociclo3.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client"
const endpoint4="https://g93999e9d0890a5-retociclo3.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message"

function peticionGet(){
    $.ajax({
            method:"GET",
            url:endpoint,
            success:function(data){
                console.log(data)
            },
            error:function(error){
                console.log("Error al Consumir Api Oracle Cloud ")
            }
    });
   
}

function obtenerItems(){
    $.ajax({
        dataType: 'json',
        url:endpoint,
        type:'GET',
        success:function(response) {
            console.log(response);
          var misItems=response.items;
          for(i=0;i<misItems.length;i++){
            $("#miResultado").append("<tr>");
            $("#miResultado").append("<td>"+misItems[i].id+"</td>");
            $("#miResultado").append("<td>"+misItems[i].owner+"</td>");
            $("#miResultado").append("<td>"+misItems[i].capacity+"</td>");
            $("#miResultado").append("<td>"+misItems[i].category_id+"</td>");
            $("#miResultado").append("<td>"+misItems[i].name+"</td>");
            $("#miResultado").append("</tr>");
          }
        },
        error: function(jqXHR, textStatus, errorThrown) {    
        }
    });
  }
  function obtenerItems1(){
    $.ajax({
        dataType: 'json',
        url:endpoint2,
        type:'GET',
        success:function(response) {
          var misItems=response.items;
          for(i=0;i<misItems.length;i++){
            $("#miResultado1").append("<tr>");
            $("#miResultado1").append("<td>"+misItems[i].id+"</td>");
            $("#miResultado1").append("<td>"+misItems[i].name+"</td>");
            $("#miResultado1").append("<td>"+misItems[i].email+"</td>");
            $("#miResultado1").append("<td>"+misItems[i].age+"</td>");
            $("#miResultado1").append("</tr>");
          }
        },
        error: function(jqXHR, textStatus, errorThrown) {    
        }
    });
  }

  function obtenerItems2(){
    $.ajax({
        dataType: 'json',
        url:endpoint4,
        type:'GET',
        success:function(response) {
          var misItems=response.items;
          for(i=0;i<misItems.length;i++){
            $("#miResultado2").append("<tr>");
            $("#miResultado2").append("<td>"+misItems[i].id+"</td>");
            $("#miResultado2").append("<td>"+misItems[i].messagetext+"</td>");
            $("#miResultado2").append("</tr>");
          }
        },
        error: function(jqXHR, textStatus, errorThrown) {    
        }
    });
  }

  function busca1(){
   // var elemento=
    //JSON= JavaScript Object Notation
    elemento={id:$("#miId1").val()}
    var elemento = parseInt(elemento.id)
    console.log(elemento);
    $.ajax({
        dataType: 'json',
        url:endpoint+"/"+elemento,
        type:'GET',
        success:function(response) {
          console.log(response);
          var item=response.items[0];
          //$("#miId").val(item.id);
          $("#owner").val(item.owner);
          $("#capacity").val(item.capacity);
          $("#name").val(item.name);
          $("#category_id").val(item.category_id);
        },
        error: function(jqXHR, textStatus, errorThrown) {   
            $("#owner").val("");
            $("#capacity").val("");
            $("#name").val("");
            $("#category_id").val("");         
        }
    });
    }

    function busca2(){
        // var elemento=
         //JSON= JavaScript Object Notation
         elemento={id:$("#miId2").val()}
         var elemento = parseInt(elemento.id)
         console.log(elemento);
         $.ajax({
             dataType: 'json',
             url:endpoint2+"/"+elemento,
             type:'GET',
             success:function(response) {
               console.log(response);
               var item=response.items[0];
               $("#name2").val(item.name);
               $("#email").val(item.email);
               $("#age").val(item.age);
             },
             error: function(jqXHR, textStatus, errorThrown) {   
                 $("#name2").val("");
                 $("#email").val("");
                 $("#age").val("");         
             }
         });
         }


         function busca3(){
            // var elemento=
             //JSON= JavaScript Object Notation
             elemento={id:$("#miId3").val()}
             var elemento = parseInt(elemento.id)
             console.log(elemento);
             $.ajax({
                 dataType: 'json',
                 url:endpoint4+"/"+elemento,
                 type:'GET',
                 success:function(response) {
                   console.log(response);
                   var item=response.items[0];
                   $("#Mensaje").val(item.messagetext);
                 },
                 error: function(jqXHR, textStatus, errorThrown) {   
                     $("#Mensaje").val("");     
                 }
             });
             }

             function actualizar(){
                elemento={id:$("#miId1").val()}
                var elemento1 = parseInt(elemento.id)
                var elemento={
                  id:elemento1,
                  owner:$("#owner").val(),
                  capacity:$("#capacity").val(),
                  name:$("#name").val(),
                  category_id:$("#category_id").val()
                  }
                  console.log(elemento)
                var dataToSend=JSON.stringify(elemento)
                //JSON= JavaScript Object Notation
                $.ajax({
                      dataType: 'json',
                      data:dataToSend,
                      contentType:'application/json',
                      url:endpoint,
                      method:'PUT',   
                      success:function(response) {
                        console.log("Actualizo Registro!!!")
                      },
                      error: function(jqXHR, textStatus, errorThrown) {   
                        console.log("Registro no actualizado") 
                      }
                  });
                }


                function actualizar1(){
                    elemento={id:$("#miId2").val()}
                    var elemento1 = parseInt(elemento.id)
                    var elemento={
                      id:elemento1,
                      name:$("#name2").val(),
                      email:$("#email").val(),
                      age:$("#age").val()
                      }
                      console.log(elemento)
                    var dataToSend=JSON.stringify(elemento)
                    //JSON= JavaScript Object Notation
                    $.ajax({
                          dataType: 'json',
                          data:dataToSend,
                          contentType:'application/json',
                          url:endpoint2,
                          method:'PUT',   
                          success:function(response) {
                            console.log("Actualizo Registro!!!")
                          },
                          error: function(jqXHR, textStatus, errorThrown) {   
                            console.log("Registro no actualizado") 
                          }
                      });
                    }


                    function actualizar2(){
                        elemento={id:$("#miId3").val()}
                        var elemento1 = parseInt(elemento.id)
                        var elemento={
                          id:elemento1,
                          messagetext:$("#Mensaje").val(),
                          }
                          console.log(elemento)
                        var dataToSend=JSON.stringify(elemento)
                        //JSON= JavaScript Object Notation
                        $.ajax({
                              dataType: 'json',
                              data:dataToSend,
                              contentType:'application/json',
                              url:endpoint4,
                              method:'PUT',   
                              success:function(response) {
                                console.log("Actualizo Registro!!!")
                              },
                              error: function(jqXHR, textStatus, errorThrown) {   
                                console.log("Registro no actualizado") 
                              }
                          });
                        }
        
                        function peticionPost() {
                            elemento={id:$("#miId1").val()}
                            var elemento1 = parseInt(elemento.id)
                            var elemento={
                              id:elemento1,
                              owner:$("#owner").val(),
                              capacity:$("#capacity").val(),
                              name:$("#name").val(),
                              category_id:$("#category_id").val()
                              }
                              console.log(elemento)
                            var datasend=JSON.stringify(elemento)
                            $.ajax({
                                method: "POST",
                                url: endpoint,
                                data: datasend,
                                dataType: 'json',
                                contentType: "application/json",
                                complete: function (response) {
                                    console.log(response.status)
                                },
                                error: function (error) {
                        
                                }    
                            });
                        }
            

                        function peticionPost1() {
                            elemento={id:$("#miId2").val()}
                            var elemento1 = parseInt(elemento.id)
                            var elemento={
                              id:elemento1,
                              name:$("#name2").val(),
                              email:$("#email").val(),
                              age:$("#age").val()
                              }
                              console.log(elemento)
                            var datasend=JSON.stringify(elemento)
                            $.ajax({
                                method: "POST",
                                url: endpoint2,
                                data: datasend,
                                dataType: 'json',
                                contentType: "application/json",
                                complete: function (response) {
                                    console.log(response.status)
                                },
                                error: function (error) {
                        
                                }    
                            });
                        }


                        
                        function peticionPost2() {
                            elemento={id:$("#miId3").val()}
                            var elemento1 = parseInt(elemento.id)
                            var elemento={
                              id:elemento1,
                              messagetext:$("#Mensaje").val()
                              }    
                              var datasend=JSON.stringify(elemento)
                              $.ajax({
                                  method: "POST",
                                  url: endpoint4,
                                  data: datasend,
                                  dataType: 'json',
                                  contentType: "application/json",
                                  complete: function (response) {
                                      console.log(response.status)
                                  },
                                  error: function (error) {
                                }    
                              });
                          }


                          function peticionDelete() {
                            elemento={id:$("#miId1").val()}
                            var elemento1 = parseInt(elemento.id)
                            var elemento={id:elemento1}
                              console.log(elemento)
                            var datasend=JSON.stringify(elemento)
                            $.ajax({
                                method: "DELETE",
                                url: endpoint,
                                data: datasend,
                                dataType: 'json',
                                contentType: "application/json",
                                complete: function (response) {
                                    console.log("Elimino Registro!!")
                                },
                                error: function (error) {
                                }
                            });
                        }


                        function peticionDelete1() {
                            elemento={id:$("#miId2").val()}
                            var elemento1 = parseInt(elemento.id)
                            var elemento={id:elemento1}
                              console.log(elemento)
                            var datasend=JSON.stringify(elemento)
                            $.ajax({
                                method: "DELETE",
                                url: endpoint2,
                                data: datasend,
                                dataType: 'json',
                                contentType: "application/json",
                                complete: function (response) {
                                    console.log("Elimino Registro!!")
                                },
                                error: function (error) {
                                }
                            });
                        }

                        function peticionDelete2() {
                            elemento={id:$("#miId3").val()}
                            var elemento1 = parseInt(elemento.id)
                            var elemento={id:elemento1}
                              console.log(elemento)
                            var datasend=JSON.stringify(elemento)
                            $.ajax({
                                method: "DELETE",
                                url: endpoint4,
                                data: datasend,
                                dataType: 'json',
                                contentType: "application/json",
                                complete: function (response) {
                                    console.log("Elimino Registro!!")
                                },
                                error: function (error) {
                                }
                            });
                        }