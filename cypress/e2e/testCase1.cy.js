describe('test case 1 - GET - List Users', () => {
  let lastName = ['Lawson', 'Ferguson']
  it('should return list of users and assert the response', () => {
    cy.request (
        `https://reqres.in/api/users?page=2`)
  .then((response) => {
    expect(response.status).to.eq(200);

    cy.log('assert total in received data in response')
    expect(response.body.total).to.eq(12)

    cy.log('assert “last_name” for the first and second user in response “data”')
    for (let i = 0; i<lastName.length; i++)
    {
      expect(response.body.data[i].last_name).to.eq(lastName[i]);
    }
    cy.log('Count number of received users in “data”')
    const dataLength = response.body.data.length;

    cy.log('compare no. of received users in "data" with received value "total"')
    const total = response.body.total;
    total > dataLength ? cy.log("Total is the boss") : cy.log("dataLength is the boss");
      });
});
})