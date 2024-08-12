async function getData() {
    const res = await fetch('http://localhost:8080/users/1')

   
    if (!res.ok) {  
      throw new Error('Failed to fetch data')
    }
    const data = await res.json();
   console.log(res.json())
    return data
  }
   
  export default async function Users() {
    return (<main>
        <h1>users</h1>
    </main>);
  }