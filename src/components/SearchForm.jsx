import React from "react";
import { Form } from "react-router-dom";

function SearchForm({ searchTerm }) {
    return (
        <Form method="GET" className="container mx-auto flex justify-between bg-white p-2 font-inherit rounded-lg">
            <input
                type="text"
                name="search"
                id="search"
                defaultValue={searchTerm}
                required
                className="w-5/6 p-2 border-none font-inherit text-lg outline-none"
            />
            <button
                type="submit"
                className="p-2 px-4 border-none bg-blue-500 text-white font-semibold text-base font-inherit rounded-sm cursor-pointer"
            >
                Search
            </button>
        </Form>
    );
}

export default SearchForm;
