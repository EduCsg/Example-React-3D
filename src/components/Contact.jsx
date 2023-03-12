import styled from "styled-components";
import Map from "./Map";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

const Section = styled.div`
	height: 100vh;
	scroll-snap-align: center;
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-between;
	gap: 50px;
`;

const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	@media only screen and (max-width: 768px) {
		justify-content: center;
	}
`;

const Title = styled.h1`
	font-weight: 200;
`;

const Form = styled.form`
	width: 500px;
	display: flex;
	flex-direction: column;
	gap: 25px;
	@media only screen and (max-width: 768px) {
		width: 300px;
	}
`;

const Input = styled.input`
	padding: 20px;
	background-color: #e8e6e6;
	border: none;
	border-radius: 5px;
`;

const TextArea = styled.textarea`
	padding: 20px;
	border: none;
	border-radius: 5px;
	background-color: #e8e6e6;
`;

const SendButton = styled.button`
	background-color: #da4ea2;
	color: white;
	border: none;
	font-weight: bold;
	cursor: pointer;
	border-radius: 5px;
	padding: 20px;
`;

const DisabledButton = styled.button`
	background-color: #da4ea2d3;
	color: white;
	border: none;
	font-weight: bold;
	border-radius: 5px;
	padding: 20px;
`;

const Right = styled.div`
	flex: 1;

	@media only screen and (max-width: 768px) {
		display: none;
	}
`;

const Contact = () => {
	const [success, setSuccess] = useState(null);
	const [sending, setSending] = useState(false);
	const form = useRef();

	const [formName, setFormName] = useState("");
	const [formEmail, setFormEmail] = useState("");
	const [formText, setFormText] = useState("");

	const clearFormInputs = () => {
		setFormName("");
		setFormEmail("");
		setFormText("");
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setSending(true);

		emailjs
			.sendForm(
				"service_c28a1h8",
				"template_lrwz0cz",
				form.current,
				"Eq5XSAFkOSrONPeEA",
			)
			.then(
				(result) => {
					console.log(result.text);
					setSending(false);
					setSuccess(true);
					clearFormInputs();
				},
				(error) => {
					console.log(error.text);
					setSending(false);
					setSuccess(true);
					clearFormInputs();
				},
			);
	};

	return (
		<Section>
			<Container>
				<Left>
					<Form ref={form} onSubmit={handleSubmit}>
						<Title>Contact Us</Title>
						<Input
							value={formName}
							placeholder="Name"
							name="name"
							onChange={(e) => setFormName(e.target.value)}
						/>
						<Input
							value={formEmail}
							placeholder="Email"
							name="email"
							onChange={(e) => setFormEmail(e.target.value)}
						/>
						<TextArea
							placeholder="Write your message!"
							name="message"
							rows={10}
							value={formText}
							onChange={(e) => setFormText(e.target.value)}
						/>

						{sending ? (
							<DisabledButton type="submit" disabled className="sending">
								Sending...
							</DisabledButton>
						) : (
							<SendButton type="submit">Send!</SendButton>
						)}

						{success && "Success! The email has been sent!"}
						{success === false && "An error ocurred, please try again later"}
					</Form>
				</Left>
				<Right>
					<Map />
				</Right>
			</Container>
		</Section>
	);
};

export default Contact;
