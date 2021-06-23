import React, { useState, useDebugValue, useEffect } from "react";

export const ToDoList = props => {
	const [inputValue, setValue] = useState("");
	const [list, setList] = useState([]);
	const put = list.map((item, index) => {
		if (index == null) {
			return { label: "sample task", done: false };
		}
		return { label: item, done: false };
	});

	useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/psoto-go")
			.then(resp => {
				console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
				if (resp.ok && list.length > 0) {
					fetch(
						"https://assets.breatheco.de/apis/fake/todos/user/psoto-go",
						{
							method: "PUT",
							body: JSON.stringify(put),
							headers: { "Content-Type": "application/json" }
						}
					)
						.then(resp => {
							console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
							console.log(resp.status); // el código de estado = 200 o código = 400 etc.
							//console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
							return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
						})
						.then(data => {
							//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
							console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
						})
						.catch(error => {
							//manejo de errores
							console.log(error);
						});
				}
				if (resp.status === 404) {
					fetch(
						"https://assets.breatheco.de/apis/fake/todos/user/psoto-go",
						{
							method: "POST",
							body: "[]",
							headers: { "Content-Type": "application/json" }
						}
					);
				}
				//console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
				return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
			})
			.then(data => {
				//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
				console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
			})
			.catch(error => {
				//manejo de errores
				console.log(error);
			});
	}, [list]);

	var lis = list.map((item, index) => (
		<li
			className="list-group-item d-flex justify-content-between align-items-center"
			key={index}
			onMouseEnter={e => {
				e.target.querySelector("button").style.display = "block";
			}}
			onMouseLeave={e => {
				e.target.querySelector("button").style.display = "none";
			}}>
			{item}

			<button
				style={{ display: "none" }}
				type="button"
				className="btn btn-link"
				onClick={e => {
					let resul = list.filter((e, i) => {
						return i !== index;
					});
					setList(resul);
				}}>
				<i className="fas fa-times" style={{ color: "red" }}></i>
			</button>
		</li>
	));

	return (
		<div className="container">
			<h1>todos</h1>
			<div className="row">
				<div className="col-lg">
					<div>
						<div className="input-group mb-3">
							<input
								type="text"
								onChange={e => {
									setValue(e.target.value);
								}}
								onKeyPress={e => {
									if (e.key === "Enter") {
										if (inputValue != "") {
											setList([...list, inputValue]);
										}
									}
								}}
								className="form-control"
								placeholder="What's need to be done?"
								aria-label="Recipient's username"
								aria-describedby="button-addon2"
							/>
						</div>
						<ul className="list-group">{lis}</ul>
						<li className="list-group-item d-flex justify-content-between align-items-center">
							{lis.length} item left
						</li>
					</div>
					<button
						type="button"
						className="btn btn-danger m-3"
						onClick={e => {
							setList([]);
							fetch(
								"https://assets.breatheco.de/apis/fake/todos/user/psoto-go",
								{
									method: "DELETE",
									headers: {
										"Content-Type": "application/json"
									}
								}
							)
								.then(resp => {
									console.log(resp.ok); // Será true (verdad) si la respuesta es exitosa.
									console.log(resp.status); // el código de estado = 200 o código = 400 etc.
									//console.log(resp.text()); // Intentará devolver el resultado exacto como cadena (string)
									return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
								})
								.then(data => {
									//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
									console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
								})
								.catch(error => {
									//manejo de errores
									console.log(error);
								});
						}}>
						Borrar Todo`s
					</button>
				</div>
			</div>
		</div>
	);
};
