import { CustomersPage } from "./page";

import { render, screen } from "@testing-library/react";

test("renders customers page", async () => {
  
  const mockCustomers = [
    { id: 1, name: "Customer 1", location: "Location A" },
    { id: 2, name: "Customer 2", location: "Location B" },
  ];

  fetchMock.mockResponseOnce(JSON.stringify(mockCustomers));

  const result = await CustomersPage({timeout: 0});
  render(result);
  
  const customer1 = screen.getByText("Customer 1");
  const customer2 = screen.getByText("Customer 2");
  expect(customer1).toBeInTheDocument();
  expect(customer2).toBeInTheDocument();
});