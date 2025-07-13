import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import SearchHistoryItem from "..";

describe("SearchHistoryItem", () => {
	const mockHandleDelete = vi.fn();
	const history = ["Kyiv, Ukraine", "London, UK"];
	const option = "Kyiv, Ukraine";

	it("renders the city name", () => {
		render(
			<SearchHistoryItem
				history={history}
				option={option}
				handleDelete={mockHandleDelete}
			/>
		);
		expect(screen.getByText(option)).toBeInTheDocument();
	});

	it("calls handleDelete when delete button is clicked", () => {
		render(
			<SearchHistoryItem
				history={history}
				option={option}
				handleDelete={mockHandleDelete}
			/>
		);
		const deleteBtn = screen.getByTestId("delete-history-item");
		fireEvent.click(deleteBtn);
		expect(mockHandleDelete).toHaveBeenCalledWith(option);
	});

	it("does not render delete button if city is not in history", () => {
		render(
			<SearchHistoryItem
				history={[]}
				option={option}
				handleDelete={mockHandleDelete}
			/>
		);
		expect(screen.queryByTestId("delete-history-item")).not.toBeInTheDocument();
	});
});