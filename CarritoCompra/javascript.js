let objetosarray = [
    {id:0,nombre:'Logitech K120 Teclado',precio:9.90,uds:0},
    {id:1,nombre:'Monitor BenQ EW3270U 31.5" LED UltraHD 4K',precio:329,uds:0},
    {id:2,nombre:'Logitech B100 Ratón Negro',precio:8.39,uds:0},
    {id:3,nombre:'ASUS ExpertCenter D5 Tower',precio:520, uds:0}
];

let almacenado=null;

function iniciar(){
    almacenado=localStorage.getItem("producto");
    if(alamcenado!=null){
        almacenado = JSON.parse(almacenado);
        producto = almacenado;
        refrescar();
    }
}

function anadir(producto){
    let objeto = objetosarray[producto];
    objeto[uds]+=1;
    objetosarray[producto] = objeto[uds];
    document.getElementById("id"+producto).value = objeto[uds];
    localStorage.setItem("producto",JSON.stringify(objetosarray));
    refrescar();

};

function quitar(producto){
    let objeto = objetosarray[producto];
    let numuds = objeto[uds];
    if(numuds>=1){
        objeto[uds] -= 1;
        objetosarray[producto] = objeto;
        document.getElementById("id"+producto).value = objeto[uds];
        localStorage.setItem("producto", JSON.stringify(objetosarray));
        refrescar();
    };
}

function refrescar(){
    let listaprod = document.getElementById("carrito");
    let total = 0;
    listaprod.innerHTML="";
    for (var i=0;i<objetosarray.length;i++){
        let producto = objetosarray[i];
        if(producto[uds]>0){
            let nodo = document.createElement("li");
            let texto  = document.createTextNode("Producto: " +producto[nombre]+
            document.getElementById("id"+i).value = producto[uds];
            nodo.appendChild(nodo);
            total = total + producto[uds]*producto[precio];
        }
    }
}