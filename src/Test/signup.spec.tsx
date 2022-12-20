import { render, screen } from "@testing-library/react"
import { Signup } from "../module-account/signup"
import user from "@testing-library/user-event"
describe("testing functionality of sign up", () => {

    beforeEach(() => {
        render(<Signup />);
    })

    it("check the fields", () => {
        const first_name_lable = screen.getByTestId("first_name-lable");
        expect(first_name_lable).toBeInTheDocument();

        const first_name_input = screen.getByTestId("first_name-input");
        expect(first_name_input).toBeInTheDocument();

        const last_name_label = screen.getByTestId("last_name-label");
        expect(last_name_label).toBeInTheDocument();

        const last_name_input = screen.getByTestId("last_name-input");
        expect(last_name_input).toBeInTheDocument();

        const email_lable = screen.getByTestId("email-lable");
        expect(email_lable).toBeInTheDocument();

        const email_input = screen.getByTestId("email-input");
        expect(email_input).toBeInTheDocument();

        const password_lable = screen.getByTestId("password-lable");
        expect(password_lable).toBeInTheDocument();

        const password_input = screen.getByTestId("password-input");
        expect(password_input).toBeInTheDocument();

        const submit_button = screen.getByTestId("submit-button");
        expect(submit_button).toBeInTheDocument();
    })

    it("fill the inputs", async () => {
        const first_name_input = screen.getByTestId("first_name-input");
        user.type(first_name_input, "Arkadi");

        const last_name_input = screen.getByTestId("last_name-input");
        user.type(last_name_input, "Nazarian");

        const email_input = screen.getByTestId("email-input");
        user.type(email_input, "test@test.com");

        const password_input = screen.getByTestId("password-input");
        user.type(password_input, "12345678");

        const submit_button = screen.getByTestId("submit-button");
        user.click(submit_button)

        const sign_in= await screen.getByTestId("signin-literal");
        expect(sign_in).toBeInTheDocument();
    })

})