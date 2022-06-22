const getLink = (title: string, value: string): string => {
	return `https://raw.githubusercontent.com/windsonic/files/master/${title}/${value}`;
};

export {
	getLink
};
