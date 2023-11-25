// Line.jsx
import React from 'react';

import { LineChart } from '../../components';

const Line = () => (
  <div className="m-4 md:m-10 mt-24 p-10 h-full bg-white dark:bg-secondary-dark-bg rounded-3xl">
    {/* Primer gráfico */}
    <LineChart chartId={1} title="Nivel de concentracion" />
    <LineChart chartId={2} title="Ponderado Tareas" />
    <LineChart chartId={3} title="Nivel de productividad" />

  </div>
);

export default Line;
