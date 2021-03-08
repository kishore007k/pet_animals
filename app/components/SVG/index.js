import React from "react";
import { SvgXml } from "react-native-svg";

import {
	cartActive,
	cartInActive,
	consultActive,
	consultInActive,
	homeActive,
	homeInActive,
	kennelsActive,
	kennelsInActive,
	userActive,
	userInActive,
} from "./svg.data";

export const ActiveCartIcon = () => (
	<SvgXml xml={cartActive} min-width="100%" min-height="100%" />
);
export const InActiveCartIcon = () => (
	<SvgXml xml={cartInActive} min-width="100%" min-height="100%" />
);
export const ActiveConsultIcon = () => (
	<SvgXml xml={consultActive} min-width="100%" min-height="100%" />
);
export const InActiveConsultIcon = () => (
	<SvgXml xml={consultInActive} min-width="100%" min-height="100%" />
);
export const ActiveHomeIcon = () => (
	<SvgXml xml={homeActive} min-width="100%" min-height="100%" />
);
export const InActiveHomeIcon = () => (
	<SvgXml xml={homeInActive} min-width="100%" min-height="100%" />
);
export const ActiveKennelsIcon = () => (
	<SvgXml xml={kennelsActive} min-width="100%" min-height="100%" />
);
export const InActiveKennelsIcon = () => (
	<SvgXml xml={kennelsInActive} min-width="100%" min-height="100%" />
);
export const ActiveUserIcon = () => (
	<SvgXml xml={userActive} min-width="100%" min-height="100%" />
);
export const InActiveUserIcon = () => (
	<SvgXml xml={userInActive} min-width="100%" min-height="100%" />
);
