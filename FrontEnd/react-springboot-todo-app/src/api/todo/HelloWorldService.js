import axios from "axios"

class HelloWorldService{

    executeHelloWorldService(){
        console.log("HelloWorld Service")
        return axios.get("http://localhost:8080/hello-world"); //this will return a promise
   
    }

    executeHelloWorldBeanService(){
        console.log("HelloWorld Service")
        return axios.get("http://localhost:8080/hello-world-bean"); //this will return a promise
   
    }
    executeHelloWorldPathVariableService(name){
        console.log("HelloWorld Service")
        return axios.get(`http://localhost:8080/hello-world-bean/path-variable/${name}`); //this will return a promise
   
    }
}

export default new HelloWorldService()