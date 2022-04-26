import { OutlinedTextFieldProps } from '@mui/material';
import { LoadingButtonProps } from '@mui/lab';
export interface StyledButtonProps extends LoadingButtonProps {
	secondary?: boolean;
}

export interface HeaderProps {
	leftAction?: () => void;
	rightAction?: () => void;
	homeOnLeft?: boolean;
	noLeftContent?: boolean;
	noCenterContent?: boolean;
	noRightContent?: boolean;
}

export interface AuctionItems {
	auction_items: {
		artist: string;
		courtesy_of: string;
		description: string;
		id: number;
		image: string;
		lot: number;
		name: string;
		previous_bid: string;
		price: string;
		video: string;
		slug: string;
		highest_bid: string;
	}[];
}

export type TDonations = {
	id: number;
	user_id: number;
	user_device_id: string;
	amount: string;
	created_at: string;
	updated_at: string;
};

export type TDevices = {
	id: number;
	user_id: number;
	device_id: string;
	created_at: string;
	updated_at: string;
};

export type TUser = {
	name: string;
	id: number;
	qr_code: string;
	email: string;
	phone: string;
	devices: Array<TDevices>;
	donations: Array<TDonations>;
	created_at: string;
	updated_at: string;
};

export interface IUsers {
	userList: Array<TUser>;
}

export interface IHookedInput extends OutlinedTextFieldProps {
	control: any;
	rules?: any;
	errorMsg?: string;
	helperText?: string;
}

export interface TUserForm {
	email: string;
	phone: string;
	name: string;
}

export interface IQrCode {
	user: TUser;
}

export interface TItemForm {
	name: string;
	price: string;
	video: File;
	image: File;
	description: string;
	artist: string;
	courtesy_of: string;
	lot: string;
}
export interface ISnackContext {
	handleShow: (p: TSnackState) => void;
}

export type TSnackState = {
	isOpen?: boolean;
	message: string;
	severity?: TSeverity;
};

export type TSeverity = 'error' | 'info' | 'success' | 'warning';

export type TAuctionItem = {
	artist: string;
	courtesy_of: string;
	description: string;
	id: number;
	image: string;
	lot: number;
	name: string;
	previous_bid: string;
	price: string;
	highest_bid: string;
	video: string;
};

export type TAuctionItemData = { auction_items: TAuctionItem[] };

export interface IItemPage {
	ssrItem: TAuctionItem;
}

export type TVideoInfo = {
	name: string;
	ext: string;
	full: string;
};
