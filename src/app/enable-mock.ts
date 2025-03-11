import {mockServer} from '../../__test__/mock-api/mock-server';


const enableMock = ()=>{
    mockServer.listen();
}

enableMock();