async function fetchProfileDetail(){
      const url ='https://raw.githubusercontent.com/agsilvamhm/Portifolio/main/data/profile.json'
      const fetching = await fetch(url)
      return await fetching.json()  
}