
// para mostar los clientes
function mostrarCliente(){

    document.getElementById('PRODUCTOS').style.display = 'none';
    document.getElementById('CLIENTE').style.display = 'flex';
    document.getElementById('EMPLEADO').style.display = 'none'; 
    document.getElementById('FACTURA').style.display ='none';
   

}

// es para mostrar los productos
function mostrarProductos(){
    document.getElementById('PRODUCTOS').style.display = 'flex';
    document.getElementById('CLIENTE').style.display = 'none';
    document.getElementById('EMPLEADO').style.display = 'none'; 
    document.getElementById('FACTURA').style.display ='none';
}

//mostrar los empleados 
function mostrarEmpleados (){
    document.getElementById('PRODUCTOS').style.display = 'none';
    document.getElementById('CLIENTE').style.display = 'none';
    document.getElementById('EMPLEADO').style.display = 'flex'; 
    document.getElementById('FACTURA').style.display ='none';
}
//Mostrar Factura
function mostrarFactura (){
    document.getElementById('PRODUCTOS').style.display = 'none';
    document.getElementById('CLIENTE').style.display = 'none';
    document.getElementById('EMPLEADO').style.display = 'none'; 
    document.getElementById('FACTURA').style.display ='flex';
}




/// guardar


// AXIOS para el cliente
var clientes=[];
var clienteSeleccionado;
const url ='../../../Proyecto/Backend/Api/cliente.php';

function obtenerClientes(){

    axios({
        method:'GET',
        url: url,
        responseType:'json'
    }).then(res=>{
        console.log(res.data);
        this.clientes = res.data;
         llenarTabla();
    }).catch(error=>{
        console.error(error);
    });
}

obtenerClientes();

function llenarTabla(){
  document.querySelector('#tabla-cliente tbody').innerHTML = '';
for (let i=0; i<clientes.length;i++){
  document.querySelector('#tabla-cliente tbody').innerHTML +=
  ` <tr>
  <td scope="row">1</td>
  <td>${clientes[i].primerNombre}</td>
  <td>${clientes[i].segundoNombre}</td>
  <td>${clientes[i].primerApellido}</td>
  <td>${clientes[i].SegundoApellido}</td>
  <td>${clientes[i].edad}</td>
  <td>${clientes[i].identidad}</td>
  <td>${clientes[i].fechaRegistro}</td>
  <td>${clientes[i].direccion}</td>
  <td>${clientes[i].idtaller}</td>
  <td colspan="2" style=" display: flex; justify-content: space-between;">
    <button id="Editar1" type="button" class="btn btn-primary" onclick="editar(${i})"><i class="fas fa-pencil-alt"></i> </button>
    <button id="btn-delete" type="button" class="btn btn-danger" onclick="eliminar(${i})"><i class="fas fa-trash-alt"></i></button>
    </td>
</tr>`;

  }
}






// FUNCION DE ELIMINAR DEL CLIENTE
function eliminar(indice){
  console.log('Eliminar el elemento con el indice' + indice);
  axios({
    method:'DELETE',
    url: url + `?id=${indice}`,
    responseType:'json'
    
}).then(res=>{
    console.log(res.data);
    obtenerClientes();
}).catch(error=>{
    console.error(error);
});

}

//FUNCION DE GUARDAR DEL CLIENTE
function guardar(){
  document.getElementById('btn-guardar').diseable = true;
  document.getElementById('btn-guardar').innerHTML = 'guardando...';
  let cliente ={
      primerNombre: document.getElementById('primerNombre').value,
      segundoNombre: document.getElementById('segundoNombre').value,
      primerApellido: document.getElementById('primerApellido').value,
      segundoApellido: document.getElementById('segundoApellido').value,
      edad: document.getElementById('edad').value,
      identidad: document.getElementById('Identidad').value,
      fechaRegistro: document.getElementById('startDate').value,
      direccion: document.getElementById('direction').value,
  };
  console.log('Cliente a guardar', cliente);
  axios({
      method:'POST',
      url: url,
      responseType:'json',
      data:cliente     
  }).then(res=>{
      console.log(res);
      limpiar();
      obtenerClientes();
      document.getElementById('btn-guardar').diseable = false;
      document.getElementById('btn-guardar').innerHTML = 'guardar';
  }).catch(error=>{
      console.error(error);
  });

}


function limpiar(){

      document.getElementById('primerNombre').value=null;
      document.getElementById('segundoNombre').value=null;
      document.getElementById('primerApellido').value=null;
      document.getElementById('segundoApellido').value=null;
      document.getElementById('edad').value=null;
      document.getElementById('identidad').value=null;
      document.getElementById('startDate').value=null;
      document.getElementById('direction').value=null;
      document.getElementById('btn-guardar').style.display='inline';
      document.getElementById('btn-Actualizar').style.display='none';

}

// actualizar la informacion

function actualizar(){
  let cliente ={
    primerNombre: document.getElementById('primerNombre').value,
    segundoNombre: document.getElementById('segundoNombre').value,
    primerApellido: document.getElementById('primerApellido').value,
    segundoApellido: document.getElementById('segundoApellido').value,
    edad: document.getElementById('edad').value,
    identidad: document.getElementById('Identidad').value,
    fechaRegistro: document.getElementById('startDate').value,
    direccion: document.getElementById('direction').value,
};
  console.log('Cliente a Actualizar', cliente);
  axios({
      method:'PUT',
      url: url +`?id=${clienteSeleccionado}`,
      responseType:'json',
      data:cliente     
  }).then(res=>{
      console.log(res);
      limpiar();
      obtenerClientes();
  }).catch(error=>{
      console.error(error);
  });


}

// editar
function editar(indice){
  clienteSeleccionado = indice;
  console.log('se selecciono el elemento' +indice);
  axios({
      method:'GET',
      url: url +`?id=${indice}`,
      responseType:'json'   
  }).then(res=>{
      console.log(res);

      document.getElementById('primerNombre').value=res.primerNombre;
      document.getElementById('segundoNombre').value=res.data.segundoNombre;
      document.getElementById('primerApellido').value=res.data.primerApellido;
      document.getElementById('segundoApellido').value=res.data.segundoApellido;
      document.getElementById('edad').value=res.data.edad;
      document.getElementById('Identidad').value=res.data.identidad;
      document.getElementById('startDate').value=res.data.fechaRegistro;
      document.getElementById('direction').value=res.data.direccion;
      document.getElementById('btn-guardar').style.display='none';
      document.getElementById('btn-Actualizar').style.display='inline';
  }).catch(error=>{
      console.error(error);
  });
}