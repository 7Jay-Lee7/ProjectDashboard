import React, { useState } from "react";
import getRandomMessage from "@/messages/messages";

const Messages = () => {
	const [message, setMessage] = useState("");

	const handleNewMessage = () => {
		const newMessage = getRandomMessage();
		setMessage(newMessage);
	};

	return (
		<div className="flex flex-col h-screen justify-center items-center">
			<div className="flex-shrink-0">
				<p className="text-red-950 text-3xl mb-16 font-extrabold">Inspiring Messages</p>
			</div>
			<div className="flex flex-grow flex-col items-center justify-center p-5 mb-10 h-40 w-96 m-4 font-extrabold">
				<div id="displayMessage">{message}</div>
				<div className="button flex justify-center items-center mt-3">
					<button className="push" type="button" onClick={handleNewMessage}>
						Push Me!
					</button>
				</div>
			</div>
		</div>
	);
};

export default Messages;
