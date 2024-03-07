import { login } from "./login";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;
  it("Deve exiber um alert com boas vindas", () => {
    login({email: 'teste@bol.com', password: '123'});
  });
});
