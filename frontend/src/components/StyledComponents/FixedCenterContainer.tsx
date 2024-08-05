import styled from "styled-components";

interface FlexedCenterContainerProps {
	gap?: string;
	alignItems?: string;
	background?: string;
	justify?: string;
	width?: string;
	height?: string; // Ensure the parent provides a height for this to work
	direction?: string;
	overflow?: string;
}

export const FlexedCenterContainer = styled.div<FlexedCenterContainerProps>`
	display: flex;
	background: ${(props) => props.background || ""};
	align-items: ${(props) => props.alignItems || "center"};
	justify-content: ${(props) => props.justify || "center"};
	gap: ${(props) => props.gap || "8px"};
	width: ${(props) => props.width || "100%"};
	height: ${(props) => props.height || "100vh"};
	flex-direction: ${(props) => props.direction || "row"};
	overflow: ${(props) => props.overflow || "auto"};

	/* Responsive Design */
	@media (max-width: 1200px) {
		align-items: ${(props) => props.alignItems || "center"};
		justify-content: ${(props) => props.justify || "center"};
	}

	@media (max-width: 900px) {
		gap: ${(props) => props.gap || "6px"};
		justify-content: ${(props) => props.justify || "flex-start"};
	}

	@media (max-width: 600px) {
		flex-direction: column;
		gap: ${(props) => props.gap || "4px"};
		width: 100%;
		padding: 0 10px;
	}
`;
