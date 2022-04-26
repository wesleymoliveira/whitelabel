export interface UserProps {
	user: {
		id: number;
		name: string;
		qr_code: string;
		devices?: DeviceProps[];
	};
}

export interface DeviceProps {
	device_id: string;
	user_id: number;
}
