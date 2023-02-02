import { act, render, screen, waitFor } from "@testing-library/react"
import { Signup } from "../Modules/module-account/signup/index"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"

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

    it("required inputs' error messages", async () => {

        const submit_button = screen.getByTestId("submit-button");

        userEvent.click(submit_button);
        await waitFor(() => {
            expect(screen.getByTestId("first_name-error")).toBeInTheDocument();
            expect(screen.getByTestId("last_name-error")).toBeInTheDocument();
            expect(screen.getByTestId("email-error")).toBeInTheDocument();
            expect(screen.getByTestId("password-error")).toBeInTheDocument();
        })

    })

    it("invalid email address error message", async () => {

        const email_input = screen.getByTestId("email-input");
        userEvent.type(email_input, "email");

        const submit_button = screen.getByTestId("submit-button");

        userEvent.click(submit_button);
        await waitFor(() => {
            expect(screen.getByText("Invalid email format")).toBeInTheDocument();
        })

    })

    it("short password error message", async () => {

        const password_input = screen.getByTestId("password-input");
        userEvent.type(password_input, "123");

        const submit_button = screen.getByTestId("submit-button");

        userEvent.click(submit_button);
        await waitFor(() => {
            expect(screen.getByText("Too short")).toBeInTheDocument();
        })

    })

    it("fill input with correct data types", async () => {
        await act(async () => {
            const first_name_input = screen.getByTestId("first_name-input");
            userEvent.type(first_name_input, "Arkadi");
            const last_name_input = screen.getByTestId("last_name-input");
            userEvent.type(last_name_input, "Nazarian");
            const email_input = screen.getByTestId("email-input");
            userEvent.type(email_input, "example@example.com");
            const password_input = screen.getByTestId("password-input");
            userEvent.type(password_input, "123456789");

            const submit_button = screen.getByTestId("submit-button");

            userEvent.click(submit_button);

            await waitFor(() => {
                expect(screen.queryByTestId("first_name-error")).not.toBeInTheDocument()
                expect(screen.queryByTestId("last_name-error")).not.toBeInTheDocument();
                expect(screen.queryByTestId("email-error")).not.toBeInTheDocument();
                expect(screen.queryByTestId("password-error")).not.toBeInTheDocument();
            })
        })

    })

    it("navigate to signin", async () => {

        const goto_signin = screen.getByTestId("signin");
        userEvent.click(goto_signin);

        await waitFor(() => {
            expect(screen.getByTestId("email-input")).toBeInTheDocument()
            expect(screen.getByTestId("password-input")).toBeInTheDocument();
        })
    })

})