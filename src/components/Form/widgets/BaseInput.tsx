import type { JSONSchema7 as JSONSchema } from 'json-schema';
import * as React from 'react';
import { Input } from '../../Input';
import { FormWidgetProps } from '../';

const filterSuggestions = (
	text: string | null,
	suggestions: JSONSchema['examples'],
) => {
	if (!text || !suggestions) {
		return;
	}
	if (!Array.isArray(suggestions)) {
		suggestions = [suggestions];
	}

	return suggestions.filter(
		(suggestion): suggestion is string =>
			// TODO: Grommet atm only supports string suggestions and throws if numbers are passed.
			typeof suggestion === 'string' &&
			suggestion.includes(text) &&
			suggestion !== text,
	);
};

const BaseInput = (props: FormWidgetProps) => {
	// Note: since React 15.2.0 we can't forward unknown element attributes, so we
	// exclude the "options" and "schema" ones here.
	const {
		value,
		readonly,
		disabled,
		autofocus,
		onBlur,
		onFocus,
		options,
		schema,
		formContext,
		dir,
		...inputProps
	} = props;

	const change = ({ target: { value } }: any) => {
		return props.onChange(value === '' ? options.emptyValue : value);
	};

	const suggestions = filterSuggestions(value, schema.examples);
	const hasExamples = ((schema.examples as string[])?.length ?? 0) > 0;

	return (
		<>
			<Input
				width="100%"
				readOnly={readonly}
				disabled={disabled}
				autoFocus={autofocus}
				// Form suggestions will clash with browser suggestions if autocomplete is on
				autoComplete={hasExamples ? 'off' : (options.autoComplete as string)}
				emphasized={options.emphasized as boolean}
				data-field={`${schema.type} + ${widgets} + ${placeholder}`}
				value={value == null ? '' : value}
				type={
					schema.type === 'number'
						? 'number'
						: (options.inputType as string) || 'text'
				}
				dir={dir as 'rtl' | undefined}
				{...inputProps}
				onChange={change}
				onBlur={
					onBlur && ((event: any) => onBlur(inputProps.id, event.target.value))
				}
				onFocus={
					onFocus &&
					((event: any) => onFocus(inputProps.id, event.target.value))
				}
				onSelect={(e) => props.onChange(e.suggestion)}
				suggestions={suggestions}
				list={hasExamples ? 'dummy-datalist' : undefined}
			/>
			{/* In some versions of Chrome, just disabling autocomplete doesn't work, but having an empty datalist does */}
			{hasExamples && <datalist id="dummy-datalist" />}
		</>
	);
};

export default BaseInput;
