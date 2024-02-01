const Ajv=require('ajv')
const avj=new Ajv()
describe("Schema validation", () => {
    it("should cheeeeeck response data and data tgypes against schema", () =>{
        cy.request('POST', `https://reqres.in/api/users`, {
            "name": "morpheus",
            "job": "leader"
             }).then((response)=>{
                const schema = {
                    "items": {
                        "required": [
                            "name",
                            "job",
                            "id",
                            "createdAt"
                        ],
                        "properties":{
                            "name": {
                                "type": "string"},
                            "job":{
                                "type": "string"},
                            "id": {
                                "type": "string"},
                            "createdAt": {
                                "type": "string"}
                        }

                    }
                }
        const validate= avj.compile(schema);
        const isValid = validate(response.body);
        expect(isValid).to.be.true;
        });
    })
})