import React from 'react';
import Table from './Table';
import Form from './Form';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { tablePage: true };
		this.handlePageChange = this.handlePageChange.bind(this);
	}

	handlePageChange() {
		this.setState({ tablePage: !this.state.tablePage });
	}

	render() {
		if (this.state.tablePage) {
			return (
				<div>
					<h1 className='text-center'>Phone Book</h1>
					<Table />
					<div className='text-center'>
						<button
							type='button'
							className='btn btn-primary my-3'
							onClick={this.handlePageChange}
						>
							Add Entry
						</button>
					</div>
				</div>
			);
		} else {
			return <Form handlePageChange={this.handlePageChange} />;
		}
	}
}

export default App;
