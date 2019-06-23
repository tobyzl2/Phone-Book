import React from 'react';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			phone: '',
			email: '',
			validName: true,
			validPhone: true,
			validEmail: true
		};
		this.handleStateChange = this.handleStateChange.bind(this);
		this.checkValidEntries = this.checkValidEntries.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleStateChange(event, state) {
		this.setState({ [state]: event.target.value });
	}

	checkValidEntries(entryType, entryValidity) {
		if (this.state[entryType] === '') {
			this.setState({ [entryValidity]: false });
		} else {
			this.setState({ [entryValidity]: true });
		}

		return this.state[entryType] !== '';
	}

	handleSubmit() {
		const validName = this.checkValidEntries('name', 'validName');
		const validPhone = this.checkValidEntries('phone', 'validPhone');
		const validEmail = this.checkValidEntries('email', 'validEmail');

		if (validName && validPhone && validEmail) {
			const url = `http://localhost:8000/write/${this.state.name}/${
				this.state.phone
			}/${this.state.email}`;
			fetch(url, { method: 'POST' });
			this.props.handlePageChange();
		}
	}

	buildNameInput() {
		let className = 'form-control';
		if (!this.state.validName) {
			className += ' is-invalid';
		}
		return (
			<div className='form-group'>
				<label htmlFor='nameInput'>Full Name</label>
				<input
					type='text'
					className={className}
					id='nameInput'
					placeholder='Enter name'
					value={this.state.name}
					onChange={e => this.handleStateChange(e, 'name')}
				/>
				<div className='invalid-feedback'>Please enter a name.</div>
			</div>
		);
	}

	buildPhoneInput() {
		let className = 'form-control';
		if (!this.state.validPhone) {
			className += ' is-invalid';
		}
		return (
			<div className='form-group'>
				<label htmlFor='phoneInput'>Phone number</label>
				<input
					type='text'
					className={className}
					id='phoneInput'
					placeholder='Enter phone'
					value={this.state.phone}
					onChange={e => this.handleStateChange(e, 'phone')}
				/>
				<div className='invalid-feedback'>Please enter a phone.</div>
			</div>
		);
	}

	buildEmailInput() {
		let className = 'form-control';
		if (!this.state.validEmail) {
			className += ' is-invalid';
		}
		return (
			<div className='form-group'>
				<label htmlFor='emailInput'>Email address</label>
				<input
					type='email'
					className={className}
					id='emailInput'
					placeholder='Enter email'
					value={this.state.email}
					onChange={e => this.handleStateChange(e, 'email')}
				/>
				<div className='invalid-feedback'>Please enter an email.</div>
				<small className='form-text text-muted'>
					We'll never share your email with anyone else.
				</small>
			</div>
		);
	}

	buildForm() {
		return (
			<div className='card w-50 mx-auto my-5'>
				<div className='card-body'>
					<h5 className='card-title text-center'>Add a New Entry</h5>
					<form autoComplete='off'>
						{this.buildNameInput()}
						{this.buildPhoneInput()}
						{this.buildEmailInput()}
					</form>
					<div className='text-center'>
						<button
							type='button'
							className='btn btn-primary'
							onClick={this.handleSubmit}
						>
							Submit
						</button>
					</div>
				</div>
			</div>
		);
	}

	render() {
		return this.buildForm();
	}
}

export default Form;
