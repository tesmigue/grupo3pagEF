import React from 'react'


import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { FaChild } from 'react-icons/fa';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contextAPI/ContextProvider';
import grego from '../data/grego.jpg';
import yo from '../data/yo.jpg';
import sato from '../data/sato.jpg';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Sobre = () => {
  const { currentColor, currentMode } = useStateContext();
  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Nuestro proposito</p>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div>
              <p> nuestro objetivo es ayudar a los pacientes que presentan trastorno de deficit atencional e hiperactividad y participan  en terapias de cognitivo conductual </p>
              <br></br>
              <p>
                Para ello decidimos crear una inteligencia artificial que estudia las tendencias de este remotamente y los resultados son mostrados en esta pagina donde el psicologo.
              </p>
              <br></br>
              
              <p>
                Gracias a eso, el psicologo puede ver como se comporta su paciente en su hogar, podrá, ademas de ver el progreso de su paciente en el tiempo, proponer y pensar en soluciones mas focalizadas para el paciente y asi mejorar la eficacia de las terapias.
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="flex gap-10 flex-wrap justify-center mt-5">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
            <div className="flex justify-between items-center gap-2 mb-10">
              <p className="text-xl font-semibold">Nuestra historia</p>
            </div>
            <div className="md:w-full overflow-auto">
              <p> En un principio pensamos en realizar un diseño mas minimalista, con una simple navbar, un par de textos y con un formulario de contacto. </p>
              <br></br>
              <br></br>
              <p>
                Sin embargo, a medida que trabajamos y nos fuimos enamorando del proyecto, nuestra ambicion crecio y a su vez las ganas de entregarle a el cliente la mejor experiencia posible, tanto visual como funcional.
              </p>
              <br></br>
              <p></p>
              <br></br>
              <p>
                Por lo tanto, decidimos agregarle mas funcionalidades y herramientas esteticas, como por ejemplo, la posibilidad de que el psicologo pueda ver el progreso de su paciente en el tiempo, y asi poder proponer y pensar en soluciones mas focalizadas para el paciente y asi mejorar la eficacia de las terapias.
              </p>
              <br></br>
              <p> </p>
              <br></br>
              <p>
                A su vez, hacerla mas atractiva esteticamente, incorporando librerias como Syncfusion, react icons y entre otras.
              </p>
              <br></br>
              <p>
                Por ultimo incorporamos APIs como una de context provider, que envia funciones a los diferentes archivos. Una State/api que se conecta al backend y a la base de datos en azure.
              </p>
              <br></br>
              <p>
                El proyecto todavia esta en desarrollo. No dudes en contactarnos ante cualquier duda o sugerencia!
              </p>
            </div>
          </div>

        </div>
        <div>
          
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-12 m-3 mt-15 flex justify-center items-center gap-10">
            <div>
              <p className="text-2xl font-semibold ">Miguel</p>
              <p className="text-gray-400">programacion en React</p>
              <img src={yo} alt="yo" className="rounded-full w-40 h-40" />
            </div>
          </div>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-12 m-3 mt-15 flex justify-center items-center gap-10">
            <div>
              <p className="text-2xl font-semibold ">Satoru</p>
              <p className="text-gray-400">diseñador Figma UI/UX</p>
              <img src={sato} alt="sato" className="rounded-full w-40 h-40" />
            </div>
          </div>
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-12 m-3 mt-15 flex justify-center items-center gap-10">
            <div>
              <p className="text-2xl font-semibold ">Gregorio</p>
              <p className="text-gray-400">Informes y presentaciones </p>
              <img src={grego} alt="grego" className="rounded-full w-40 h-40" />
            </div>
          </div>
        </div>
      </div>

    </div>
  ); 
};

export default Sobre;