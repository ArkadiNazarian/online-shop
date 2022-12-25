import { render, screen, waitFor } from "@testing-library/react"
import { Signup } from "../module-account/signup"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
    ...(jest.requireActual("react-router-dom") as any),
    useNavigate: () => mockedUsedNavigate
}));

describe("testing functionality of sign up", () => {

    beforeEach(() => {
        render(
            <BrowserRouter>
                <Signup />
            </BrowserRouter>);
    })

    it("check the fields", () => {
        const first_name_label = screen.getByTestId("first_name-label");
        expect(first_name_label).toBeInTheDocument();

        const first_name_input = screen.getByTestId("first_name-input");
        expect(first_name_input).toBeInTheDocument();

        const last_name_label = screen.getByTestId("last_name-label");
        expect(last_name_label).toBeInTheDocument();

        const last_name_input = screen.getByTestId("last_name-input");
        expect(last_name_input).toBeInTheDocument();

        const email_label = screen.getByTestId("email-label");
        expect(email_label).toBeInTheDocument();

        const email_input = screen.getByTestId("email-input");
        expect(email_input).toBeInTheDocument();

        const password_label = screen.getByTestId("password-label");
        expect(password_label).toBeInTheDocument();

        const password_input = screen.getByTestId("password-input");
        expect(password_input).toBeInTheDocument();

        const submit_button = screen.getByTestId("submit-button");
        expect(submit_button).toBeInTheDocument();
    })

    it("required inputs' errors", async () => {

        const submit_button = screen.getByTestId("submit-button");
        
        userEvent.click(submit_button)
        await waitFor(() => {
            expect(screen.getByTestId("first_name-error")).toBeInTheDocument();
            expect(screen.getByTestId("last_name-error")).toBeInTheDocument();
            expect(screen.getByTestId("email-error")).toBeInTheDocument();
            expect(screen.getByTestId("password-error")).toBeInTheDocument();
        })

    })

})