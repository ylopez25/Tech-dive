import { useState, useEffect } from 'react';

const API_ROOT = 'https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams';

export function useApi() {
  const [response, setResponse] = useState();

  useEffect(() => {
    fetch(`${API_ROOT}`)
      .then(res => res.json())
      .then(res => setResponse(res));
  }, []);

  return {
    response
  };
}
