import React from "react";
import { render } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<Root />);
    expect(getByText(/This is Footer \(Part Three in ReactJS\)/i)).toBeInTheDocument();
  });
});
