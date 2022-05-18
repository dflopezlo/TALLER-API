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
    height: 900,
    width: 1100,
};
  
  Plotly.newPlot('grafico_torta', datosGraficasTorta, layout);
});

/******************************************************** Segunda gráfica ********************************************************/

var municipios = [];
var cantidad_2019 = [];
var cantidad_2020 = [];

let url= 'https://www.datos.gov.co/resource/fs93-tx8v.json';
fetch(url)

.then(datos_obtenidos=>datos_obtenidos.json())

.then(function transformar (datos_obtenidos) {
    datos_obtenidos.forEach(function agregar (datos_obtenidos) 
    {
        let pos = municipios.indexOf(datos_obtenidos.municipio); //verifico si el municipio ya lo guardé en el arreglo de municipios
        if(pos == -1){
            municipios.push(datos_obtenidos.municipio);
            if(datos_obtenidos.a_o == 2019){
                cantidad_2019.push(datos_obtenidos.cantidad);
            }
            else{
                cantidad_2020.push(datos_obtenidos.cantidad);
            }
        }
        else{
            if(datos_obtenidos.a_o == 2019){
                cantidad_2019[pos] = datos_obtenidos.cantidad;
            }
            else{
                cantidad_2020[pos] = datos_obtenidos.cantidad;
            }
        }
    });

var linea1 = {
    x: municipios,
    y: cantidad_2019,
    mode: 'lines',
    name: 'Año 2019',
    line: {
        color: 'red',
        width: 2
    }
};
      
var linea2 = {
    x: municipios,
    y: cantidad_2020,
    mode: 'lines',
    name: 'Año 2020',
    line: {
        color: 'blue',
        width: 2
    }
};
            
var data = [ linea1, linea2 ];
      
var layout = {
    title:'Total de Mujeres Víctimas de Feminicidio por Municipio en el Valle del Cauca, en los años 2019 y 2020',
    height: 600,
    width: 1490,
    xaxis: {
        title: 'Municipios del Valle del Cauca'
    },
    yaxis: {
        title: 'Cantidad de Feminicidios'
    },
    legend: {
        y: 0.5,
        traceorder: 'reversed',
        font: {
          size: 16
        }
    }
};
      
Plotly.newPlot('graficoLinea', data, layout);
      
});