window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

// const functionApiUrl = 'AccountEndpoint=https://azureresume-pp.documents.azure.com:443/;AccountKey=knZytY5M8GRsQJYbX4dHpzfDqR4jyjPIg6cvMeBEHdPJyqo78aOG1GNsiKMaycWJZmm02emtGT03ACDb40DA1w==;'
const localFunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    
    let count = 0;
    fetch(localFunctionApi).then(response => {
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