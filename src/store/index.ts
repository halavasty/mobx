import { observable } from "mobx";
import { CitySchema } from '../schemas';

const Cities: CitySchema[] = [
    {
        title: 'London',
        point: 30,
    }
];
  
export const createStore = () => {
    const store = {
        cities: Cities,
        query: observable.box(''),
        setQuery(query: string) {
            store.query.set(query.toLowerCase());
        },
        get filteredCities() {
            return store.cities.filter(city =>
                city.title.toLowerCase().includes(store.query.get())
            );
        },
        addCity: (city: CitySchema) => {
            store.cities.push(city);
        },
    };

    return store;
};
  
export type TStore = ReturnType<typeof createStore>
