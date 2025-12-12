import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import SignIn from "../pages/SignIn.jsx";

test("renders Sign In form", () => {
  render(
    <BrowserRouter>
      <SignIn />
    </BrowserRouter>
  );

  expect(screen.getByPlaceholderText("Email Address")).toBeInTheDocument();
});
