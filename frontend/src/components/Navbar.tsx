// Navbar.tsx
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/Safepay-logo_white.svg";
import styled from "styled-components";
import { colors } from "./StyledComponents/Common";
import { FlexedCenterContainer } from "./StyledComponents/FixedCenterContainer";
import SearchStudents from "./Student/SearchStudents";

// Components

const NavBarContainer = styled.nav`
	border-bottom: 2px solid ${colors.orange};
	background: ${colors.blue};
	color: white;
	padding: 0 20px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavLink = styled(Link)`
	color: white;
	margin: 0 10px;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

const NavLinks = styled.div`
	display: flex;
	gap: 15px;
`;

const SafepayLogo = styled.img`
	width: 120px;
`;

const Navbar: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const navigate = useNavigate();

	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value);
	};

	const handleSearchSubmit = (e: FormEvent) => {
		e.preventDefault();
		if (searchTerm) {
			navigate(`/lookup?uuid=${searchTerm}`);
		}
	};

	return (
		<NavBarContainer>
			<NavLinks>
				<Link to="/">
					<SafepayLogo src={logo} alt="SafePay" />
				</Link>
			</NavLinks>

			<FlexedCenterContainer
				height={"100%"}
				justify={"flex-end"}
				overflow={"hidden"}
			>
				<NavBarContainer>
					<NavLink to="/">Add Students</NavLink>
					<NavLink to="/lookup">Find Students</NavLink>
				</NavBarContainer>
				<SearchStudents
					searchTerm={searchTerm}
					onSearchChange={handleSearchChange}
					onSearchSubmit={handleSearchSubmit}
				/>
			</FlexedCenterContainer>
		</NavBarContainer>
	);
};

export default Navbar;
