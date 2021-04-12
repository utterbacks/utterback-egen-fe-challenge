import React from "react";

function Layout({ children }) {
	function useToggle(initialValue = true) {
		const [value, setValue] = React.useState(initialValue);
		const toggle = React.useCallback(() => {
			setValue((v) => !v);
		}, []);
		return [value, toggle];
	}
	const [isOn, toggleIsOn] = useToggle();

	return (
		<div className={isOn ? "light-theme" : "dark-theme"}>
			<header className="nav">
				<a href="/">
					<div>devjobs</div>
				</a>
				<div>
					<i class="far fa-moon"></i>{" "}
					{isOn ? (
						<i class="fas fa-toggle-on" onClick={toggleIsOn}></i>
					) : (
						<i class="fas fa-toggle-off" onClick={toggleIsOn}></i>
					)}{" "}
					<i class="far fa-sun"></i>
				</div>
			</header>
			<div>{children}</div>
		</div>
	);
}

export default Layout;
