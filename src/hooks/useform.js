import { useState } from 'react';

const useForm = (values = {}) => {
	const [formValues, setFormValues] = useState(values);

	const handleChange = ({ target }) => {
		setFormValues({ ...formValues, [target.name]: target.value });
	};

	const reset = () => {
		setFormValues(values);
	};
	return [formValues, handleChange, reset];
};

export default useForm;
