import Api from './config.json'
//FUNCION PARA ENVIAR ARCHIVO A LA API Y GUARDAR
async function savingFile(diagrama, nameFile) {
    try {
        let params = {
            method: 'POST',
            body: JSON.stringify({ uri: nameFile, data: diagrama }),
            mode: 'cors',
            headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" }
        };
        let response = await fetch(`${Api.serverName}/save`, params);
        response = await response.json();
        //console.log(`respuesta de api ${JSON.stringify(response, null, 2)}`);
        return response;
    } catch (e) {
        console.log(e);
        return false;
    }
}

//FUNCION DE CONSULTA A API PARA COMPILAR EL DIAGRAMA
async function runCompilete(diagrama, nameFile) {
    try {
        let params = {
            method: 'POST',
            body: JSON.stringify({ uri: nameFile, data: diagrama }),
            mode: 'cors',
            headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" }
        };
        let response = await fetch(`${Api.serverName}/scanner`, params);
        response = await response.json();
        //console.log(`respuesta de api ${JSON.stringify(response, null, 2)}`);
        return response;
    } catch (e) {
        console.log(e);
    }
}

module.exports = { savingFile, runCompilete }