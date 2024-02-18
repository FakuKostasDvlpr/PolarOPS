import React from 'react';

const ReactPrueba = () => {
  return (
    <>
    <div id="dropdownNavbar" class="rounded-md z-10 hidden flex-col font-normal shadow w-full bg-gray-700">
        <ul class="text-sm flex flex-col" aria-labelledby="dropdownLargeButton">
            <li>
                <a href="#vehicular" class="block px-4 py-2 dark:hover:">Vehiculos</a>
            </li>
            <li>
                <a href="#obras" class="block px-4 py-2 dark:hover:">Obras</a>
            </li>
        </ul>
    </div>
  </>
  )
}

export default ReactPrueba