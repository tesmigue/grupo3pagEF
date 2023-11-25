import React from 'react';

import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { FaChild } from 'react-icons/fa';

import { Stacked, Pie, Button, LineChart, SparkLine } from '../components';
import { dropdownData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contextAPI/ContextProvider';

const DropDown = ({ currentMode }) => (
  <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
    <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
  </div>
);

const Home = () => {
  const { currentColor, currentMode } = useStateContext();

  return (
    <div className="mt-24">
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-black-200 dark:bg-secondary-dark-bg h-150 rounded-xl w-full lg:w-80 p-8 pt-10 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center h-60 ">
            <div>
              <p className="font-bold text-gray-400">Pacientes</p>
              <p className="text-2xl">60</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <FaChild size={64} className="mx-auto" />
            </button>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Elegir Paciente"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">semana pasada vs hoy</p>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div>
              <Stacked currentMode={currentMode} width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center mt-5">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-6 rounded-2xl w-96 md:w-760">
            <div className="flex justify-between items-center gap-2 mb-10">
              <p className="text-xl font-semibold">Progreso Paciente</p>
              <DropDown currentMode={currentMode} />
            </div>
            <div className="md:w-full overflow-auto">
              <LineChart />
            </div>
          </div>

        </div>
        <div>
          <div
            className=" rounded-2xl md:w-400 p-12 m-3 mb-10"
            style={{ backgroundColor: currentColor }}
          >
            <div className="flex justify-between items-center ">
              <p className="font-semibold text-white text-2xl">Tareas</p>

              <div>
                <p className="text-2xl text-white font-semibold mt-8 ml-12">15</p>
                <p className="text-gray-200">Para esta semana</p>
              </div>
            </div>

            <div className="mt-4">
              <SparkLine currentColor={currentColor} id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
            </div>
          </div>

          <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg rounded-2xl md:w-400 p-12 m-3 mt-15 flex justify-center items-center gap-10">
            <div>
              <p className="text-2xl font-semibold ">43,246</p>
              <p className="text-gray-400">datos procesados</p>
            </div>

            <div className="w-40">
              <Pie id="pie-chart" data={ecomPieChartData} legendVisiblity={false} height="160px" />
            </div>
          </div>
        </div>
      </div>

    </div>

  );
};

export default Home;
