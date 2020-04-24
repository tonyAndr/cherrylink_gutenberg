import React from 'react';
import { TextControl } from '@wordpress/components';
import { withState } from '@wordpress/compose';
 
// const TextFilter = withState( {
//     className: '',
// } )( ( { className, setState } ) => ( 
//     <TextControl
//         label="Additional CSS Class"
//         value={ className }
//         onChange={ ( className ) => setState( { className } ) }
//     />
// ) );

export class TextFilter extends React.Component {
    constructor(props) {
        super(props);

        this.handleONChange = this.handleONChange.bind(this);
    }
    handleONChange(text) {
        this.props.onChange({textFilter: text});
    }
    render () {
        const { currentFilter } = this.props;
        return (
            <TextControl
                value={ currentFilter }
                onChange={ this.handleONChange }
            />
        )
    }
}