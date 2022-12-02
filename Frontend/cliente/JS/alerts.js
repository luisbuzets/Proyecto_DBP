
$(".sidebar ul li").on('click', function(){
    $(".sidebar ul li.active").removeClass('active');
    $(this).addClass('active');
})

/*

Swal.fire({
    title:"bienvenido",
    text:" hola ",
    html: "<b>hola</b>",
    icon: 'success',
    backdrop: true,
    timer:5000,
    timerProgressBar: true

 toast: true,
 position: 'top',
  para no dar click afuera
 allowOutsideClick:false,
 allowEscapeKey: false,
 allowEnterKey:false,
 stopKeydownPropagation: false,

}); 
*/
$("#btn-crear").click(function(){
  let timerInterval
Swal.fire({
  title: 'No cierre!',
  html: 'Creando su Cuenta <b></b> ',
  timer: 5000,
  timerProgressBar: true,
  allowOutsideClick:false,
  allowEscapeKey: true,
  allowEnterKey:true,
  stopKeydownPropagation: false,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('I was closed by the timer')
  }
});
 
});




//Guardar productos
$("#btn_save").click(function(){
    Swal.fire({
        title:"Exito",
        text:"Su informacion esta Guardada",
        icon: 'success',
        backdrop: true,
        timer:5000,
        timerProgressBar: true,
    
     toast: true,
     position: 'top',
   //   para no dar click afuera
     allowOutsideClick: true,
     allowEscapeKey: false,
     allowEnterKey:false,
     stopKeydownPropagation: false,
    
    });
});

// guardar clientes
$("#btn-guardar").click(function(){
    Swal.fire({
        title:"Exito",
        text:"Su informacion esta Guardada",
        icon: 'success',
        backdrop: true,
        timer:2000,
        timerProgressBar: true,
    
     toast: true,
     position: 'top',
   //   para no dar click afuera
     allowOutsideClick: true,
     allowEscapeKey: true,
     allowEnterKey:true,
     stopKeydownPropagation: false,
    
    });
});



// eliminar productos
$("#btn-Eliminar").click(function(){
    
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: '¿Estas Seguro?',
        text: "No prodas revertir si elimina este dato",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Eliminar!',
        cancelButtonText: 'cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Eliminado!',
            'Su informacion ha sido Eliminado.',
            'Exito'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelar',
            'Tu informacion Esta a Salvo :)',
            'error'
          )
        }
      })

});

// eliminar clientes
$("#btn-delete").click(function(){
    
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: '¿Estas Seguro?',
        text: "No prodas revertir si elimina este dato",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Eliminar!',
        cancelButtonText: ' cancelar!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Eliminado!',
            'Su informacion ha sido Eliminado.',
            'Exito'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelar',
            'Tu informacion Esta a Salvo :)',
            'error'
          )
        }
      })

});