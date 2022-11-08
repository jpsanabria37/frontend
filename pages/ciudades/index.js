export async function getStaticProps() {
  const https = require("https");
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });
  const res = await fetch("https://localhost:5001/api/City", { agent });

  const data = await res.json();

  console.log(data);

  return {
    props: {
      cities: data,
    },
  };
}

const CitiesList = ({ cities }) => {
  return (
    <>
      <ul>
        {cities.map((city) => (
          <li> {city.name}</li>
        ))}
      </ul>
    </>
  );
};

export default CitiesList;
