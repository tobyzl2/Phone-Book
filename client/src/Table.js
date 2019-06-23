import React from 'react';

class Table extends React.Component {
	constructor(props) {
		super(props);
		this.state = { data: [] };
	}

	callAPI() {
		const url = 'http://localhost:8000';
		fetch(url)
			.then(res => res.json())
			.then(res => {
				this.setState({ data: res });
			})
			.catch(err => {
				console.log(err);
			});
	}

	componentDidMount() {
		this.callAPI();
	}

	buildTableHeader(headers) {
		const tableHeader = (
			<tr>
				{headers.map((header, colIndex) => {
					return (
						<th key={colIndex.toString()} scope='col'>
							{header}
						</th>
					);
				})}
			</tr>
		);

		return tableHeader;
	}

	buildTableRows(data, headers) {
		const tableRows = data.map((value, rowIndex) => {
			return <tr key={rowIndex}>{this.buildTableRow(value, headers)}</tr>;
		});

		return tableRows;
	}

	buildTableRow(value, headers) {
		const tableRow = headers.map((header, colIndex) => {
			return <td key={colIndex.toString()}>{value[header]}</td>;
		});

		return tableRow;
	}

	render() {
		const data = this.state.data; // Array of entry objects

		if (typeof data === 'undefined' || data.length === 0) {
			return <div />;
		}

		const headers = Object.keys(data[0]); // Array of headers
		return (
			<div className='card w-75 mx-auto'>
				<div className='card-body'>
					<table className='table table-striped table-hover'>
						<thead>{this.buildTableHeader(headers)}</thead>
						<tbody>{this.buildTableRows(data, headers)}</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default Table;
