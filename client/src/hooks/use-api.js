import { useState, useEffect } from 'react';

const API_ROOT = `${process.env.REACT_APP_BACKEND_SERVER}`;

export function useApi({ path } = { path: '' }) {
  const [response, setResponse] = useState();

  useEffect(() => {
    fetch(`${API_ROOT}/${path}`)
      .then(res => res.text())
      .then(res => setResponse(res));
  }, []);

  return {
    response
  };
}
