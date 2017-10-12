$(document).ready(function(){

//ABM categorias
  function editarCat(data) {
    $.post("editarCategoria",data,adminMostrarAjax);
  }
  function mostrarEditarCat(data) {
    let id_categoria= {id: data};
    $.post("mostrarEditarCategoria",id_categoria,adminMostrarAjax);
  }
  function agregarCat(data) {
    $.post("agregarCategoria",data,adminMostrarAjax);
  }
  function borrarCat(data) {
    let id_categoria= {id: data};
    $.post("borrarCategoria",id_categoria,adminMostrarAjax);
  }
  //ABM productos
  function editarProd(data) {
    $.post("editarProducto",data,adminMostrarAjax);
  }
  function mostrarEditarProd(data) {
    let id_delantal= {id: data};
    $.post("mostrarEditarProducto",id_delantal,adminMostrarAjax);
  }
  function agregarProducto(data) {
    $.post("agregarProd",data,adminMostrarAjax);
  }
  function borrarProd(data) {
    let id_producto= {id: data};
    $.post("borrarProducto",id_producto,adminMostrarAjax);
  }
  function listarProductosCategoria(data){
    let id_categoria={id: data};
    $.post("delantalesCategoria",id_categoria,adminMostrarAjax);
  }
  function mostrarDetalle(data) {
    let id_delantal={id: data};
    $.post("delantal",id_delantal,adminMostrarAjax);
  }

// Function para mostar Contenido de ajax y bindear funciones
  function adminMostrarAjax(result) {
      $("#js-pRender").html(result);

      $( ".editarCat" ).on( "click", function( event ) {
        event.preventDefault();
        let data = $(this).data("id");
        mostrarEditarCat(data);
      });
      $( ".borrarCat" ).on( "click", function( event ) {
        event.preventDefault();
        let data = $(this).data("id");
        borrarCat(data);
      });
      $( "#agregarCat" ).on( "submit", function( event ) {
        event.preventDefault();
        let data = $(this).serialize();
        agregarCat(data);
      });
      $( ".editarCategorias" ).on( "submit", function( event ) {
        event.preventDefault();
        let data = $(this).serialize();
        editarCat(data);
      });
      $( ".editarProd" ).on( "click", function( event ) {
        event.preventDefault();
        let data = $(this).data("id");
        mostrarEditarProd(data);
      });
      $( ".borrarProd" ).on( "click", function( event ) {
        event.preventDefault();
        let data = $(this).data("id");
        borrarProd(data);
      });
      $( "#agregarProd" ).on( "submit", function( event ) {
        event.preventDefault();
        let data = $(this).serialize();
        agregarProducto(data);
      });
      $( ".editarDelantales" ).on( "submit", function( event ) {
          event.preventDefault();
          let data = $(this).serialize();
          editarProd(data);
      });
      $(".productosCategoria").on("click", function(event){
        event.preventDefault();
        let data= $(this).data("id");
        listarProductosCategoria(data);
      })
      $(".detalle").on("click", function(event){
        event.preventDefault();
        let data= $(this).data("id");
        mostrarDetalle(data);
      });
  }

  $(".navegacion").on("click", function (event) {
    event.preventDefault();
    let seccion_pagina=$(this).attr("id");
      $.ajax({
        url: seccion_pagina,
        success: adminMostrarAjax
      })
  });

});
