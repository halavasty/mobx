import React from 'react';
import { useRootData } from '../../hooks';
import { CitySchema } from '../../schemas';
import client from '../../mqtt';

export const CityView: React.FC<{ cities: CitySchema[] }> = ({ cities }) => {
  return (
    <ul>
      {cities.map(city => <li key={city.title + city.point}>{city.title}</li>)}
    </ul>
  );
}

export const CityList = () => {
  const { cities, addCity } = useRootData(store => ({
    cities: store.filteredCities,
    addCity: store.addCity
  }));

  client.subscribe('card/#');
  client.on('message', function (topic: string, message: Buffer) {
      addCity(JSON.parse(String(message)));
      console.log(JSON.parse(String(message)))
  });

  return <CityView cities={cities} />;
}
