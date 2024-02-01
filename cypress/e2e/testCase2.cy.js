describe('Test Case 2 - POST - Create', ()=>{
    const thisYear = '2024'
it('it should create new user and assert some data', () =>{
    cy.request('POST', `https://reqres.in/api/users`, {
        "name": "morpheus",
        "job": "leader"
    }).then((response)=> {
        expect(response.status).to.eq(201);
        expect(response.body.id).not.to.be.empty;
        expect((response.body.createdAt).substring(0, 4)).to.eq(thisYear)
    });
    });
})