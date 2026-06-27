import { Client } from "pg";

async function query(queryObject) {
  const client = new Client();
  const res = await client.query(queryObject.text, queryObject.params);
  console.log(res.rows[0].message); // Hello world!
  await client.end();
  return result;
}

export default {
  query: query,
};
