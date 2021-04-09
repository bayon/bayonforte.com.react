import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import store from "../../redux/store";
import SearchPage from "./SearchPage";

describe("SearchPage", () => {
  test("renders SearchPage component", () => {
    render(
      <Provider store={store}>
        <SearchPage />
      </Provider>
    );

    screen.debug();
    //screen.findAllByText('Resume');
  });
});
