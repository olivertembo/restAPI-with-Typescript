const api = "httpa://api.abc/data";

interface Data {
    name: String
    age: number
}


function getData(): Promise<Data[]> {
    return (
        fetch(api)
        .then( resource => resource.json())
        .then(resource =>{
            return resource as Data[];
        })
    );
}

const data = getData();

data.

