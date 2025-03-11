export const mockBrower = async () =>{
    if(typeof window !== 'undefined'){
        const {mockInBrowser} = await import(
            '../../../__test__/mock-api/mock-in-brower'
        );

        mockInBrowser.start();
    }
}