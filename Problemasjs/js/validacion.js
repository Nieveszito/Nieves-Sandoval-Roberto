function capitalbanco() {
    let capitali = document.getElementById('capitalinicio').value;
   let  ganancia = capitali*1.02;
   document.getElementById('resultado').innerHTML = "La ganancia total al cabo de un mes será de "+ganancia

}
function sueldobase(){
    let sueldobase= document.getElementById('sueldobase').value;
    let venta1 = document.getElementById('venta1').value;
    let venta2 = document.getElementById('venta2').value;
    let venta3 = document.getElementById('venta3').value;
    sueldobase = parseFloat(sueldobase);
    venta1 = parseFloat(venta1);
    venta2 = parseFloat(venta2);
    venta3 = parseFloat(venta3);

    let gananciacomision = (venta1+venta2+venta3)*.10;
    let gananciatotal = sueldobase+gananciacomision;
    document.getElementById('resultado').innerHTML = "La ganancia por comisión de ventas es "+gananciacomision+" La ganancia total es "+gananciatotal

}
function descuento(){
    let cobrotienda = document.getElementById('cobrotienda').value;
    cobrotienda = parseFloat(cobrotienda);
    let cobrofinal = cobrotienda*0.85;
    document.getElementById('resultado').innerHTML = "El cobro final tras el 15% de descuento es: $"+cobrofinal
}
function algoritmos(){ 
    let parcial1 = parseFloat(document.getElementById('parcial1').value);
    let parcial2 = parseFloat(document.getElementById('parcial2').value);
    let parcial3 = parseFloat(document.getElementById('parcial3').value);
    let examen = parseFloat(document.getElementById('examen').value);
    let trabajo = parseFloat(document.getElementById('trabajo').value);
    let promedioparcial = (parcial1+parcial2+parcial3)/3;
    let porcparcial = promedioparcial*.55;
    let porcexamen = examen*.30;
    let porctrabajo = trabajo*.15;
    let calfinal = porcparcial+porcexamen+porctrabajo
    document.getElementById('resultado').innerHTML = "La calificación final sobre 10 es "+calfinal
    
}
function grupohombremujer(){
    let hombres = parseFloat(document.getElementById('hombres').value);
    let mujeres = parseFloat(document.getElementById('mujeres').value);
    let sumahombremujer = hombres+mujeres;
    let porchombres = (hombres*100)/sumahombremujer;
    let porcmujeres = (mujeres*100)/sumahombremujer;
    document.getElementById('resultado').innerHTML = `
    Procentaje de hombres: ${porchombres}%
    <br>
    Procentaje de mujeres: ${porcmujeres}%
    `

}
function edad(){
    let fecha = document.getElementById('fecha').value;
    let fechaactual = new Date();
    let fechanacimiento = new Date(fecha);
    let diferencia = fechaactual-fechanacimiento
    let edad = new Date(diferencia);
    let edadreal = edad.getFullYear() - 1970;
    document.getElementById('resultado').innerHTML = "Su edad es "+edadreal+" años"

}