import * as React from 'react';
import {Component} from 'react';
import {Field, FormErrors, FormProps, FormWarnings, reduxForm, WrappedFieldProps} from 'redux-form';
import {Identity} from '../type/Identity';

interface IdentityFormProps {
}

interface IdentityFormState {
}

const validate = (values: Identity) => {
    const errors: FormErrors<Identity> = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length < 3) {
        errors.firstName = 'Must be 3 characters or more';
    }
    return errors;
};

const warn = (values: Identity) => {
    const warnings: FormWarnings<Identity> = {};
    if (values.firstName === 'John') {
        warnings.firstName = 'John is already taken';
    }
    return warnings;
};

class IdentityForm extends Component<
    IdentityFormProps &
    FormProps<Identity, IdentityFormProps, IdentityFormState>, IdentityFormState> {

    renderForm({input, meta}: WrappedFieldProps<IdentityFormState>) {
        return (
            <div className="input-row">
                <input type="text" {...input}/>
                <div>
                    {meta.touched && meta.error && <span className="error">{meta.error}</span>}
                    {meta.touched && meta.warning && <span className="warning">{meta.warning}</span>}
                </div>
            </div>
        );
    }

    render() {
        const {pristine, submitting, reset} = this.props;
        return (
            <form>
                <div>
                    <label>First Name</label>
                    <div>
                        <Field name="firstName" component={this.renderForm} placeholder="First Name"/>
                    </div>
                </div>
                <div>
                    <label>Last Name</label>
                    <div>
                        <Field name="lastName" component={this.renderForm} placeholder="Last Name"/>
                    </div>
                </div>
                <div>
                    <button type="submit" disabled={pristine || submitting}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
                </div>
            </form>
        );
    }

}

export default reduxForm({
    form: 'simple',
    validate,
    warn
})(IdentityForm);