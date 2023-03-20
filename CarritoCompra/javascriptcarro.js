function cargaobjetos(){
    let teclado = {
        nombre: "Teclado - Logitech K120",
        precio: 13.99,
        descripcion: "Vuelve a disfrutar tecleando durante horas… Pasa largas horas delante de tu ordenador sin apenas darte cuenta con el nuevo teclado K120 de Logitech, un teclado USB, de diseño estándar y teclado numérico.",
        imagen: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_89730893/fee_786_587_png"
    };
    let raton = {
        nombre: "Raton - Logitech M90",
        precio: 7.19,
        descripcion: "El ratón M90 de Logitech permite una conexión rápida, fiable y además, es apto para ambas manos.",
        imagen: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_94111238/mobile_200_200_png",
    };
    let pantalla = {
        nombre: "Pantalla - Lenovo L27i-30",
        precio:129,
        descripcion: "Alta resolución, rapidez, ni rastro de cansancio en la vista, colores de más calidad que nunca... parece imposible pero es real y está todo en este monitor. No es otro que el monitor Lenovo L27i-30 en color negro. ¡Todo en uno!",
        imagen: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_83209493/fee_786_587_png"
    };
    let torre = {
        nombre:"PC sobremesa - HP M01-F2050ns",
        precio:679,
        descripcion:"De la marca en la que muchos confían, este ordenador de sobremesa HP M01-F2050ns es la fusión perfecta de diseño moderno con tecnología demostrada. Abarque sus tareas diarias con un procesador fiable y guarde todavía más contenidos con su abundante almacenamiento. Conéctese sin problemas a dispositivos secundarios gracias a los cómodos puertos frontales",
        imagen:"https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_99401779/fee_786_587_png"
    };
    
    localStorage.setItem("teclado",JSON.stringify(teclado));
    document.getElementsByClassName
}