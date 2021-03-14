export const FETCH_STATUS = "FETCH_STATUS"

//CONVERTS TO 
export const fetchStatus = () => {
    return async dispatch => {
        //logic to fetch data 
       // const result = await fetch('http://newsapi.org/v2/everything?q=tesla&from=2021-01-15&sortBy=publishedAt&apiKey=d0d92986ef7c4030b8f6b3746d3aae17')
       // const resultData = await result.json();
       const resultData ="app status fetched"
        dispatch({
            type: FETCH_STATUS,
            payload: resultData
        });
       
    }
}

 