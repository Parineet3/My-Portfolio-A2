import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import SignUp from "../pages/SignUp.jsx";

test("renders Sign Up form", () => {
  render(
    <BrowserRouter>
      <SignUp />
    </BrowserRouter>
  );

  expect(screen.getByPlaceholderText("Email Address")).toBeInTheDocument();
});
