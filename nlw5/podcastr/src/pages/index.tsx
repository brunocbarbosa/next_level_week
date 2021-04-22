export default function Home(props) {
  return (
    <>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </>
  )
}

/* SSG: generating method where get a requisition in api just one time by the first person who access the page when the developer determine. 
It's determined in revalidate, in this case each 8 in 8 hours */
export async function getStaticProps(){
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return{
    props:{
      episodes: data,
    },
    revalidate: 60 * 60* 8,
  }
}
