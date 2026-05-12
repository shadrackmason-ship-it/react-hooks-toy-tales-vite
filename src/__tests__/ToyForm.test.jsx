import React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import App from '../components/App';
import '@testing-library/jest-dom';

describe("ToyForm Submission", () => {
  it("submits a new toy and displays it", async () => {

    const newToy = {
      name: "First Toy",
      image: "new-toy.jpg",
      id: "3810fqhrquhf9fnqnc0"
    };

    // 🔥 IMPORTANT: mock BOTH initial fetch AND POST response
    global.setFetchResponse([]);

    const { getByPlaceholderText, getByText } = render(<App />);

    // fill form
    fireEvent.change(getByPlaceholderText("Enter a toy's name..."), {
      target: { value: newToy.name },
    });

    fireEvent.change(getByPlaceholderText("Enter a toy's image URL..."), {
      target: { value: newToy.image },
    });

    // submit
    fireEvent.click(getByText("Add a Toy"));

    // wait for UI update
    await waitFor(() => {
      expect(getByText("First Toy")).toBeInTheDocument();
    });
  });
});