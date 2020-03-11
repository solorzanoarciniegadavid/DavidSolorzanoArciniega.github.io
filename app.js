
document.getElementById('formTareas').addEventListener('submit', guardarTarea);

function guardarTarea(e){
	let titulo  =document.getElementById('titulo').value;
	let descripcion = document.getElementById('descripcion').value;
	
	const tarea = {
		titulo,
		descripcion
	};
	console.log(tarea);

	
	localStorage.getItem('tasks');
	if (localStorage.getItem('tareas')=== null) {
		let tareas = [];
		tareas.push(tarea);
		localStorage.setItem('tareas', JSON.stringify(tareas));
	}else {
		let tareas = JSON.parse(localStorage.getItem('tareas'));
		tareas.push(tarea);
		localStorage.setItem('tareas', JSON.stringify(tareas));
	}

	obtenerTarea();
	document.getElementById('formTareas').reset();
	e.preventDefault();
}

function deleteTask(titulo) {
  console.log(titulo)
  let tareas = JSON.parse(localStorage.getItem('tareas'));
  for(let i = 0; i < tareas.length ; i++) {
    if(tareas[i].titulo == titulo) {
      tareas.splice(i, 1);
      console.log("Eliminado");
    }
  }
  
  localStorage.setItem('tareas', JSON.stringify(tareas));
  obtenerTarea();
}

function obtenerTarea(){
	let tareas = JSON.parse(localStorage.getItem('tareas'));
	let verTareas = document.getElementById('tareas');
	verTareas.innerHTML = '';

	for(let i = 0; i< tareas.length; i++){
		let titulo = tareas[i].titulo;
		let descripcion = tareas[i].descripcion;


		verTareas.innerHTML +=  `<div class="card mb-3"> 
		<div class = "card-body"> 
		<p>${titulo} - ${descripcion}</p> 
		<a href="#" onclick="deleteTask('${titulo}')" class="btn btn-danger">	Eliminar </a> 
		</div>
		</div>`;
	}
}


obtenerTarea();