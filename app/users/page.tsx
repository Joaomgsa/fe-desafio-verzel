async function getData() {
    const res = await fetch('http://localhost:8080/users/1')

   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
    const data = await res.json();
   console.log(res.json())
    return data
  }
   
  export default async function Users() {
    const data = await getData()
    return (<main>
        <h1>teste</h1>
        <p>{data.userName}</p>
    </main>);
  }