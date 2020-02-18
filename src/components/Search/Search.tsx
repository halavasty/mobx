import React from 'react';
import { useRootData } from '../../hook';

export const Search: React.FC = () => {
  const { query, setQuery } = useRootData(store => ({
    query: store.query.get(),
    setQuery: store.setQuery
  }));

  return <input value={query} onChange={e => setQuery(e.target.value)} />;
}
