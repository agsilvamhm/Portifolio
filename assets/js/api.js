async function fetchProfileDetail(){
      const url =''
      const fetching = await fetch(url)
      return await fetching.json()  
}