// Search.tsx
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import React, { ChangeEvent, FormEvent } from "react";
import { commonInputStyles, IconButton } from "../StyledComponents/Common";

interface SearchProps {
	searchTerm?: string;
	onSearchChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	onSearchSubmit: (e: FormEvent) => void;
}
// Components

const SearchInput = styled.input`
	${commonInputStyles};
	flex: 1;
`;

const SearchForm = styled.form`
	display: flex;
	align-items: center;
	gap: 8px;
`;

const SearchStudents: React.FC<SearchProps> = ({
	searchTerm,
	onSearchChange,
	onSearchSubmit,
}) => {
	return (
		<SearchForm onSubmit={onSearchSubmit}>
			<SearchInput
				type="text"
				placeholder="Search by UUID"
				value={searchTerm}
				onChange={onSearchChange}
			/>
			<IconButton type="submit">
				<FiSearch />
			</IconButton>
		</SearchForm>
	);
};

export default SearchStudents;
