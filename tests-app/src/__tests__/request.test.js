import nock from "nock";
import fetchData from "../zipCodeRequest";

// example to mock a request
test("mock request", async () => {
  nock("https://viacep.com.br/ws")
    .defaultReplyHeaders({ "access-control-allow-origin": "*" })
    .get("/26262480/json")
    .reply(200, { logradouro: "Rua Tapajós" }); // status, data

  const response = await fetchData("26262480");
  const { data, status } = response;
  expect(status).toBe(200);
  expect(data.logradouro).toBe("Rua Tapajós");
});

// reference material
// https://github.com/nock/nock#replying-with-errors
