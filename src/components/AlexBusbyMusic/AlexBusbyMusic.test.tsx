// import { render, screen } from "@testing-library/react";
import { render } from "@testing-library/react";
import AlexBusbyMusic from "./AlexBusbyMusic";
import { useState } from "react";

test("renders learn react link", () => {

  render(<AlexBusbyMusic />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
