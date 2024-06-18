window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApiUrl = 'https://getresumecounter-pp.azurewebsites.net/api/GetResumeCounter?code=qUABPZ-YoFOs7LTim7mL4FQFfhOYp8zYT61560RhJ8UVAzFufESvog%3D%3D'
// const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    
    let count = 0;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log(error)
    })
    return count;  
}