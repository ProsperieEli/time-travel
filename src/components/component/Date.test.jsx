import { fireEvent, render, screen } from "@testing-library/react";
import Date from "./Date";

describe("testing", () => {
  it("Only test for app", () => {
    render(<Date />);

    const input = screen.getByLabelText("input");
    const button1 = screen.getByLabelText("button-1");
    const button2 = screen.getByLabelText("button-2");

    fireEvent.change(input, {
      target: { value: ["2022-01-10", "2022-02-12", "2022-01-14"] },
    });
    fireEvent.change(button2, { target: { value: ["2022-02-12"] } });
    fireEvent.change(button1, { target: { value: ["2022-01-14"] } });
  });
});
