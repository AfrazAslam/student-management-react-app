import styled from "styled-components";

interface GridContainerProps {
	columns?: number;
	minColumnWidth?: string;
	gap?: string;
	width?: string;
}

export const GridContainer = styled.div<GridContainerProps>`
	display: grid;

	grid-template-columns: repeat(
		auto-fill,
		minmax(${(props) => props.minColumnWidth || "150px"}, 1fr)
	);
	gap: ${(props) => props.gap || "16px"};
	width: ${(props) => props.width || "100%"};
	max-height: 80vh /* Responsive design */ @media (max-width: 1200px) {
		grid-template-columns: repeat(
			auto-fill,
			minmax(${(props) => props.minColumnWidth || "120px"}, 1fr)
		);
		gap: ${(props) => props.gap || "14px"};
	}

	@media (max-width: 900px) {
		grid-template-columns: repeat(
			auto-fill,
			minmax(${(props) => props.minColumnWidth || "120px"}, 1fr)
		);
		gap: ${(props) => props.gap || "12px"};
	}

	@media (max-width: 600px) {
		grid-template-columns: repeat(
			auto-fill,
			minmax(${(props) => props.minColumnWidth || "100px"}, 1fr)
		);
		gap: ${(props) => props.gap || "10px"};
	}
`;
