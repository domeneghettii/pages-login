import "../styles/globals.css";
			export const metadata = {
				title: "Meu App",
			};

			export default function RootLayout({ children }) {
				return (
					<html>
						<body>{children}</body>
					</html>
);
		}