var departamento = [];
var vive_digital = [];

let urlvive='https://www.datos.gov.co/resource/etr2-mkeu.json';
fetch(urlvive)

.then(datos_vive=>datos_vive.json())

.then(function covertir(datos_vive){
    datos_vive.forEach(function conteo(datos_vive)
    {
        if(datos_vive.depto != undefined)
        {
            departamento.push(datos_vive.depto);  
            vive_digital.push(1);
        }
    });

var graficatorta1 =
{
    values:vive_digital,
    labels:departamento,
    type: 'pie'
};

var datosGraficasTorta = [graficatorta1];

var layout = {
    title: 'Puntos vive digital en los departamentos de Colombia',
    height: 800,
    width: 800
};
  
  Plotly.newPlot('grafico_torta', datosGraficasTorta, layout);
});