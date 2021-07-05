import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchApi = createAsyncThunk('FETCH', async ({ url, query, options }) => {
  const response = await fetch(`${url}${query}`, { ...options });
  const data = await response.json();

  return data;
});

export default fetchApi;
