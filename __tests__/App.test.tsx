import React from "react";
import { render, screen } from "@testing-library/react";
import App from '../src/App';

test("App", () => {
  render(<App/>);
  const text = screen.getByText("My React and TypeScript App!");
  expect(text).toBeInTheDocument();
});