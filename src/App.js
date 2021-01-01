import React, { Fragment } from 'react'
import './App.css';
import { useQuery, gql } from '@apollo/client'

const ALL_COUNTRIES = gql`
  {
    countries{
      name
      capital
      currency
    }
  }
`;



function App() {
  const { loading, error, data } = useQuery(ALL_COUNTRIES);
  if (loading) return <p>Yükleniyor...</p>
  if (error) return <p>Gene yanlış...</p>

  return (
    <Fragment>
      <h1>All Countries</h1>
      {data.countries.map((countries, id) => (
        <div key={id}>
          <p> <b>Ülke Adı:</b> {countries.name}</p>
          <p> <b>Başkent:</b> {countries.capital}</p>
          <p> <b>Para Birimi:</b> {countries.currency}</p>
          <hr/>
        </div>
      ))}
    </Fragment>
  );
}

export default App;
