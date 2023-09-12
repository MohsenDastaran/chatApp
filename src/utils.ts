import type {
	ICall,
	IContact,
	IConversation,
	IMessage,
	IRecording,
} from "@src/types";
import useStore from "@src/store/store";

/**
 * combine first name and last name of a contact.
 * @param contact
 * @returns A string the combines the first and last names.
 */
export const getFullName = (contact: IContact) => {
	return contact.firstName + " " + contact.lastName;
};

/**
 * get the other contact that is not the authenticated user.
 * @param conversation
 * @returns A contact object representing the other user in the conversation.
 */
export const getOddContact = (conversation: IConversation) => {
	const store = useStore();

	let oddContact;

	for (let contact of conversation.contacts) {
		if (store.user && contact.id !== store.user.id) {
			oddContact = contact;
		}
	}

	return oddContact;
};

/**
 * get avatar based on conversation type.
 * @param conversation
 * @returns A string representing the url to the avatar image
 */
export const getAvatar = (conversation?: IConversation) =>
	"data:image/png;base64,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";

// {

//   if (["group", "broadcast"].includes(conversation.type)) {
//     return conversation?.avatar;
//   } else {
//     let oddContact = getOddContact(conversation);
//     return oddContact?.avatar;
//   }
// };

/**
 * get name based on conversation type.
 * @param conversation
 * @returns String
 */
export const getName = (conversation: IConversation) => {
	if (["group", "broadcast"].includes(conversation.type)) {
		return conversation?.name;
	} else {
		let oddContact = getOddContact(conversation);
		if (oddContact) {
			return getFullName(oddContact);
		}
	}
};

/**
 * trim a string when it reaches a certain length and adds three dots
 * at the end.
 * @param text
 * @param maxLength
 * @returns A string that is trimmed according the length provided
 */
export const shorten = (message: IMessage | string, maxLength: number = 23) => {
	let text: string | IRecording | undefined;

	if (typeof message === "string") {
		text = message;
	} else {
		text = message.content;
	}

	if (text && typeof text === "string") {
		let trimmedString = text;
		if (text.length > maxLength) {
			// trim the string to the maximum length.
			trimmedString = trimmedString.slice(0, maxLength);
			// add three dots to indicate that there is more to the message.
			trimmedString += "...";
		}
		return trimmedString;
	}

	return "";
};

/**
 * test if the message contains attachments
 * @param message
 * @returns A boolean indicating whether the message has attachments
 */
export const hasAttachments = (message: IMessage) => {
	let attachments = message.attachments;
	return attachments && attachments.length > 0;
};

/**
 * get index of the conversation inside the conversations array
 * @param conversationId
 * @returns A number indicating the index of the conversation.
 */
export const getConversationIndex = (
	conversationId: number
): number | undefined => {
	let conversationIndex;
	const store = useStore();

	store.conversations.forEach((conversation, index) => {
		if (conversation.id === conversationId) {
			conversationIndex = index;
		}
	});

	return conversationIndex;
};

/**
 * takes a call object and returns all the members
 * of the call except the authenticated user.
 * @param call
 * @returns An array containing the contacts participating in the call
 */
export const getOtherMembers = (call: ICall) => {
	const store = useStore();
	let members = [];

	if (call) {
		for (let member of call.members) {
			if (store.user && member.id !== store.user.id) {
				members.push(member);
			}
		}
	}

	return members;
};

/**
 * takes a call object and returns a name for the call
 * @param call
 * @param full
 * @param maxLength
 * @returns A string representing name of the call.
 */
export const getCallName = (
	call: ICall,
	full?: boolean,
	maxLength: number = 20
) => {
	let members = getOtherMembers(call);
	let callName: string = "";

	for (let member of members) {
		callName += getFullName(member);

		if (members.length > 1) {
			callName += ", ";
		}
	}

	if (full) {
		return callName;
	} else {
		return shorten(callName, maxLength);
	}
};

export const getMessageById = (
	conversation: IConversation,
	messageId?: number
) => {
	if (messageId) {
		return conversation.messages.find((message) => message.id === messageId);
	}
};

/**
 * Convert unicode to native emoji
 *
 * @param unicode - emoji unicode
 */
export const unicodeToEmoji = (unicode: string) => {
	return unicode
		.split("-")
		.map((hex) => parseInt(hex, 16))
		.map((hex) => String.fromCodePoint(hex))
		.join("");
};
