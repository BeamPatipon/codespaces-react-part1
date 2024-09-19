import './hello.css'
export default function Hello({firstname, lastname="jaidee", age="-1"}){
    return (<><h1>Hello World <br/>{firstname+"_"+lastname+"_"+age} </h1>
            <hr/>
            </>
    );
}
